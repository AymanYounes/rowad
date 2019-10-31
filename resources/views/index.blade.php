@extends('layouts.app')
@section('title', 'Home Page')


@section('content')


    <!-- Section: home -->
    <section id="home" class="divider">
        <div class="container-fluid p-0">


            <!-- Slider Revolution Start -->
            <div dir="ltr" class="rev_slider_wrapper">
                <div class="rev_slider" data-version="5.0">
                    <ul>

                        <!-- SLIDE 1 -->
                        <li data-index="rs-1" data-transition="random" data-slotamount="7"  data-easein="default" data-easeout="default" data-masterspeed="1000"  data-thumb="images/slider/1.jpg"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off"  data-title="Intro" data-description="">
                            <!-- MAIN IMAGE -->
                            <img src="images/slider/1.jpg"  alt=""  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg" data-bgparallax="6" data-no-retina>
                            <!-- LAYERS -->

                            <!-- LAYER NR. 1 -->
                            <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                                 id="rs-1-layer-1"
                                 data-x="['center']"
                                 data-hoffset="['0']"
                                 data-y="['middle']"
                                 data-voffset="['0']"
                                 data-width="640"
                                 data-height="300"
                                 data-whitespace="nowrap"
                                 data-transform_idle="o:1;"
                                 data-transform_in="y:[0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                 data-transform_out="y:[0%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                 data-mask_in="x:100px;y:[0%];s:inherit;e:inherit;"
                                 data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                                 data-start="500"
                                 data-responsive_offset="on"
                                 style="z-index: 5;background-color:rgba(255, 255, 255, 0.0);border-color:rgba(0, 0, 0, 0);">
                            </div>

                            <!-- LAYER NR. 2 -->
                            <div class="tp-caption tp-resizeme text-uppercase font-tajawal pl-30 pr-30 theme-color"
                                 id="rs-1-layer-2"
                                 data-x="['center']"
                                 data-hoffset="['0']"
                                 data-y="['middle']"
                                 data-voffset="['-80']"
                                 data-fontsize="['73']"
                                 data-lineheight="['50']"
                                 data-width="none"
                                 data-height="none"
                                 data-whitespace="nowrap"
                                 data-transform_idle="o:1;s:500"
                                 data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                                 data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                                 data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                 data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                 data-start="1000"
                                 data-splitin="none"
                                 data-splitout="none"
                                 data-responsive_offset="on"
                                 style="z-index: 7; white-space: nowrap; font-weight:bolder; border-radius:45px;">{{trans('homePage.slider1Layer1')}}
                            </div>

                            <!-- LAYER NR. 3 -->
                            <div class="tp-caption tp-resizeme text-uppercase font-tajawal pl-30 pr-30 theme-color"
                                 id="rs-1-layer-3"

                                 data-x="['center']"
                                 data-hoffset="['0']"
                                 data-y="['middle']"
                                 data-voffset="['15']"
                                 data-fontsize="['73']"
                                 data-lineheight="['60']"

                                 data-width="none"
                                 data-height="none"
                                 data-whitespace="nowrap"
                                 data-transform_idle="o:1;s:500"
                                 data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                                 data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                                 data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                 data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                 data-start="1000"
                                 data-splitin="none"
                                 data-splitout="none"
                                 data-responsive_offset="on"
                                 style="z-index: 7; white-space: nowrap; font-weight:800; border-radius:45px;">{{trans('homePage.slider1Layer2')}}
                            </div>

                            <!-- LAYER NR. 4 -->
                            <div class="tp-caption tp-resizeme"
                                 id="rs-1-layer-4"

                                 data-x="['center']"
                                 data-hoffset="['0']"
                                 data-y="['middle']"
                                 data-voffset="['120']"

                                 data-width="none"
                                 data-height="none"
                                 data-whitespace="nowrap"
                                 data-transform_idle="o:1;"
                                 data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                 data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                 data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                 data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                 data-start="1400"
                                 data-splitin="none"
                                 data-splitout="none"
                                 data-responsive_offset="on"
                                 style="z-index: 5; white-space: nowrap; letter-spacing:1px;height: 106px;">
                                <a class="btn btn-default btn-lg mr-10 btn-second-theme-colored font-tajawal font-bold slider-btn slider-contact-btn" href="{{url('/contact')}}">{{trans('homePage.contactBtn')}}</a>
                                <a class="btn btn-colored btn-lg btn-theme-colored  font-tajawal font-bold slider-btn" href="{{url('/get-offer')}}">{{trans('homePage.offerBtn')}}</a>
                            </div>
                        </li>

                        <!-- SLIDE 2 -->
                        <li data-index="rs-2" data-transition="random" data-slotamount="7"  data-easein="default" data-easeout="default" data-masterspeed="1000"  data-thumb="images/slider/5.jpg"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off"  data-title="Intro" data-description="">
                            <!-- MAIN IMAGE -->
                            <img src="images/slider/5.jpg"  alt=""  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg" data-bgparallax="6" data-no-retina>
                            <!-- LAYERS -->

                            <!-- LAYER NR. 1 -->
                            <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                                 id="rs-2-layer-1"
                                 data-x="['center']"
                                 data-hoffset="['0']"
                                 data-y="['middle']"
                                 data-voffset="['0']"
                                 data-width="640"
                                 data-height="300"
                                 data-whitespace="nowrap"
                                 data-transform_idle="o:1;"
                                 data-transform_in="y:[0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                 data-transform_out="y:[0%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                 data-mask_in="x:100px;y:[0%];s:inherit;e:inherit;"
                                 data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                                 data-start="500"
                                 data-responsive_offset="on"
                                 style="z-index: 5;background-color:rgba(255, 255, 255, 0.0);border-color:rgba(0, 0, 0, 0);">
                            </div>

                            <!-- LAYER NR. 2 -->
                            <div class="tp-caption tp-resizeme text-uppercase font-tajawal pl-30 pr-30 theme-color text-center"
                                 id="rs-2-layer-2"
                                 data-x="['center']"
                                 data-hoffset="['0']"
                                 data-y="['middle']"
                                 data-voffset="['-80']"
                                 data-fontsize="['73']"
                                 data-lineheight="['50']"
                                 data-width="none"
                                 data-height="none"
                                 data-whitespace="nowrap"
                                 data-transform_idle="o:1;s:500"
                                 data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                                 data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                                 data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                 data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                 data-start="1000"
                                 data-splitin="none"
                                 data-splitout="none"
                                 data-responsive_offset="on"
                                 style="z-index: 7; white-space: nowrap; font-weight:bolder; border-radius:45px;">{{trans('homePage.slider2Layer1')}}
                            </div>

                            <!-- LAYER NR. 2 -->
                            <div class="tp-caption tp-resizeme text-uppercase font-tajawal pl-30 pr-30 theme-color"
                                 id="rs-2-layer-3"

                                 data-x="['center']"
                                 data-hoffset="['0']"
                                 data-y="['middle']"
                                 data-voffset="['15']"
                                 data-fontsize="['73']"
                                 data-lineheight="['60']"

                                 data-width="none"
                                 data-height="none"
                                 data-whitespace="nowrap"
                                 data-transform_idle="o:1;s:500"
                                 data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                                 data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                                 data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                 data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                 data-start="1000"
                                 data-splitin="none"
                                 data-splitout="none"
                                 data-responsive_offset="on"
                                 style="z-index: 7; white-space: nowrap; font-weight:800; border-radius:45px;">{{trans('homePage.slider2Layer2')}}
                            </div>

                            <!-- LAYER NR. 4 -->
                            <div class="tp-caption tp-resizeme"
                                 id="rs-2-layer-4"

                                 data-x="['center']"
                                 data-hoffset="['0']"
                                 data-y="['middle']"
                                 data-voffset="['120']"

                                 data-width="none"
                                 data-height="none"
                                 data-whitespace="nowrap"
                                 data-transform_idle="o:1;"
                                 data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                 data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                 data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                 data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                 data-start="1400"
                                 data-splitin="none"
                                 data-splitout="none"
                                 data-responsive_offset="on"
                                 style="z-index: 5; white-space: nowrap; letter-spacing:1px;height: 106px;">
                                <a class="btn btn-default btn-lg mr-10 btn-second-theme-colored font-tajawal font-bold slider-btn slider-contact-btn" href="{{url('/contact')}}">{{trans('homePage.contactBtn')}}</a>
                                <a class="btn btn-colored btn-lg btn-theme-colored  font-tajawal font-bold slider-btn" href="{{url('/get-offer')}}">{{trans('homePage.offerBtn')}}</a>
                            </div>
                        </li>

                        <!-- SLIDE 3 -->
                        <li data-index="rs-3" data-transition="random" data-slotamount="7"  data-easein="default" data-easeout="default" data-masterspeed="1000"  data-thumb="images/slider/3.jpg"  data-rotate="0"  data-fstransition="fade" data-fsmasterspeed="1500" data-fsslotamount="7" data-saveperformance="off"  data-title="Intro" data-description="">
                            <!-- MAIN IMAGE -->
                            <img src="images/slider/3.jpg"  alt=""  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat" class="rev-slidebg" data-bgparallax="6" data-no-retina>
                            <!-- LAYERS -->

                            <!-- LAYER NR. 1 -->
                            <div class="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                                 id="rs-3-layer-1"
                                 data-x="['center']"
                                 data-hoffset="['0']"
                                 data-y="['middle']"
                                 data-voffset="['0']"
                                 data-width="640"
                                 data-height="300"
                                 data-whitespace="nowrap"
                                 data-transform_idle="o:1;"
                                 data-transform_in="y:[0%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                 data-transform_out="y:[0%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                 data-mask_in="x:100px;y:[0%];s:inherit;e:inherit;"
                                 data-mask_out="x:0;y:0;s:inherit;e:inherit;"
                                 data-start="500"
                                 data-responsive_offset="on"
                                 style="z-index: 5;background-color:rgba(255, 255, 255, 0.0);border-color:rgba(0, 0, 0, 0);">
                            </div>

                            <!-- LAYER NR. 2 -->
                            <div class="tp-caption tp-resizeme text-uppercase font-tajawal pl-30 pr-30 theme-color"
                                 id="rs-3-layer-2"
                                 data-x="['center']"
                                 data-hoffset="['0']"
                                 data-y="['middle']"
                                 data-voffset="['-80']"
                                 data-fontsize="['73']"
                                 data-lineheight="['50']"
                                 data-width="none"
                                 data-height="none"
                                 data-whitespace="nowrap"
                                 data-transform_idle="o:1;s:500"
                                 data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                                 data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                                 data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                 data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                 data-start="1000"
                                 data-splitin="none"
                                 data-splitout="none"
                                 data-responsive_offset="on"
                                 style="z-index: 7; white-space: nowrap; font-weight:bolder; border-radius:45px;">{{trans('homePage.slider3Layer1')}}
                            </div>

                            <!-- LAYER NR. 2 -->
                            <div class="tp-caption tp-resizeme text-uppercase font-tajawal pl-30 pr-30 theme-color"
                                 id="rs-3-layer-3"

                                 data-x="['center']"
                                 data-hoffset="['0']"
                                 data-y="['middle']"
                                 data-voffset="['15']"
                                 data-fontsize="['73']"
                                 data-lineheight="['60']"

                                 data-width="none"
                                 data-height="none"
                                 data-whitespace="nowrap"
                                 data-transform_idle="o:1;s:500"
                                 data-transform_in="y:100;scaleX:1;scaleY:1;opacity:0;"
                                 data-transform_out="x:left(R);s:1000;e:Power3.easeIn;s:1000;e:Power3.easeIn;"
                                 data-mask_in="x:0px;y:0px;s:inherit;e:inherit;"
                                 data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                 data-start="1000"
                                 data-splitin="none"
                                 data-splitout="none"
                                 data-responsive_offset="on"
                                 style="z-index: 7; white-space: nowrap; font-weight:800; border-radius:45px;">{{trans('homePage.slider3Layer2')}}
                            </div>

                            <!-- LAYER NR. 4 -->
                            <div class="tp-caption tp-resizeme"
                                 id="rs-3-layer-4"

                                 data-x="['center']"
                                 data-hoffset="['0']"
                                 data-y="['middle']"
                                 data-voffset="['120']"

                                 data-width="none"
                                 data-height="none"
                                 data-whitespace="nowrap"
                                 data-transform_idle="o:1;"
                                 data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;"
                                 data-transform_out="y:[100%];s:1000;e:Power2.easeInOut;s:1000;e:Power2.easeInOut;"
                                 data-mask_in="x:0px;y:[100%];s:inherit;e:inherit;"
                                 data-mask_out="x:inherit;y:inherit;s:inherit;e:inherit;"
                                 data-start="1400"
                                 data-splitin="none"
                                 data-splitout="none"
                                 data-responsive_offset="on"
                                 style="z-index: 5; white-space: nowrap; letter-spacing:1px;height: 106px;">
                                <a class="btn btn-default btn-lg mr-10 btn-second-theme-colored font-tajawal font-bold slider-btn slider-contact-btn" href="{{url('/contact')}}">{{trans('homePage.contactBtn')}}</a>
                                <a class="btn btn-colored btn-lg btn-theme-colored  font-tajawal font-bold slider-btn" href="{{url('/get-offer')}}">{{trans('homePage.offerBtn')}}</a>
                            </div>
                        </li>
                    </ul>
                </div><!-- end .rev_slider -->
            </div>
            <!-- end .rev_slider_wrapper -->
            <script>
                $(document).ready(function(e) {
                    var revapi = $(".rev_slider").revolution({
                        sliderType:"standard",
                        sliderLayout: "fullscreen",
                        dottedOverlay: "none",
                        delay: 5000,
                        navigation: {
                            keyboardNavigation: "off",
                            keyboard_direction: "horizontal",
                            mouseScrollNavigation: "off",
                            onHoverStop: "off",
                            touch: {
                                touchenabled: "on",
                                swipe_threshold: 75,
                                swipe_min_touches: 1,
                                swipe_direction: "horizontal",
                                drag_block_vertical: false
                            },
                            arrows: {
                                style: "gyges",
                                enable: true,
                                hide_onmobile: false,
                                hide_onleave: true,
                                hide_delay: 200,
                                hide_delay_mobile: 1200,
                                tmp: '',
                                left: {
                                    h_align: "left",
                                    v_align: "center",
                                    h_offset: 0,
                                    v_offset: 0
                                },
                                right: {
                                    h_align: "right",
                                    v_align: "center",
                                    h_offset: 0,
                                    v_offset: 0
                                }
                            },
                            bullets: {
                                enable: true,
                                hide_onmobile: true,
                                hide_under: 800,
                                style: "hebe",
                                hide_onleave: false,
                                direction: "horizontal",
                                h_align: "center",
                                v_align: "bottom",
                                h_offset: 0,
                                v_offset: 30,
                                space: 5,
                                tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title"></span>'
                            }
                        },
                        responsiveLevels: [1240, 1024, 778],
                        visibilityLevels: [1240, 1024, 778],
                        gridwidth: [1170, 1024, 778, 480],
                        gridheight: [700, 768, 960, 720],
                        lazyType: "none",
                        parallax: {
                            origo: "slidercenter",
                            speed: 1000,
                            levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
                            type: "scroll"
                        },
                        shadow: 0,
                        spinner: "off",
                        stopLoop: "on",
                        stopAfterLoops: 0,
                        stopAtSlide: -1,
                        shuffle: "off",
                        autoHeight: "off",
                        fullScreenAutoWidth: "off",
                        fullScreenAlignForce: "off",
                        fullScreenOffsetContainer: "",
                        fullScreenOffset: "0",
                        hideThumbsOnMobile: "off",
                        hideSliderAtLimit: 0,
                        hideCaptionAtLimit: 0,
                        hideAllCaptionAtLilmit: 0,
                        debugMode: false,
                        fallbacks: {
                            simplifyAll: "off",
                            nextSlideOnWindowFocus: "off",
                            disableFocusListener: false,
                        }
                    });
                });
            </script>
            <!-- Slider Revolution Ends -->

        </div>
    </section>


    <style>
        .offer-1-wrapper:before {
            background-image: url("images/offer-1.jpg");
        }
        .offer-2-wrapper:before {
            background-image: url("images/offer-2.jpg");
        }
    </style>
    <!-- Section: offers -->
    <section id="offers">
        <div class="container">
            <div class="row">
                <div class="col-md-6  p-0">
                    <div class="elem first offer-1-wrapper">
                        <a href="{{url('/get-offer')}}">
                            <img src="images/offer-1.jpg" class="width-100 offer-img offer-img-1" alt="">
                        </a>
                    </div>
                </div>
                <div class="col-md-6 p-0">
                    <div class="elem first offer-2-wrapper">
                        <a href="{{url('/get-offer')}}">
                            <img src="images/offer-2.jpg" class="width-100 offer-img offer-img-2" alt="">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: about -->
    <section id="about">
        <div class="row">

            <div class="col-lg-7 col-md-6 col-sm-5  p-0 float-rtl-left">

            </div>
            <div class="col-lg-5 col-md-6 col-sm-7 p-0 about-content-wrapper">
                <div class="top-right-corner top-right-corner-vertical"></div>
                <div class="top-right-corner top-right-corner-horizontal"></div>

                <div class="about-content">
                    <h2 class="section-head font-tajawal">{{trans('homePage.about')}} <span class="section-head-black">{{trans('homePage.rowad')}}</span></h2>
                    <div class="section-head-underline"></div>
                    <p class="about-p">
                        {{trans('homePage.aboutRowad')}}
                    </p>
                    <a href="{{url('/about')}}" class="btn btn-default about-btn btn-second-theme-colored font-tajawal font-bold">
                        {{trans('homePage.readMore')}}
                    </a>
                </div>
            </div>

            <div class="about-bottom-bar"></div>
            <div class="about-shape"><img src="images/about-shape.png" alt=""></div>
        </div>
    </section>

    <!-- Section: Goals -->
    <section id="goals" class="pt-20">
        <div class=" pb-10">
            <div class="section-content">
                <div class="row mt-20">

                    <div class="col-sm-6 float-rtl-left">
                        <div class="icon-box left media p-0">
                            <a href="#" class="media-left pull-left goals-img-wrapper">
                                <img src="images/goals-icon.png" alt="">
                            </a>
                            <div class="media-body">
                                <h2 class="media-heading font-tajawal theme-color goals-h"><span class="section-head-black font-regular">{{trans('homePage.our')}} </span> {{trans('homePage.goals')}}</h2>
                                <div class="sub-section-underline"></div>
                                <p class="goals-p font-tajawal theme-color font-regular">
                                    {{trans('homePage.ourGoals')}}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 float-rtl-left">
                        <div class="icon-box left media p-0">
                            <a href="#" class="media-left pull-left goals-img-wrapper">
                                <img src="images/vision-icon.png" alt="">
                            </a>
                            <div class="media-body">
                                <h2 class="media-heading font-tajawal theme-color goals-h"><span class="section-head-black font-regular">{{trans('homePage.our')}} </span> {{trans('homePage.vision')}}</h2>
                                <div class="sub-section-underline"></div>
                                <p class="goals-p font-tajawal theme-color font-regular">
                                    {{trans('homePage.ourVision')}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>s
    </section>
    <!-- Section: services -->
    <section id="services" class="divider parallax text-center" data-bg-img="images/services-bg.webp">
        <!--      <section class="pt-20">-->
        <div class="services-wrapper">

            <h2 class="section-head services-head font-tajawal">
                <span class="section-head-white font-regular">{{trans('homePage.our')}}</span> {{trans('homePage.services')}}</h2>
            <div class="section-content">
                <div class="row mt-50">
                    <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                        <div class="service-item">
                            <div class="service-img-wrapper">
                                <div class="img-title  text-uppercase">
                                    <h5> {{trans('homePage.buildUp')}} </h5>
                                </div>
                                <img src="images/service-1.webp" alt="">
                            </div>
                            <div class="btn-wrapper">
                                <a href="" class="btn btn-default btn-second-theme-colored text-uppercase discover-btn"> {{trans('homePage.discover')}}</a>
                            </div>
                        </div>

                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                        <div class="service-item">
                            <div class="service-img-wrapper">
                                <div class="img-title  text-uppercase">
                                    <h5> {{trans('homePage.poolMaintenance')}} </h5>
                                </div>
                                <img src="images/service-2.webp" alt="">
                            </div>
                            <div class="btn-wrapper">
                                <a href="" class="btn btn-default btn-second-theme-colored text-uppercase discover-btn"> {{trans('homePage.discover')}}</a>

                            </div>
                        </div>

                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                        <div class="service-item">
                            <div class="service-img-wrapper">
                                <div class="img-title  text-uppercase">
                                    <h5> {{trans('homePage.waterfall')}} </h5>
                                </div>
                                <img src="images/service-3.webp" alt="">
                            </div>
                            <div class="btn-wrapper">
                                <a href="" class="btn btn-default btn-second-theme-colored text-uppercase discover-btn"> {{trans('homePage.discover')}}</a>

                            </div>
                        </div>

                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                        <div class="service-item">
                            <div class="service-img-wrapper">
                                <div class="img-title  text-uppercase">
                                    <h5> {{trans('homePage.aquaPark')}} </h5>
                                </div>
                                <img src="images/service-4.webp" alt="">
                            </div>
                            <div class="btn-wrapper">
                                <a href="" class="btn btn-default btn-second-theme-colored text-uppercase discover-btn"> {{trans('homePage.discover')}}</a>

                            </div>
                        </div>

                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                        <div class="service-item">
                            <div class="service-img-wrapper">
                                <div class="img-title  text-uppercase">
                                    <h5> {{trans('homePage.jacuzzi')}} </h5>
                                </div>
                                <img src="images/service-5.webp" alt="">
                            </div>
                            <div class="btn-wrapper">
                                <a href="" class="btn btn-default btn-second-theme-colored text-uppercase discover-btn"> {{trans('homePage.discover')}}</a>

                            </div>
                        </div>

                    </div>
                    <div class="col-lg-2 col-md-4 col-sm-6 col-xs-12">
                        <div class="service-item">
                            <div class="service-img-wrapper">
                                <div class="img-title  text-uppercase">
                                    <h5> {{trans('homePage.sauna')}} </h5>
                                </div>
                                <img src="images/service-6.webp" alt="">
                            </div>
                            <div class="btn-wrapper">
                                <a href="" class="btn btn-default btn-second-theme-colored text-uppercase discover-btn"> {{trans('homePage.discover')}}</a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <svg id="bigTriangleColor" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="100" viewBox="0 0 100 102" preserveAspectRatio="none">
            <path d="M0 0 L50 100 L100 0 Z" />
        </svg>
    </section>


    <!-- Section: Products -->
    <section id="products" class="pt-20">
        <div class="product-head-wrapper mb-100">
            <h2 class="section-head text-center font-tajawal"><span class="section-head-black font-regular">{{trans('homePage.our')}}</span> {{trans('homePage.products')}}</h2>
            <div class="section-head-underline"></div>
            <p class="theme-color text-center mt-20 font-tajawal products-small-header">  {{trans('homePage.productsSlogan')}} <span class="theme-second-color"> {{trans('homePage.rowad')}}</span> </p>
        </div>

        <div class="section-content">
            <div class="owl-carousel"  data-dots="true" data-nav="true">
                <div class="item">
                    <div class="product-item">
                        <div class="product-img">
                            <img class="img-fullwidth" src="images/products/products-1.png" alt="">
                        </div>
                        <div class="product-title">
                            <h5 class="text-uppercase text-center theme-color">{{trans('homePage.poolAccessories')}}</h5>
                        </div>
                        <div class="product-desc">
                            <h5 class="text-center">{{trans('homePage.poolAccessoriesDesc')}}</h5>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="product-item">
                        <div class="product-img">
                            <img class="img-fullwidth" src="images/products/products-2.png" alt="">
                        </div>
                        <div class="product-title">
                            <h5 class="text-uppercase text-center theme-color">{{trans('homePage.poolFilters')}}</h5>
                        </div>
                        <div class="product-desc">
                            <h5 class="text-center">{{trans('homePage.poolFiltersDesc')}}</h5>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="product-item">
                        <div class="product-img">
                            <img class="img-fullwidth" src="images/products/products-3.png" alt="">
                        </div>
                        <div class="product-title">
                            <h5 class="text-uppercase text-center theme-color">{{trans('homePage.poolHeater')}}</h5>
                        </div>
                        <div class="product-desc">
                            <h5 class="text-center">{{trans('homePage.poolHeaterDesc')}}</h5>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="product-item">
                        <div class="product-img">
                            <img class="img-fullwidth" src="images/products/products-4.png" alt="">
                        </div>
                        <div class="product-title">
                            <h5 class="text-uppercase text-center theme-color">{{trans('homePage.poolSpotlight')}}</h5>
                        </div>
                        <div class="product-desc">
                            <h5 class="text-center">{{trans('homePage.poolSpotlightDesc')}}</h5>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="product-item">
                        <div class="product-img">
                            <img class="img-fullwidth" src="images/products/products-5.png" alt="">
                        </div>
                        <div class="product-title">
                            <h5 class="text-uppercase text-center theme-color">{{trans('homePage.poolCover')}}</h5>
                        </div>
                        <div class="product-desc">
                            <h5 class="text-center">{{trans('homePage.poolCoverDesc')}}</h5>
                        </div>
                    </div>
                </div>

                <div class="item">
                    <div class="product-item">
                        <div class="product-img">
                            <img class="img-fullwidth" src="images/products/products-6.png" alt="">
                        </div>
                        <div class="product-title">
                            <h5 class="text-uppercase text-center theme-color">{{trans('homePage.poolBrush')}}</h5>
                        </div>
                        <div class="product-desc">
                            <h5 class="text-center">{{trans('homePage.poolBrushDesc')}}</h5>
                        </div>
                    </div>
                </div>
            </div>


            <div class="products-btn-wrapper text-center mt-50">
                <a class="products-btn btn btn-default" href="{{url('/products')}}"> {{trans('homePage.allProducts')}} </a>
            </div>
        </div>

    </section>





    <!-- Section: Gallery -->
    <section id="gallery" class="text-center">

        <svg id="bigHalfCircle" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100%" height="150" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C40 0 60 0 100 100 Z"/>
        </svg>
        <div class="container pb-100">


            <div class="section-title text-center">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h2 class="section-head text-center font-tajawal text-uppercase"><span class="section-head-white ">{{trans('homePage.gallery')}}</span></h2>
                        <div class="section-head-underline" style="width: 200px"></div>

                    </div>
                </div>
            </div>
            <div class="section-content">
                <div class="row features-style1 mt-20">


                    <div class="owl-carousel-3col" data-nav="true">
                        <div class="item">
                            <a data-rel="prettyPhoto[gallery1]" href="images/gallery/1.webp">
                                <img width="240" src="images/gallery/thumb/1.webp" alt="gallery">
                            </a>
                        </div>
                        <div class="item">
                            <a data-rel="prettyPhoto[gallery1]" href="images/gallery/2.webp">
                                <img width="240" src="images/gallery/thumb/2.webp" alt="gallery">
                            </a>
                        </div>
                        <div class="item">
                            <a data-rel="prettyPhoto[gallery1]" href="images/gallery/3.webp">
                                <img width="240" src="images/gallery/thumb/3.webp" alt="gallery">
                            </a>
                        </div>
                        <div class="item">
                            <a data-rel="prettyPhoto[gallery1]" href="images/gallery/4.webp">
                                <img width="240" src="images/gallery/thumb/4.webp" alt="gallery">
                            </a>
                        </div>
                        <div class="item">
                            <a data-rel="prettyPhoto[gallery1]" href="images/gallery/5.webp">
                                <img width="240" src="images/gallery/thumb/5.webp" alt="gallery">
                            </a>
                        </div>
                        <div class="item">
                            <a data-rel="prettyPhoto[gallery1]" href="images/gallery/6.webp">
                                <img width="240" src="images/gallery/thumb/6.webp" alt="gallery">
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>


    <!-- Section: News -->
    <section data-bg-img="images/pattern/p4.png">
        <div class="container pb-50">
            <div class=" text-center mb-50">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h2 class="section-head text-center font-tajawal text-uppercase"><span class="section-head-black font-regular ">{{trans('homePage.our')}}</span> {{trans('homePage.news')}}</h2>
                        <div class="section-head-underline" style="width: 300px"></div>
                        <p class="theme-color text-center mt-20 font-tajawal products-small-header">  {{trans('homePage.newsSlogan')}}  </p>
                    </div>
                </div>
            </div>
            <div class="section-content">
                <div class="row multi-row-clearfix">
                    <div class="blog-posts">
                        <div class="col-xs-12 col-sm-12 col-md-4">
                            <article class="post style1 clearfix maxwidth500">
                                <div class="col-md-12 p-0">
                                    <div class="entry-header">
                                        <div class="post-thumb">
                                            <img src="http://placehold.it/360x200" alt="" class="img-responsive img-fullwidth">
                                        </div>
                                        <div class="entry-date entry-date-absolute">
                                            25 <span>{{trans('homePage.dec')}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 p-0">
                                    <div class="entry-content pl-50 p-20 pt-30 pr-20">
                                        <h5 class="entry-title pt-0"><a href="#">Different types of stroke</a></h5>
                                        <p>Lorem ipsum dolor adipisicing amet, consectetur sit elit. Aspernatur incidihil quo officia.</p>
                                        <div class="entry-meta pull-left flip mt-10">
{{--                                            <ul class="list-inline">--}}
{{--                                                <li><i class="fa fa-thumbs-o-up mr-5"></i> 13</li>--}}
{{--                                                <li><i class="fa fa-comments-o mr-5"></i> 43</li>--}}
{{--                                            </ul>--}}
                                        </div>
                                        <a class="text-theme-colored mt-10 mb-0 pull-right flip" href="#">{{trans('homePage.readMore')}} <i class="fa {{(app()->getLocale() == 'en')?'fa-angle-double-right':'fa-angle-double-left'}}"></i></a>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-4">

                            <article class="post style1 clearfix maxwidth500">
                                <div class="col-md-12 p-0">
                                    <div class="entry-header">
                                        <div class="post-thumb">
                                            <img src="http://placehold.it/360x200" alt="" class="img-responsive img-fullwidth">
                                        </div>
                                        <div class="entry-date entry-date-absolute">
                                            25 <span>{{trans('homePage.dec')}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 p-0">
                                    <div class="entry-content pl-50 p-20 pt-30 pr-20">
                                        <h5 class="entry-title pt-0"><a href="#">Different types of stroke</a></h5>
                                        <p>Lorem ipsum dolor adipisicing amet, consectetur sit elit. Aspernatur incidihil quo officia.</p>
                                        <div class="entry-meta pull-left flip mt-10">
                                            {{--                                            <ul class="list-inline">--}}
                                            {{--                                                <li><i class="fa fa-thumbs-o-up mr-5"></i> 13</li>--}}
                                            {{--                                                <li><i class="fa fa-comments-o mr-5"></i> 43</li>--}}
                                            {{--                                            </ul>--}}
                                        </div>
                                        <a class="text-theme-colored mt-10 mb-0 pull-right flip" href="#">{{trans('homePage.readMore')}} <i class="fa {{(app()->getLocale() == 'en')?'fa-angle-double-right':'fa-angle-double-left'}}"></i></a>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-4">

                            <article class="post style1 clearfix maxwidth500">
                                <div class="col-md-12 p-0">
                                    <div class="entry-header">
                                        <div class="post-thumb">
                                            <img src="http://placehold.it/360x200" alt="" class="img-responsive img-fullwidth">
                                        </div>
                                        <div class="entry-date entry-date-absolute">
                                            25 <span>{{trans('homePage.dec')}}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 p-0">
                                    <div class="entry-content pl-50 p-20 pt-30 pr-20">
                                        <h5 class="entry-title pt-0"><a href="#">Different types of stroke</a></h5>
                                        <p>Lorem ipsum dolor adipisicing amet, consectetur sit elit. Aspernatur incidihil quo officia.</p>
                                        <div class="entry-meta pull-left flip mt-10">
                                            {{--                                            <ul class="list-inline">--}}
                                            {{--                                                <li><i class="fa fa-thumbs-o-up mr-5"></i> 13</li>--}}
                                            {{--                                                <li><i class="fa fa-comments-o mr-5"></i> 43</li>--}}
                                            {{--                                            </ul>--}}
                                        </div>
                                        <a class="text-theme-colored mt-10 mb-0 pull-right flip" href="#">{{trans('homePage.readMore')}} <i class="fa {{(app()->getLocale() == 'en')?'fa-angle-double-right':'fa-angle-double-left'}}"></i></a>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Section: Contact -->
    <section id="contact" class="divider parallax pb-150" data-bg-img="images/contact-bg.webp">

        <div class="main-info text-center" dir="ltr">
            <div class="col-sm-4 contact-sec sec_1">
                <i class="fa fa-phone"></i>
                <p class="font-tajawal">
                    <a href="tel:+9660559197115" class="text-white">+9660559197115</a></br>
                    <a href="+966920007397" class="text-white">+966920007397</a>
                </p>
            </div>
            <div class="col-sm-4 contact-sec sec_2">
                <i class="fa fa-envelope"></i>
                <p class="font-tajawal pt-10">
                    <a href="mail:info@rowad-eltamayoz.com" class="text-white">info@rowad-eltamayoz.com</a></p>
            </div>
            <div class="col-sm-4 contact-sec sec_3">
                <i class="fa fa-map-marker"></i>
                <p class="font-tajawal">{{trans('homePage.contactAddress1')}} <br>{{trans('homePage.contactAddress2')}}</p>
            </div>
        </div>

        <div class="pt-100 mt-150 mt-xs-0">



            <div class="col-sm-6 col-xs-12 order-md-last order-first hidden-sm hidden-md hidden-lg ">
                <h2 class="section-head text-left font-tajawal text-uppercase text-white contact-head">
                    <span class="font-regular ">{{trans('homePage.contact')}}</span> {{trans('homePage.us')}}
                </h2>
                <div class="section-head-underline m-0" style="width: 400px"></div>

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
                    <form method="put" action="{{url('/laravel-send-contact-email')}}">
                        <div class="form-group">
                            <label for="name" class="font-bold">{{trans('homePage.fullName')}}</label>
                            <input type="text" name="name" class="form-input form-control" id="name">
                        </div>
                        <div class="form-group">
                            <label for="email" class="font-bold">{{trans('homePage.emailAddress')}}</label>
                            <input type="email" name="email" class="form-input form-control" id="email">
                        </div>
                        <div class="form-group">
                            <label for="phone" class="font-bold">{{trans('homePage.phoneNumber')}}</label>
                            <input type="number" name="phone" class="form-input form-control" id="phone">
                        </div>
                        <div class="form-group">
                            <!--                              <label for="phone">Phone Number</label>-->
                            <textarea name="message" class="form-input form-control" id="message" placeholder="{{trans('homePage.messageHere')}}"></textarea>
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
                <div class="section-head-underline m-0" style="width: 400px"></div>

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


    <!-- Section: Partners -->
    <section id="partners" class="text-center">

        <div class="container pb-100">

            <div class="section-title text-center">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h2 class="section-head text-center font-tajawal text-uppercase theme-color"><span class="section-head-black font-regular">{{trans('homePage.our')}}</span> {{trans('homePage.partners')}}</h2>
                        <div class="section-head-underline" style="width: 200px"></div>

                    </div>
                </div>
            </div>
            <div class="section-content">
                <div class="row features-style1 mt-20">


                    <div class="owl-carousel-partners" data-nav="true">
                        <div class="item">
                            <a data-rel="prettyPhoto[partners1]" href="images/partners/1.png">
                                <img width="240" src="images/partners/1.png" alt="">
                            </a>
                        </div>
                        <div class="item">
                            <a data-rel="prettyPhoto[partners1]" href="images/partners/2.png">
                                <img width="240" src="images/partners/2.png" alt="">
                            </a>
                        </div>
                        <div class="item">
                            <a data-rel="prettyPhoto[partners1]" href="images/partners/3.png">
                                <img width="240" src="images/partners/3.png" alt="">
                            </a>

                        </div>
                        <div class="item">
                            <a data-rel="prettyPhoto[partners1]" href="images/partners/4.png">
                                <img width="240" src="images/partners/4.png" alt="">
                            </a>
                        </div>
                        <div class="item">
                            <span class="helper"></span>
                            <a data-rel="prettyPhoto[partners1]" href="images/partners/5.png">
                                <img width="240" src="images/partners/5.png" alt="">
                            </a>
                        </div>
                        <div class="item">
                            <span class="helper"></span>
                            <a data-rel="prettyPhoto[partners1]" href="images/partners/6.png">
                                <img width="240" src="images/partners/6.png" alt="">
                            </a>
                        </div>
                        <div class="item">
                            <a data-rel="prettyPhoto[partners1]" href="images/partners/7.png">
                                <img width="240" src="images/partners/7.png" alt="">
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>

@endsection


@section('scripts')


    <!-- SLIDER REVOLUTION 5.0 EXTENSIONS
      (Load Extensions only on Local File Systems !
       The following part can be removed on Server for On Demand Loading) -->
    <script type="text/javascript" src="js/revolution-slider/js/extensions/revolution.extension.actions.min.js"></script>
    <script type="text/javascript" src="js/revolution-slider/js/extensions/revolution.extension.carousel.min.js"></script>
    <script type="text/javascript" src="js/revolution-slider/js/extensions/revolution.extension.kenburn.min.js"></script>
    <script type="text/javascript" src="js/revolution-slider/js/extensions/revolution.extension.layeranimation.min.js"></script>
    <script type="text/javascript" src="js/revolution-slider/js/extensions/revolution.extension.migration.min.js"></script>
    <script type="text/javascript" src="js/revolution-slider/js/extensions/revolution.extension.navigation.min.js"></script>
    <script type="text/javascript" src="js/revolution-slider/js/extensions/revolution.extension.parallax.min.js"></script>
    <script type="text/javascript" src="js/revolution-slider/js/extensions/revolution.extension.slideanims.min.js"></script>
    <script type="text/javascript" src="js/revolution-slider/js/extensions/revolution.extension.video.min.js"></script>

    <script>
        $('.owl-carousel').owlCarousel({
            loop:true,
            margin:20,
            autoplay:true,
            nav:true,
            navText: [
                '<',
                '>'
            ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })

        $('.owl-carousel-partners').owlCarousel({
            loop:true,
            margin:20,
            autoplay:true,
            nav:true,
            navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
            }
        })




        $(document).ready(function() {
            $("a[data-rel^='prettyPhoto']").prettyPhoto({
                hook: 'data-rel',
                animation_speed:'normal',
                theme:'light_square',
                slideshow:3000,
                autoplay_slideshow: false,
                social_tools: false
            });
        });
    </script>


@endsection
