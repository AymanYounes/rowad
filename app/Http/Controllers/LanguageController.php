<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Config;

class LanguageController extends Controller
{
    //
    public function lang($locale)
    {

        app()->setLocale($locale);
        session()->put('locale', $locale);

        return redirect()->back();
    }

}
