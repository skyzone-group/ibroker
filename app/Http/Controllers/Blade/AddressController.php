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
        if($regions) return self::successResponse($regions);
        return self::errorResponse('Not found');
    }

    public function allDistricts(){
        $districts = DB::table('districts')->get();
        if($districts) return self::successResponse($districts);
        return self::errorResponse('Not found');
    }

    public function allQuarters(){
        $quarters = DB::table('quarters')->get();
        if($quarters) return self::successResponse($quarters);
        return self::errorResponse('Not found');
    }

    public function districts($region_id){
        $districts = DB::table('districts')->where('region_id', '=', $region_id)->get();
        if($districts) return self::successResponse($districts);
        return self::errorResponse('Not found');
    }

    public function quarters($district_id){
        $quarters = DB::table('quarters')->where('district_id', '=', $district_id)->get();
        if($quarters) return self::successResponse($quarters);
        return self::errorResponse('Not found');
    }
}
