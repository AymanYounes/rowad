<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Mail;

class EmailsController extends Controller
{
    //
    public function index()
    {
        return view('index');
    }
    //
    public function contact(Request $request)
    {


        if ($request->isMethod('get'))
            return view('emails.contact');
        else {
            $rules = [
                'name' => 'required',
                'email' => 'required|email',
//                'subject' => 'required',
                'message' => 'required',
            ];
            $this->validate($request, $rules);

            $to = 'webheadplayer@gmail.com';
            $subject = 'contact us form email';
            $message = $request->message;
            mail($to, $subject, $message);

//            notify(new Contact($request->subject, $request->message));
            $request->session()->put('status', true);
            return back();
        }


//        Mail::to(ENV(MAIL_FROM_ADDRESS))->send();
//        Mail::to(ENV(MAIL_FROM_ADDRESS))
//            ->cc($moreUsers)
//            ->bcc($evenMoreUsers)
//            ->send();
    }

}
