@extends('layouts.app')
@section('title', 'Contact Rowad')
@section('sidebar')
    @parent

@endsection

@section('content')

    <!-- Section: Contact -->
    <section id="contact" class="divider parallax pb-150" data-bg-img="images/contact-bg.webp">


        <div class="pt-100 mt-150 mt-xs-0">





            <div class="col-sm-6 col-xs-12 order-md-last order-first hidden-sm hidden-md hidden-lg ">
                <h2 class="section-head text-left font-tajawal text-uppercase text-white contact-head">
                    <span class="font-regular ">{{trans('homePage.contact')}}</span> {{trans('homePage.us')}}
                </h2>
                <div class="section-head-underline m-0" style="width: 300px"></div>

                <!--                  <p class="contact-p font-tajawal font-bold text-white text-uppercase font-72"> Need Service?</p>-->
                <p class="contact-p font-tajawal font-bold text-white text-uppercase"> {{trans('homePage.needService')}} <br>
                    {{trans('homePage.contactUsDetails')}}
                    {{trans('homePage.viaForm')}}  <br>
                    {{trans('homePage.respond')}} <br>
                    {{trans('homePage.asap')}}
                </p>
                <p class="contact-note font-regular theme-second-color font-tajawal">
                    {{trans('homePage.checkDetails')}}<br> {{trans('homePage.ourTeamContact')}}<br> {{trans('homePage.correctly')}}.
                </p>

            </div>

            <div class="col-sm-6  col-xs-12 order-md-first order-last contact-us-form">

                <div class="form-wrapper pb-50">
                    <form method="get" action="{{url('/contact-send-email')}}">
                        <div class="form-group">
                            <label for="name" class="font-bold">{{trans('homePage.fullName')}}</label>
                            <input type="text" name="name" class="form-input form-control" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email" class="font-bold">{{trans('homePage.emailAddress')}}</label>
                            <input type="email" name="email" class="form-input form-control" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone" class="font-bold">{{trans('homePage.phoneNumber')}}</label>
                            <input type="number" name="phone" class="form-input form-control" id="phone" required>
                        </div>
                        <div class="form-group">
                            <textarea name="message" class="form-input form-control" id="message" placeholder="{{trans('homePage.messageHere')}}" required></textarea>
                        </div>

                        <div class="form-group text-center">
                            <input type="submit" class="btn btn-primary form-submit font-tajawal font-bold pl-40 pr-40" value="{{trans('homePage.sendNow')}}">
                        </div>
                    </form>
                </div>

            </div>
            <div class="col-sm-6 order-md-last order-first hidden-xs ">
                <h2 class="section-head text-left font-tajawal text-uppercase text-white contact-head">
                    <span class="font-regular ">{{trans('homePage.contact')}}</span> {{trans('homePage.us')}}
                </h2>
                <div class="section-head-underline m-0" style="width: 300px"></div>

                <!--                  <p class="contact-p font-tajawal font-bold text-white text-uppercase font-72"> Need Service?</p>-->
                <p class="contact-p font-tajawal font-bold text-white text-uppercase"> {{trans('homePage.needService')}} <br>
                    {{trans('homePage.contactUsDetails')}}
                    {{trans('homePage.viaForm')}}  <br>
                    {{trans('homePage.respond')}} <br>
                    {{trans('homePage.asap')}}
                </p>
                <p class="contact-note font-regular theme-second-color font-tajawal">
                    {{trans('homePage.checkDetails')}}<br> {{trans('homePage.ourTeamContact')}}<br> {{trans('homePage.correctly')}}.
                </p>

            </div>

        </div>
    </section>

@endsection

@section('scripts')

    @include('modals')

@endsection
