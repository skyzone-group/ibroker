<?php

namespace App\Http\Controllers\Blade;
use App\Http\Controllers\ResponseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TempImages;

class TempImagesController extends ResponseController
{
    //Uploading Image
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

    //Rotating Image
    public function rotateImage(Request $request)
    {
        /*
        //get image
        $image = TempImages::whereId($request->image_id)->first();
        $path = public_file_path() . $image->name;
        $source = imagecreatefrompng($path);
        $rotate = imagerotate($source, 270, 0);
        //get file extension
        $fileType   = substr($image->name, strrpos($image->name, '.') + 1);
        $newFileName = getCurrentMicrotime() . '.' . $fileType;
        //and save it on your server...
        $res = imagepng($rotate,public_file_path() . $newFileName);
        if($res) {
            TempImages::whereId($request->image_id)->update(['name' => $newFileName]);
            unlink(public_file_path()  . $image->name);
            return self::successResponse('Successfully rotated');
        }
        */

        $image = TempImages::whereId($request->image_id)->first();
        $path = public_file_path() . $image->name;
        $fileType   = substr($image->name, strrpos($image->name, '.') + 1);
        $newFileName = getCurrentMicrotime() . '.' . $fileType;

        if($fileType == 'png'){
            $source = imagecreatefrompng($path);
            $rotate = imagerotate($source, 270, 0);
            imagesavealpha($rotate, true);
            $res = imagepng($rotate, public_file_path() . $newFileName);
        }
        if($fileType == 'jpg' || $fileType == 'jpeg'){
            header('Content-type: image/jpeg');
            $source = imagecreatefromjpeg($path);
            $rotate = imagerotate($source, 270, 0);
            $res = imagejpeg($rotate, public_file_path() . $newFileName);
        }
        imagedestroy($source);
        imagedestroy($rotate);
        if($res) {
            TempImages::whereId($request->image_id)->update(['name' => $newFileName]);
            unlink(public_file_path()  . $image->name);
            return self::successResponse('Successfully rotated');
        }
    }
}
