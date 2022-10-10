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
        
        $user = Objects::create([
            'user_id' => $user_id,
            'object_type_id' => $request->get('object_id'),
        ]);
        return $request->all();
    }
}
