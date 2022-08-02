<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AdditonalOptions;

class PagesController extends Controller
{
    //
    
    public function additionalOptions(){
        $options = AdditonalOptions::get()->all();
        return response()->json($options, 200);
    }
}
