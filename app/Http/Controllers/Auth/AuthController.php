<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\ResponseController;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends ResponseController
{
    //
    public function register(Request $request)
    {
        // Void validator function
        $validate = $this->validate($request->all(), [
            'phone'     => 'required|integer|unique:users',
            'password'  => 'required|string|confirmed',
        ]);

        if ($validate !== true) return $validate;

        $user = User::create([
            'phone'      => $request->phone,
            'password'   => Hash::make($request->password),
            'api_token'  => \Illuminate\Support\Str::random(32)
        ]);

        $token = $user->createToken(floor(microtime(true) * 1000))->plainTextToken;

        return self::successResponse([
            'user_id' => $user['id'],
            'access_token' => $token
        ]);
    }

    public function login(Request $request)
    {
        $validate = $this->validate($request->all(), [
            'phone'     => 'required|integer',
            'password'  => 'required|string',
        ]);

        if ($validate !== true) return $validate;

        $user = User::where('phone', $request->phone)->first();

        if(!$user || !Hash::check($request->password, $user->password))
        {
            return self::authFailed();
        }

        $token = $user->createToken(floor(microtime(true) * 1000))->plainTextToken;

        return self::successResponse([
            'user_id' => $user['id'],
            'access_token' => $token
        ]);

    }

    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();
        return self::successResponse([
            'message' => 'Logged out',
        ]);
    }
}
