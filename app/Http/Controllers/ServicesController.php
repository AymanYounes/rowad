<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class ServicesController extends Controller
{
    //
    public function index()
    {
        return view('index');
    }

    public function getServiceDetails()
    {
        $services = Services::all();
        return view('service-details',compact('services'));
    }



}
