<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\ResponseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use App\Models\Objects;
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
        
        // $data = Objects::insert([
            
        // ]);
        return $request->all();
    }
}
