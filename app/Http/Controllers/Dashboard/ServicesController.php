<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Services;
use Illuminate\Http\Request;

class ServicesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function index()
    {
        $services = Services::all();
        return view('dashboard.services', compact('services'));
    }


    public function getEdit($id)
    {
        $services = Services::all();
        $service = Services::find($id);
//        dd($service);
        return view('dashboard.services.show', compact('services','service'));
    }

    public function updateService(Request $request,$id)
    {
        $service = Services::find($id);

        $service->title_en =$request->title_en;
        $service->title_ar =$request->title_ar;
        $service->content_en =$request->content_en;
        $service->content_ar =$request->content_ar;
        $service->save();

        $services = Services::all();
        return view('dashboard.services.show', compact('services','service'));
    }
}
