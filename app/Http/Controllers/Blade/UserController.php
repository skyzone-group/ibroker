<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\ResponseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;


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
        
        $image = $request->get('image');
        $imageBase64 = $image[0];
        
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
        
        $product = User::where('id', '=', $user_id)->first();
        $product->image = $image[0];
        $product->name = $request->first_name.' '.$request->last_name;
        $product->save();
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
        if($request->get('phone')) $user->phone          = $request->get('phone');
        $user->save();
        
        return self::successResponse($user);
    }
}
