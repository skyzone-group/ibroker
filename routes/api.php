<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Blade\TempImagesController;
use App\Http\Controllers\Blade\AddressController;
use App\Http\Controllers\Blade\ObjectController;
use App\Http\Controllers\Blade\ObjectTypesController;
use App\Http\Controllers\Blade\UserController;
use App\Http\Controllers\Blade\FriendController;
use App\Models\ImageUpload;
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

# Auth routes
Route::post('/send-code', [AuthController::class, 'sendCode']);
Route::get('/resend-code', [AuthController::class, 'resendCode']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/reset-password-request', [AuthController::class, 'resetPasswordRequest']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);

Route::post('/upload_image', [TempImagesController::class, 'uploadImage']);
Route::post('/rotate_image', [TempImagesController::class, 'rotateImage']);
Route::get('/allRegionQuarterDistrict', [AddressController::class, 'allRegionQuarterDistrict']);
Route::get('/allRegions', [AddressController::class, 'allRegions']);
Route::get('/allDistricts', [AddressController::class, 'allDistricts']);
Route::get('/allQuarters', [AddressController::class, 'allQuarters']);
Route::get('/districts/{region_id}', [AddressController::class, 'districts']);
Route::get('/quarters/{quarter_id}', [AddressController::class, 'quarters']);

# Object properties
Route::get('/objectTypes', [ObjectTypesController::class, 'objectTypes']);
Route::get('/objectProperty', [ObjectTypesController::class, 'objectProperty']);
Route::get('/additional/{object_id}', [ObjectTypesController::class, 'additionalFields']);

# Public objects
Route::get('/object/search', [ObjectController::class, 'search']); //search public objects
Route::get('/object/show/{object_id}', [ObjectController::class, 'show']);
Route::get('/object/getOthers/{user_id}', [ObjectController::class, 'getOthers']);

Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::post('/logout', [AuthController::class, 'logout']);
    
    # User Info
    Route::post('/user/info', [UserController::class, 'updateUserInfo']);
    Route::get('/user', [UserController::class, 'userInfo']);
    Route::get('/getme', [UserController::class, 'getMe']);
    Route::post('/user/update', [UserController::class, 'update']);
    Route::post('/user-phone/update', [UserController::class, 'changeNumber']);

    # Objects in USER ACCOUNT
    Route::get('/object/all', [ObjectController::class, 'getAll']);//get all objects in user account
    Route::post('/object/create', [ObjectController::class, 'create']);
    Route::get('/object/edit/{object_id}', [ObjectController::class, 'edit']);
    Route::post('/object/update/{object_id}', [ObjectController::class, 'update']);
    //Route::get('/object/show/{object_id}', [ObjectController::class, 'show']);

    # Friend
    Route::get('/friend/all', [FriendController::class, 'getAll']);
    Route::post('/friend/detail', [FriendController::class, 'detail']);
    Route::post('/friend/search', [FriendController::class, 'search']);
    Route::post('/friend/send-request', [FriendController::class, 'sendRequest']);
    Route::post('/friend/confirm', [FriendController::class, 'confirm']);
    Route::post('/friend/delete', [FriendController::class, 'delete']);
});