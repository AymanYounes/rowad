@extends('layouts.app')
@section('title', 'Rowad | Services')
@section('sidebar')
    @parent

@endsection

@section('content')

    <style>
        .main-content{
            background: #FFF;
            height: 100%;
        }
    </style>

    <!-- Section: services -->
    <section id="services" class="divider parallax text-center full-section pt-200" data-bg-img="images/services-page-bg.webp">
        <div class="services-wrapper">

            <h2 class="section-head services-head font-tajawal">
                <span class="section-head-white font-regular">{{trans('homePage.our')}}</span> {{trans('homePage.services')}}
            </h2>
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
                                <a href="{{url('services-details/')}}" class="btn btn-default btn-second-theme-colored text-uppercase discover-btn"> {{trans('homePage.discover')}}</a>
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
                                <a href="{{url('services-details/')}}" class="btn btn-default btn-second-theme-colored text-uppercase discover-btn"> {{trans('homePage.discover')}}</a>

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
                                <a href="{{url('services-details/')}}" class="btn btn-default btn-second-theme-colored text-uppercase discover-btn"> {{trans('homePage.discover')}}</a>

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
                                <a href="{{url('services-details/')}}" class="btn btn-default btn-second-theme-colored text-uppercase discover-btn"> {{trans('homePage.discover')}}</a>

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
                                <a href="{{url('services-details/')}}" class="btn btn-default btn-second-theme-colored text-uppercase discover-btn"> {{trans('homePage.discover')}}</a>

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
                                <a href="{{url('services-details/')}}" class="btn btn-default btn-second-theme-colored text-uppercase discover-btn"> {{trans('homePage.discover')}}</a>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="services-note text-center text-white font-tajawal font-regular mb-50">
            <p>We offer you high quality services with the latest technologies and experts.</p>
        </div>
    </section>


@endsection
