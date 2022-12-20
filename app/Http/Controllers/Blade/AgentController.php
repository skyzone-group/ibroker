<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\ResponseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Agents;
use App\Models\Objects;

class AgentController extends ResponseController
{
    //

    public function getInfo($username){
        $authUser = null;//auth('sanctum')->user()->id;
        $user = User::where('username', '=', $username)->orderBy('id', 'DESC')->get()->first();
        $user_id = $user->id;
        $query = Objects::query();

        if($user_id)  $query = $query->where('user_id', '=', $user_id);
        
        $query = $query->where('user_id', '=', $user_id)
                ->with([
                    'images',
                    'object_type',
                    'region',
                    'district',
                    'quarter',
                    'additional_values'
                ]);

        $results = $query->orderBy('id', 'DESC')->get();
        $data['user']    = $user;
        $data['objects'] = $results;
        $data['owner']   = false;

        if(!is_null($authUser) && isset($authUser)) $data['owner'] = $authUser == $user_id;

        return self::successResponse($data);
    }


    public function show($id){
        $query = Objects::query();
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
        $data['object'] = $results;
        return self::successResponse($data);
    }

    public function updateAgentInfo(Request $request, $username){
        $agent = Agents::where('username', '=', $username)->first();
        if($request->get('main_color')) $agent->main_color  = $request->get('main_color');

        if($request->get('image'))
        {
            $image = $request->get('image');
            $fileName = uploadBase64Image($image);
            if(!$fileName){
                return self::errorResponse('Image not uploaded');
            }
            $agent->image = $fileName;
        }

        $agent->save();
        return self::successResponse($agent);
    }
}
