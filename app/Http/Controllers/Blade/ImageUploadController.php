<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ImageUpload;
class ImageUploadController extends Controller
{
    //
    public function index()  // this function show data in Table
    {
        return ImageUpload::paginate(2);
    }
    
    public function multipleupload(Request $request){
        $uploadFile = $request->image;
        return response(['fileextension'=>$uploadFile->extension()]);
    }
}
