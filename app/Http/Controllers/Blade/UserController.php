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
        // $image = $request->get('image');
        // $imageBase64 = $image[0];
        
        // $time = getCurrentMicrotime();
        // $fileName = $time.'.jpg';

        // list($type, $imageBase64) = explode(';', $imageBase64);
        // list(, $imageBase64)      = explode(',', $imageBase64);
        
        // $image_data = base64_decode($imageBase64);

        // $filePath = "file/". $fileName;
        // file_put_contents($filePath, $image_data);

        // if(!file_exists("file/".$fileName)){
        //     return self::errorResponse('Image not uploaded');
        // }
        // Image upload
        
        $user = User::where('id', '=', $user_id)->first();
        // $user->image = $image[0];
        if($request->email){
            $user->email = $request->email;
        }
        else if($request->first_name || $request->last_name){
            $user->name = $request->first_name.' '.$request->last_name ?? 0;
        }
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
        // if($request->get('phone')) $user->phone          = $request->get('phone');
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
}
