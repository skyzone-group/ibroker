<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Blade\TempImagesController;
use App\Http\Controllers\Blade\AddressController;
use App\Http\Controllers\Blade\ObjectController;
use App\Http\Controllers\Blade\ObjectTypesController;
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
Route::post('/send-code', [AuthController::class, 'sendCode']);
Route::get('/resend-code', [AuthController::class, 'resendCode']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/reset-password-request', [AuthController::class, 'resetPasswordRequest']);
Route::post('/reset-password', [AuthController::class, 'resetPassword']);
Route::post('/upload_image', [TempImagesController::class, 'uploadImage']);
Route::post('/rotate_image', [TempImagesController::class, 'rotateImage']);

Route::get('/allRegions', [AddressController::class, 'allRegions']);
Route::get('/districts/{region_id}', [AddressController::class, 'districts']);
Route::get('/quarters/{quarter_id}', [AddressController::class, 'quarters']);

// Object properties
Route::get('/objectTypes', [ObjectTypesController::class, 'objectTypes']);
Route::get('/objectProperty', [ObjectTypesController::class, 'objectProperty']);
Route::get('/additional/{object_id}', [ObjectTypesController::class, 'additionalFields']);


# Protected routes
Route::get('photo', 'App\Http\Controllers\Blade\ImageUploadController@index');
Route::post('st', 'App\Http\Controllers\Blade\ImageUploadController@store');
Route::get('show/{id}', function ($id) {
    $link = ImageUpload::find($id);
    return Response::json($link);
});
Route::post('update/{id}', 'App\Http\Controllers\Blade\ImageUploadController@update');
Route::post('store_image/delete/{id}', 'App\Http\Controllers\Blade\ImageUploadController@destroy');



Route::group(['middleware' => 'auth:sanctum'], function(){
    Route::get('/test', function(){
        return "Testing api route";
    });

    Route::post('/logout', [AuthController::class, 'logout']);
    // Create Object
    Route::post('/object/create', [ObjectController::class, 'createObject']);


});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
