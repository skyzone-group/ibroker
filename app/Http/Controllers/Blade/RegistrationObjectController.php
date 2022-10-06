<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegistrationObjectController extends Controller
{
    //
    
    public function registr(Request $request)
    {
        // $validate = $this->validate($request->all(), [
        //     'region_id'     => 'required',
        //     'district_id'   => 'required',
        //     'quarter_id'    => 'required',
        //     'images'        => 'required',
        //     'room_count'    => 'required',
        // ]);

        // if ($validate !== true) return $validate;
        return $request->all();
    }
}
