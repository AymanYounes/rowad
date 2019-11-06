<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Response;
use DB,Config;

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
        $rules = [
                'name' => 'required',
                'email' => 'required|email',
////                'subject' => 'required',
                'message' => 'required',
            ];
            $this->validate($request, $rules);

        $data['title'] = "Website Contact form";
        $data['form_message'] = $request->message;
        $data['phone'] = $request->phone;
        $data['name'] = $request->name;
        $data['email'] = $request->email;
        Mail::send('emails.contact', $data, function($message) {

            $message->to('info@rowad-un.com', 'Tarek')
                ->cc('t.elhanafy@akwanmedia.com')
                ->cc('t.elhanafy@rowad-un.com')
                ->cc('webheadplayer@gmail.com')
                ->subject('Website Contact form');
        });
        if(app()->getLocale() == 'ar'){
            $return_message = "شكراً لتواصلكم معنا، سوف نتواصل معكم قريباً";
        }else{

            $return_message = "Thank you for contacting us, we will get back to you shortly";
        }

        return back()->with("modal_message_success", $return_message);
//            ->cc($moreUsers)
//            ->bcc($evenMoreUsers)
//            ->send();
    }

}
