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
use App\Models\User;
use Session;

class ObjectController extends ResponseController
{
    public function getAll(Request $request){
        $user_id = auth('sanctum')->user()->id;
        $id              = $request->get('object_id');
        $region_id       = $request->get('region_id');
        $district_id     = $request->get('district_id');
        $quarter_id      = $request->get('quarter_id');
        $object_type        = $request->get('object_type');
        $object_deals       = $request->get('object_deals');
        
        $query = Objects::query();
        
        if($id)          $query = $query->where('id', '=', $id);
        if($region_id)   $query = $query->where('region_id', '=', $region_id);
        if($district_id) $query = $query->where('district_id', '=', $district_id);
        if($quarter_id)  $query = $query->where('quarter_id', '=', $quarter_id);
        if($object_type) $query = $query->where('object_type_id', '=', $object_type);
        if($object_deals) $object_deals == 'all' ? $query : $query = $query->where('object_deals', '=', $object_deals);
        

        $query = $query->where('user_id', '=', $user_id)
                ->with([
                    'images',
                    'object_type',
                    'region',
                    'district',
                    'quarter',
                    'additional_values'
                ]);

        $total = $query->count();
        $results = $query->orderBy('id', 'DESC')->paginate($request->total);
    
        $data['count'] = $total;
        $data['objects'] = $results;
        $data['total'] = $total;

        return self::successResponse($data);
    }

