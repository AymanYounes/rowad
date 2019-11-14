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
                ->cc('webheadplayer@gmail.com')
                ->subject('Website Contact form');
        });
        if(app()->getLocale() == 'ar'){
            $return_message = "شكراً لاتصالك بنا ، سنقوم بالتواصل معك قريباًً";
        }else{

            $return_message = "Thank you for contacting us, we will get back to you shortly";
        }

        return back()->with("modal_message_success", $return_message);
//            ->cc($moreUsers)
//            ->bcc($evenMoreUsers)
//            ->send();
    }
    //
    public function getService(Request $request)
    {
//        dd($request->all());
        $rules = [
                'f_name' => 'required',
                'l_name' => 'required',
                'email' => 'required|email',
////                'subject' => 'required',
//                'message' => 'required',
            ];
            $this->validate($request, $rules);

//        dd($request->all());
        $data['title'] = "Website Get offer form";
        $data['phone'] = $request->phone;
        $data['f_name'] = $request->f_name;
        $data['l_name'] = $request->l_name;
        $data['email'] = $request->email;

        $data['region'] = $request->region;
        $data['service'] = $request->service;
        $data['type'] = $request->type;
        $data['length'] = $request->length;
        $data['width'] = $request->width;
        $data['height'] = $request->height;
        $data['notes'] = $request->notes;
        Mail::send('emails.getOffer', $data, function($message) {


            $message->to('info@rowad-un.com', 'Tarek')
                ->cc('webheadplayer@gmail.com')
                ->subject('Website Offer form');
        });
        if(app()->getLocale() == 'ar'){
            $return_message = "شكراً لتواصلك معنا! 
سنقوم بالتواصل معك قريباً .ًً";
        }else{

            $return_message = "Thank you for contacting us!
We'll get in touch with you soon";
        }

        return back()->with("modal_message_success", $return_message);

    }

}
