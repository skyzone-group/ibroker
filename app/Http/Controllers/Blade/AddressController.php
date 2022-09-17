<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\Controller;
use App\Http\Controllers\ResponseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AddressController extends ResponseController
{
    //
    public function allRegions(){
        $regions = DB::table('regions')->get();
        return self::successResponse($regions);
    }

    public function districts($region_id){
        $districts = DB::table('districts')->where('region_id', '=', $region_id)->get();
        return self::successResponse($districts);
    }

    public function quarters($district_id){
        $quarters = DB::table('quarters')->where('district_id', '=', $district_id)->get();
        return self::successResponse($quarters);
    }
}
