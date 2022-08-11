<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


# Public routes
Route::post('/send-code', [AuthController::class, 'sendCode']);
Route::get('/resend-code', [AuthController::class, 'resendCode']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/reset-password-request', [AuthController::class, 'resetPasswordRequest']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);

# Protected routes
Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::get('/test', function(){
        return "Testing api route";
    });

    Route::post('/logout', [AuthController::class, 'logout']);

});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
