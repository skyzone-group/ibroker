<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\ResponseController;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Agents;
use Session;

class AuthController extends ResponseController
{
    //
    public function sendCode(Request $request)
    {
        // Void validator function
        $validate = $this->validate($request->all(), [
            'phone'     => 'required|integer|unique:users',
            'password'  => 'required|string|confirmed|min:8',
        ]);

        if ($validate !== true) return $validate;

        $code = generateNumber(4);

        session()->put([
            'user' => [
                'phone'     => $request->phone,
                'password'  => $request->password,
                'code'      => $code,
            ]
        ]);

        return self::successResponse([
            'message'   => 'Verification code sent successfully',
            'code'      => $code,
            'data'      => session()->get('user')
        ]);
    }
    //
    public function resendCode(Request $request)
    {
        $data = session()->get('user');

        $code = generateNumber(4);
        $data['code'] = $code;

        session()->put([
            'user' => $data
        ]);

        return self::successResponse([
            'message'   => 'Verification code sent successfully',
            'code'      => $code
        ]);
    }
    //
    public function register(Request $request)
    {
        $data = session()->get('user');
        // checking verification code
        if (!$data || $data['code'] != $request->code )   return self::errorResponse('Verification code is incorrect');

        $user = User::create([
            'phone'      => $data['phone'],
            'password'   => Hash::make($data['password']),
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
        $request->user()->currentAccessToken()->delete();
        //auth()->user()->tokens()->delete();
        return self::successResponse([
            'message' => 'Logged out',
        ]);
    }

    public function resetPasswordRequest(Request $request)
    {
        $validate = $this->validate($request->all(), [
            'phone'     => 'required|integer',
        ]);
        if ($validate !== true) return $validate;

        $user = User::where('phone', $request->phone)->first();
        if(!$user) return self::errorResponse('User not found');

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

    public function resetPassword(Request $request)
    {
        $data = session()->get('user');
        // checking verification code
        if ($data['code'] != $request->code)   return self::errorResponse('Verification code is incorrect');

        $user = User::where('phone', $request->phone)->first();
        if(!$user) return self::errorResponse('User not found');

        /*
         * Update password
         * */

        $token = $user->createToken(floor(microtime(true) * 1000))->plainTextToken;

        return self::successResponse([
            'user_id' => $user['id'],
            'access_token' => $token
        ]);
    }
}
