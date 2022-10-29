<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\ResponseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends ResponseController
{
    //
    
    public function userInfo()
    {
        $user_id = auth('sanctum')->user()->id;
        $user = User::where('id', '=', $user_id)->get();
        return self::successResponse($user);
    }
    
    public function updateUserInfo(Request $request)
    {
        $user_id = auth('sanctum')->user()->id;
        
        // Image upload
        $image = $request->get('image');
        $imageBase64 = $image;
        
        $time = getCurrentMicrotime();
        $fileName = $time.'.jpg';
        
        list($type, $imageBase64) = explode(';', $imageBase64);
        list(, $imageBase64)      = explode(',', $imageBase64);
        
        $image_data = base64_decode($imageBase64);

        $filePath = "file/". $fileName;
        file_put_contents($filePath, $image_data);

        if(!file_exists("file/".$fileName)){
            return self::errorResponse('Image not uploaded');
        }
        // Image upload
        
        $user = User::where('id', '=', $user_id)->first();
        $user->image = $fileName;
        
        $user->save();
        return $request->all();
    }

    public function getMe()
    {
        $user = auth('sanctum')->user();
        return self::successResponse($user);
    }

    public function update(Request $request)
    {
        $user_id = auth('sanctum')->user()->id;
        
        $user = User::where('id', '=', $user_id)->first();
        if($request->get('firstname')) $user->firstname  = $request->get('firstname');
        if($request->get('lastname')) $user->lastname    = $request->get('lastname');
        if($request->get('email')) $user->email          = $request->get('email');
        if($request->get('password') && $request->get('new_password'))
        {
            if(!Hash::check($request->password, $user->password))
                return self::errorResponse('Password is incorrect');
            
            $user->password = Hash::make($request->new_password);
        }
        if($request->get('code'))
        {
            $data = session()->get('user');
            // checking verification code
            if (!$data || $data['code'] != $request->code )   return self::errorResponse('Verification code is incorrect');
            $user->phone = $data['phone'];
        }
        if($request->get('image'))
        {
            $image = $request->get('image');
            $fileName = uploadBase64Image($image);
            if(!$fileName){
                return self::errorResponse('Image not uploaded');
            }
            $user->image = $fileName;
        }
        if($request->get('delete_image') && $request->get('delete_image') == true)
        {
            $user->image = null;
        }
        $user->save();
        
        return self::successResponse($user);
    }
    
    public function changeNumber(Request $request)
    {
         // Void validator function
        $validate = $this->validate($request->all(), [
            'phone'     => 'required|integer|unique:users',
        ]);

        if ($validate !== true) return $validate;

        $code = generateNumber(4);

        session()->put([
            'user' => [
                'phone'     => $request->phone,
                'code'      => $code,
            ]
        ]);

        return self::successResponse([
            'message'   => 'Verification code sent successfully',
            'code'      => $code,
        ]);
    }
    
    public function searchUser(Request $request){
        $user_id = auth('sanctum')->user()->id;
        $phone = $request->phone;
        $user = User::query();
        if($user->where(['user_id' => $user_id])){
            return self::errorResponse('User not found');
        }
        $user->where('phone', '=', $phone)->first();
        return self::successResponse([
            'user'      => $user,
        ]);
    }
    
    public function sendUser(Request $request){
        $user_id = auth('sanctum')->user()->id;
        $friend = $request->get('friend');
        return $request->all();
    }
}
