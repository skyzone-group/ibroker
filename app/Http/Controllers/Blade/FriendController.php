<?php

namespace App\Http\Controllers\Blade;
use App\Http\Controllers\ResponseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Friend;
use App\Models\User;
use App\Models\Notification;

class FriendController extends ResponseController
{
    //
    public function detail(Request $request){
        $user_id = auth('sanctum')->user()->id;
        $friendId = $request['friendId'];
       
        $result = Friend::where(function($q)  use ($user_id, $friendId){
                            $q->where('owner', '=', $user_id)
                            ->Where('friend', '=', $friendId);
                        })
                        ->orWhere(function($q)  use ($user_id, $friendId){
                            $q->where('owner', '=', $friendId)
                            ->Where('friend', '=', $user_id);
                        })
                    ->with('friend_info:id,firstname,lastname,phone,email,image')
                    ->with('owner_info:id,firstname,lastname,phone,email,image')
                    ->get()->first();
                   
        if($result){
            $friendId = $result['owner'] == $user_id ? $result['friend'] : $result['owner'];
            $result['owner'] = $result['owner'] == $user_id;
            $result['friend'] = $friendId;
            $result['friendInfo'] = ($result['owner'] ? $result['friend_info'] : $result['owner_info']);
            unset($result['owner_info']);
            unset($result['friend_info']);

            return self::successResponse($result);
        }
        
        return self::errorResponse('Not found');
    }

    public function getAll(Request $request){
        $user_id = auth('sanctum')->user()->id;
        $status = $request['status'];
        $query = Friend::query();

        if($status && $status != 'all'){
            $query = $query->where('status', '=', $status);
        }
        $query = $query->where(function($q)  use ($user_id){
                            $q->where('owner', '=', $user_id)
                            ->orWhere('friend', '=', $user_id);
                        })
                        ->with('friend_info:id,firstname,lastname,phone,email,image')
                        ->with('owner_info:id,firstname,lastname,phone,email,image');
        $results = $query->get()->all();

        if($results){
            foreach($results as $result):
                $friendId = $result['owner'] == $user_id ? $result['friend'] : $result['owner'];
                $result['owner'] = $result['owner'] == $user_id;
                $result['friend'] = $friendId;
                $result['friendInfo'] = ($result['owner'] ? $result['friend_info'] : $result['owner_info']);
                unset($result['owner_info']);
                unset($result['friend_info']);
            endforeach;

            return self::successResponse($results);   
        }
        
        return self::errorResponse('Not found');        
    }

    public function search(Request $request){
        $user_id = auth('sanctum')->user()->id;
        $phone = $request['phone'];
        $user = User::where('phone', '=', $phone)->get()->first();
        if($user && $user['id'] != $user_id){
            $request['friendId'] = $user['id'];
            $res = self::detail($request);
            if($res['status']) return $res;
            
            $result['id']        = $user['id'];
            $result['firstname'] = $user['firstname'];
            $result['lastname']  = $user['lastname'];
            $result['phone']     = $user['phone'];
            $result['email']     = $user['email'];
            $result['image']     = $user['image'];   
            $result['status']    = "not_friend";
            return self::successResponse($result);
        }
        return self::errorResponse('Not found');
    }

    public function sendRequest(Request $request){
        $user_id = auth('sanctum')->user()->id;
        $friendId = $request['friendId'];

        $user = User::where('id', '=', $friendId)->get()->first();

        if($user && $user['id'] != $user_id){
            $res = self::detail($request);
            if($res['status']) return self::errorResponse('Alredy friend!');
            $res = Friend::create([
                'owner'  => $user_id,
                'friend'  => $friendId,
                'status'  => 'request',
            ]);
            Notification::create([
                'owner' => $friendId,
                'extra_id' => $res->id,
                'type' => 'offer',
                'title' => 'Связаться с другом',
                'body' => 'Запрос дружбы от '.
                auth('sanctum')->user()->firstname.' '.
                auth('sanctum')->user()->lastname.', чтобы поделиться вашей информацией'
            ]);
            return self::successResponse('Request sent succesfuly');
        }
        return self::errorResponse('Not found');
    }

    public function confirm(Request $request){
        $user_id = auth('sanctum')->user()->id;
        $friendId = $request['friendId'];

        $user = User::where('id', '=', $friendId)->get()->first();

        if($user && $user['id'] != $user_id){
            $res = self::detail($request);
            
            if($res['status'] && $res['result']['status'] == 'confirm') return self::errorResponse('Alredy friend!');
            if($res['status']) {
                Friend::where(function($q)  use ($user_id, $friendId){
                        $q->where('owner', '=', $user_id)
                        ->Where('friend', '=', $friendId);
                    })
                    ->orWhere(function($q)  use ($user_id, $friendId){
                        $q->where('owner', '=', $friendId)
                        ->Where('friend', '=', $user_id);
                    })
                    ->update(['status' => 'confirm']);
                    return self::successResponse('Succesfuly updated');
            }
        }
        return self::errorResponse('Not found');
    }
    
    public function delete(Request $request){
        $user_id = auth('sanctum')->user()->id;
        $friendId = $request['friendId'];

        $user = User::where('id', '=', $friendId)->get()->first();

        if($user && $user['id'] != $user_id){
            $res = self::detail($request);
            
            if($res['status']) {
                Friend::where(function($q)  use ($user_id, $friendId){
                        $q->where('owner', '=', $user_id)
                        ->Where('friend', '=', $friendId);
                    })
                    ->orWhere(function($q)  use ($user_id, $friendId){
                        $q->where('owner', '=', $friendId)
                        ->Where('friend', '=', $user_id);
                    })
                    ->delete();
                    return self::successResponse('Succesfuly deleted');
            }
        }
        return self::errorResponse('Not found');
    }
}
