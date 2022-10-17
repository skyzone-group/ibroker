<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\ResponseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Models\Objects;
use App\Models\AdditionalFieldValues;
use App\Models\ObjectTypesPropertyValues;
use App\Models\ImagesTable;
use Session;

class ObjectController extends ResponseController
{
    public function createObject(Request $request)
    {

        $user_id = auth('sanctum')->user()->id;
        $data = Objects::create([
            'user_id'              => $user_id,
            'object_type_id'       => $request->get('object_type_id'),
            'object_deals'         => $request->get('object_deals'),
            'object_time_type'     => $request->get('object_time_type') ?? 0,
            'rent_type'            => $request->get('rent_type') ?? 0,
            'room_count'           => $request->get('room_count') ?? 0,
            'floor'                => $request->get('floor') ?? 0,
            'floor_count'          => $request->get('floor_count') ?? 0,
            'total_area'           => $request->get('total_area') ?? 0,
            'land_area'            => $request->get('land_area') ?? 0,
            'done_area'            => $request->get('done_area') ?? 0,
            'living_area'          => $request->get('living_area') ?? 0,
            'build_year'           => $request->get('build_year') ?? 0,
            'object_condition'     => $request->get('object_condition') ?? 0,
            'object_material_type' => $request->get('object_material_type') ?? 0,
            'comment'              => $request->get('comment'),
            'price'                => $request->get('price'),
            'negotiable'           => $request->negotiable[0] ?? 0,
            'region_id'            => $request->get('region_id'),
            'district_id'          => $request->get('district_id'),
            'quarter_id'           => $request->get('quarter_id'),
            'youtube_url'          => $request->get('youtube_url') ?? 0,
        ]);
        
        $object = Objects::orderBy('id', 'DESC')->first();
        $objectId = $object->id;
        

        #Uploading image to server
        $imagesData = [];
        $images = $request->get('images');
        
        for($i = 0; $i < sizeof($images); $i++){
            $fileName = uploadBase64Image($images[$i]['img']);
            $imagesData[] = [
                'object_id'                => $objectId ?? 0,
                'name'                     => $fileName,
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
                'additional_id'            => $request->additional_field_id[$i] ?? 0,
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

    public function userObjects(Request $request)
    {
        $user_id = auth('sanctum')->user()->id;

        $query = Objects::query();
        $query = $query->where('user_id', '=', $user_id)
                ->with([
                    'images',
                    'object_type',
                    'region',
                    'district',
                    'quarter',
                    'additional'
                ]);

        $results = $query->get()->all();

        // $results = json_encode($results);
        // $results = json_decode($results);
        $data['count'] = 4;
        $data['objects'] = $results;

        return self::successResponse($data);
    }
}
