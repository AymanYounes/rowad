<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class HomeController extends Controller
{
    //
    public function index()
    {
        return view('index');
    }
    public function admin()
    {
        $services = Services::all();
        return view('dashboard.index', compact('services'));
    }

}
