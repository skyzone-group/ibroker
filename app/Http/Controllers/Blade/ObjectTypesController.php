<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\AdditionalFields;

class ObjectTypesController extends ResponseController
{
    //
    public function objectTypes(){
        $types = DB::table('object_types')->get()->all();
        return self::successResponse($types);
    }
    
    public function objectProperty(){
        $property = DB::table('object_type_property')->where('object_type_id', '=', 3)->get();
        return self::successResponse($property);
    }
    
    public function additionalFields($object_id){
        $fields = AdditionalFields::where('object_type_id', '=', $object_id)->with('additional')->get();
        return self::successResponse($fields);
    }
}