    public function create(Request $request){
        $user_id = auth('sanctum')->user()->id;
        $data = Objects::create([
            'user_id'              => $user_id,
            'user_type'            => $request->get('user_type'),
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
            if($images[$i]['deleted'] == 0){
                $fileName = uploadBase64Image($images[$i]['img']);
                $imagesData[] = [
                    'object_id'                => $objectId ?? 0,
                    'name'                     => $fileName,
                    'created_at'               => now(),
                    'updated_at'               => now(),
                ];
            }
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

    public function edit($object_id){
        $user_id = auth('sanctum')->user()->id;
        $query = Objects::query();
        $query = $query->where(['user_id' => $user_id, 'id' => $object_id])
                ->with([
                    'images',
                    'object_type',
                    'object_types_property_values',
                    'region',
                    'district',
                    'quarter',
                    'additional_values'
                ]);
                
        $results = $query->get()->first();
        // $results = json_encode($results);
        $data['objects'] = $results;
        return self::successResponse($data);
    }

    public function update(Request $request, $id){

        $user_id = auth('sanctum')->user()->id;
        $query = Objects::query();
        $query = $query->find($id);
        $objectId = $query->id;
        
        $query->user_id               = $user_id;
        $query->user_type             = $request->get('user_type');
        $query->object_type_id        = $request->get('object_type_id');
        $query->object_deals          = $request->get('object_deals');
        $query->object_time_type      = $request->get('object_time_type') ?? 0;
        $query->rent_type             = $request->get('rent_type') ?? 0;
        $query->room_count            = $request->get('room_count') ?? 0;
        $query->floor                 = $request->get('floor') ?? 0;
        $query->floor_count           = $request->get('floor_count') ?? 0;
        $query->total_area            = $request->get('total_area') ?? 0;
        $query->land_area             = $request->get('land_area') ?? 0;
        $query->done_area             = $request->get('done_area') ?? 0;
        $query->living_area           = $request->get('living_area') ?? 0;
        $query->build_year            = $request->get('build_year') ?? 0;
        $query->object_condition      = $request->get('object_condition') ?? 0;
        $query->object_material_type  = $request->get('object_material_type') ?? 0;
        $query->comment               = $request->get('comment');
        $query->price                 = $request->get('price');
        $query->negotiable            = $request->get('negotiable') ?? 0;
        $query->region_id             = $request->get('region_id');
        $query->district_id           = $request->get('district_id');
        $query->quarter_id            = $request->get('quarter_id');
        $query->youtube_url           = $request->get('youtube_url') ?? 0;
        $query->save();
        
        #Uploading image to server
        $imagesData = [];
        $images = $request->get('images');
        
        for($i = 0; $i < sizeof($images); $i++){
            if($images[$i]['deleted'] == 0){
                if(!isset($images[$i]['object_id']))
                {
                    $fileName = uploadBase64Image($images[$i]['img']);
                    $imagesData[] = [
                        'object_id'                => $objectId ?? 0,
                        'name'                     => $fileName,
                        'created_at'               => now(),
                        'updated_at'               => now(),
                    ];
                }
            }
            else 
            {
                ImagesTable::where('name', '=', $images[$i]['name'])
                ->update(['deleted' => 1]);
                if(isset($images[$i]['object_id']))
                {
                    deleteUploadedImage($images[$i]['name']);
                }
            }
        }
        if(sizeof($imagesData)) ImagesTable::insert($imagesData);
        #end of uploading image
        
        // Additional Field Property Values
        $additionalValues = AdditionalFieldValues::where('object_id', '=', $id);
        $additionalValues->delete();
        $addtionalItems = 0;
        if(isset($request->additional_field_id)) $addtionalItems = sizeof($request->additional_field_id);
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
        
        if(isset($request->additional_field_id)) AdditionalFieldValues::insert($data);
        
        // Object Types Property Values
        $objectTypePropertyValues = ObjectTypesPropertyValues::where('object_id', '=', $id);
        $objectTypePropertyValues->delete();
        $objectPropertyValues = 0;
        if(isset($request->object_types_property_id)) $objectPropertyValues = sizeof($request->object_types_property_id);
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
        
        if(isset($request->object_types_property_id)) ObjectTypesPropertyValues::insert($values);
        
        return $request->all();
    }
    
    public function show($id){
        // $user_id = auth('sanctum')->user()->id;

        $query = Objects::query();
        
        //if(!$user_id) $query = $query->where('access_type', '=', 'public');

        $query = $query->where(['id' => $id])
                ->with([
                    'user',
                    'images',
                    'object_type',
                    'region',
                    'district',
                    'quarter',
                ])
                ->with(['additional_values' => function($query){
                    $query->with('additional_property');
                }])
                ->with(['object_types_property_values' => function($query){
                    $query->with('object_type_property');
                }]);

        $results = $query->orderBy('id', 'DESC')->get()->first();
        // $results = json_encode($results);
        // $results = json_decode($results);
        $data['object'] = $results;

        return self::successResponse($data);
    }

    public function search(Request $request){
        $region_id          = $request->get('region_id');
        $district_id        = $request->get('district_id');
        $quarter_id         = $request->get('quarter_id');
        $object_type        = $request->get('object_type');
        $object_deals       = $request->get('object_deals');
        $price_from         = $request->get('price_from');
        $price_to           = $request->get('price_to');

        $room_count_from    = $request->get('room_count_from');
        $room_count_to      = $request->get('room_count_to');
        $floor_from         = $request->get('floor_from');
        $floor_to           = $request->get('floor_to');
        $floor_count_from   = $request->get('floor_count_from');
        $floor_count_to     = $request->get('floor_count_to');
        $total_area_from    = $request->get('total_area_from');
        $total_area_to      = $request->get('total_area_to');
        $land_area_from     = $request->get('land_area_from');
        $land_area_to       = $request->get('land_area_to');
        

        $query = Objects::query();

        if($region_id) $query = $query->where('region_id', '=', $region_id);
        if($district_id) $query = $query->whereIn('district_id', $district_id);
        if($quarter_id) $query = $query->whereIn('quarter_id', $quarter_id);
        if($object_type) $query = $query->where('object_type_id', '=', $object_type);
        if($object_deals) $query = $query->where('object_deals', '=', $object_deals);
        if($price_from) $query = $query->where('price', '>=', $price_from);
        if($price_to) $query = $query->where('price', '<=', $price_to);

        $query = $query
                ->with([
                    'user',
                    'images',
                    'object_type',
                    'region',
                    'district',
                    'quarter',
                    'additional_values'
                ]);

        $total = $query->count();
        $results = $query->orderBy('id', 'DESC')->paginate($request->total);
    
        $data['count'] = $total;
        $data['objects'] = $results;
        $data['total'] = $total;

        return self::successResponse($data);
    }

    public function getOthers(Request $request, $user_id){
        
        $object_deals       = $request->get('object_deals');
        $user = User::where('id', '=', $user_id)->get()->first();
        $query = Objects::query();
        
        if($user_id)      $query = $query->where('user_id', '=', $user_id);
        if($object_deals) $object_deals == 'all' ? $query : $query = $query->where('object_deals', '=', $object_deals);
        
        $query = $query->where('user_id', '=', $user_id)
                ->with([
                    'images',
                    'object_type',
                    'region',
                    'district',
                    'quarter',
                    'additional_values'
                ]);

        $total = $query->count();
        $results = $query->orderBy('id', 'DESC')->paginate($request->total);
    
        $data['count']   = $total;
        $data['user']    = $user;
        $data['objects'] = $results;
        $data['total']   = $total;

        return self::successResponse($data);
    }
}
