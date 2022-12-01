<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\ResponseController;
use Illuminate\Http\Request;
use App\Models\Notification;

class NotificationController extends ResponseController
{
    //
    public function getAll(Request $request){
        $user_id = auth('sanctum')->user()->id;
        $results = Notification::where(['owner' => $user_id, 'is_readed' => 0])->get()->all();
        
        $data['count'] = count($results);
        $data['items'] = $results;

        return self::successResponse($data);   
    }

    public function show($id){
        $user_id = auth('sanctum')->user()->id;

        $result = Notification::where(['id' => $id, 'owner' => $user_id])->get()->first();

        if($result && !$result->is_readed){
            Notification::where(['id' => $id, 'owner' => $user_id])
                        ->update(['is_readed' => 1]);
        }

        if($result) return self::successResponse($result);
        return self::errorResponse('Not found');
    }
}
