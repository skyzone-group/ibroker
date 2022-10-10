<?php

namespace App\Http\Controllers\Blade;

use App\Http\Controllers\ResponseController;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Session;

class ObjectController extends ResponseController
{
    public function createObject(Request $request)
    {
        return "ok";
    }
}
