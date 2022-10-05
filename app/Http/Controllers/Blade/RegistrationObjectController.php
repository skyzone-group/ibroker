<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegistrationObjectController extends Controller
{
    //
    
    public function registr(Request $request)
    {
        return $request->all();
    }
}
