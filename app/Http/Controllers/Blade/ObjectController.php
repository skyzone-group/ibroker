<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\ResponseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Models\Objects;
use App\Models\AdditionalFieldValues;
use App\Models\ObjectTypesPropertyValues;
use Session;

class ObjectController extends ResponseController
{
    public function createObject(Request $request)
    {

        $user_id = auth('sanctum')->user()->id;
        $data = Objects::create([
            'user_id'          => $user_id,
            'object_type_id'   => $request->get('object_type_id'),
            'object_time_type' => $request->get('object_time_type') ?? 0,
            'room_count'       => $request->get('room_count') ?? 0,
            'floor'            => $request->get('floor') ?? 0,
            'floor'            => $request->get('floor_count') ?? 0,
            'total_area'       => $request->get('total_area') ?? 0,
            'build_year'       => $request->get('build_year') ?? 0,
            'comment'          => $request->get('comment'),
            'price'            => $request->get('price'),
            'region_id'        => $request->get('region_id'),
            'district_id'      => $request->get('district_id'),
            'quarter_id'       => $request->get('quarter_id'),
        ]);
        
        $object = Objects::orderBy('id', 'DESC')->first();
        $objectId = $object->id;
        

        #Uploading image to server
        $imagesData = [];
        $images = $request->get('images');
        
        for($i = 0; $i < sizeof($images); $i++){

            $imageBase64 = $images[$i]['img'];
            
            $time = getCurrentMicrotime();
            $fileName = $time.'.jpg';

            list($type, $imageBase64) = explode(';', $imageBase64);
            list(, $imageBase64)      = explode(',', $imageBase64);
            
            $image_data = base64_decode($imageBase64);

            $filePath = "file/". $fileName;
            file_put_contents($filePath, $image_data);

            $imagesData[] = [
                'object_id'                => $objectId ?? 0,
                'name'                     => $images[$i]['img'],
                'created_at'               => now(),
                'updated_at'               => now(),
            ];
        }
        #end of uploading image
        
        // Additional Field Property Values
        $addtionalItems = sizeof($request->additional_field_id);
        $data = [];
        for($i = 0; $i < $addtionalItems; $i ++)
        {
            $data[] = [
                'additional_field_id'      => $request->additional_field_id[$i] ?? 0,
                'object_id'                => $objectId ?? 0,
                'created_at'               => now(),
                'updated_at'               => now(),
            ];
        }
        
        // Object Types Property Values
        $objectPropertyValues = sizeof($request->object_types_property_id);
        $values = [];
        for($i = 0; $i < $objectPropertyValues; $i ++)
        {
            $values[] = [
                'object_types_property_id' => $request->object_types_property_id[$i] ?? 0,
                'object_id'                => $objectId ?? 0,
                'created_at'               => now(),
                'updated_at'               => now(),
            ];
        }
        
        $object->save();
        AdditionalFieldValues::insert($data);
        ObjectTypesPropertyValues::insert($values);
        ImagesTable::insert($imagesData);
        return $request->all();
    }
}
