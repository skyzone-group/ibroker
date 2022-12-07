<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\ResponseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Objects;

class AgentController extends ResponseController
{
    //

    public function getInfo($username){
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

        return self::successResponse($data);
    }
}
