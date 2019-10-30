@extends('layouts.app')
@section('title', 'Contact Rowad')
@section('sidebar')
    @parent

@endsection

@section('content')

    <!-- Section: Contact -->
    <section id="contact" class="divider parallax pb-150" data-bg-img="images/contact-bg.webp">


        <div class="pt-100 mt-150 mt-xs-0">



            <div class="col-sm-6 order-md-last order-first hidden-sm hidden-md hidden-lg">
                <h2 class="section-head text-left font-tajawal text-uppercase text-white contact-head">
                    <span class="font-regular ">Contact</span> US
                </h2>
                <div class="section-head-underline m-0" style="width: 400px"></div>

                <!--                  <p class="contact-p font-tajawal font-bold text-white text-uppercase font-72"> Need Service?</p>-->
                <p class="contact-p font-tajawal font-bold text-white text-uppercase"> NEED SERVICE? <br>
                    CONTACT US
                    VIA THIS FORM
                    AND WE'LL RESPOND
                    AS SOON AS POSSIBLE.
                </p>
                <p class="contact-note font-regular theme-second-color font-tajawal">
                    Please check the details before entering them so our team can contact you correctly.
                </p>

            </div>

            <div class="col-sm-6 order-md-first order-last">

                <div class="form-wrapper pb-50">
                    <form>
                        <div class="form-group">
                            <label for="name" class="font-bold">Full Name</label>
                            <input type="text" class="form-input form-control" id="name">
                        </div>
                        <div class="form-group">
                            <label for="email" class="font-bold">Email Address</label>
                            <input type="email" class="form-input form-control" id="email">
                        </div>
                        <div class="form-group">
                            <label for="phone" class="font-bold">Phone Number</label>
                            <input type="number" class="form-input form-control" id="phone">
                        </div>
                        <div class="form-group">
                            <!--                              <label for="phone">Phone Number</label>-->
                            <textarea type="number" class="form-input form-control" id="message" placeholder="Your Message Here"></textarea>
                        </div>

                        <div class="form-group text-center">
                            <input type="submit" class="btn btn-primary form-submit font-tajawal font-bold pl-40 pr-40" value="SEND NOW">
                        </div>
                    </form>
                </div>

            </div>
            <div class="col-sm-6 order-md-last order-first hidden-xs ">
                <h2 class="section-head text-left font-tajawal text-uppercase text-white contact-head">
                    <span class="font-regular ">Contact</span> US
                </h2>
                <div class="section-head-underline m-0" style="width: 400px"></div>

                <!--                  <p class="contact-p font-tajawal font-bold text-white text-uppercase font-72"> Need Service?</p>-->
                <p class="contact-p font-tajawal font-bold text-white text-uppercase"> NEED SERVICE? <br>
                    CONTACT US <br>
                    VIA THIS FORM <br>
                    AND WE'LL RESPOND <br>
                    AS SOON AS POSSIBLE.
                </p>
                <p class="contact-note font-regular theme-second-color font-tajawal">
                    Please check the details before entering<br> them so our team can contact you<br> correctly.
                </p>

            </div>


        </div>
    </section>


@endsection
