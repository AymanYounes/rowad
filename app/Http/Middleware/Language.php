<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;
use Ratchet\App;
use Symfony\Component\Routing\Route;
use App\Models\Member;


//use App\Http\Requests\Request;
//use Illuminate\Support\Facades\Config;
//use Illuminate\Support\Facades\App;
class Language
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @param  string|null $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {

        if(!session()->has('locale')){
            if(app()->getLocale()){
                session()->put('locale', app()->getLocale());
            }else{
                session()->put('locale', 'ar');
            }

        };


        if(session()->get('locale')){
            app()->setLocale(session()->get('locale'));
        }


        return $next($request);
    }
}
