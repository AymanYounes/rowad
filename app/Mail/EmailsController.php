<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use DB,Config;
use Illuminate\Support\Facades\Mail;
class EmailsController extends Controller
{
    public function sendEmail()
    {
        $data['title'] = "This is Test Mail";

        Mail::send('emails.contact', $data, function($message) {

            $message->to('webheadplayer@gmail.com', 'Receiver Name')

                ->subject('test Mail');
        });

        if (Mail::failures()) {
            return response()->Fail('Sorry! Please try again latter');
        }else{
            return response()->success('Great! Successfully send in your mail');
        }
    }


    public function contact()
    {
        dd('sd');
        $data['title'] = "This is Test Mail";

        Mail::send('emails.contact', $data, function($message) {

            $message->to('webheadplayer@gmail.com', 'Receiver Name')

                ->subject('test Mail');
        });

        if (Mail::failures()) {
            return response()->Fail('Sorry! Please try again latter');
        }else{
            return response()->success('Great! Successfully send in your mail');
        }
    }
}
