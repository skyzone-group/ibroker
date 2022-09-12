<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AddressController extends Controller
{
    //
    public function allRegions(){
        
        $regions = DB::table('regions')->get();
        //dd($regions);
    }
}
