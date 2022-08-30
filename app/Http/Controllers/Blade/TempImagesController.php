<?php

namespace App\Http\Controllers\Blade;
use App\Http\Controllers\ResponseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TempImages;

class TempImagesController extends ResponseController
{
    //
    public function uploadImage(Request $request)
    {
        $file = $request->image;
        
        //1024 * 1024 * 10 = 10485760 => 10MB max file size
        if($file->getSize() > 10 * 1024 * 1024) return self::errorResponse('Max file size is 10mb');
        
        $name = getCurrentMicrotime().'.'.$file->extension();
        $file->move(public_file_path(), $name);
        $image = TempImages::create([
            'name' => $name
        ]);
        
        return self::successResponse([
            'image_id'   => $image->id,
        ]);
    }
}
