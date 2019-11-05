@extends('layouts.app')
@section('title', 'About Rowad')
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


    <div class="inner-header products-header  layer-overlay">
        <div class="page-name">
            <h2 class="font-bold font-tajawal text-center text-white text-uppercase">
                <span class="font-regular">{{trans('homePage.about')}}</span> {{trans('homePage.rowad')}}
            </h2>
        </div>
    </div>

    <div class="container mt-30 mb-30 p-30">
        <div class="row">
            <p class="font-tajawal text-black font-18">
                <span class="theme-color"> {{trans('aboutPage.aboutUsSection1')}}</span>
                {{trans('aboutPage.aboutUsSection')}}
            </p>
            <h2 class="font-tajawal font-bold theme-color">{{trans('aboutPage.aboutUsSection2')}}</h2>
            <p class="font-tajawal text-black font-18">
                <span class="theme-color">{{trans('aboutPage.aboutUsSection3')}}</span>
                {{trans('aboutPage.aboutUsSection4')}}
            </p>
            <p class="font-tajawal text-black font-18">
                <span class="theme-color">{{trans('aboutPage.aboutUsSection5')}}</span>
                {{trans('aboutPage.aboutUsSection6')}}
            </p>
            <p class="font-tajawal text-black font-18">
                <span class="theme-color">{{trans('aboutPage.aboutUsSection7')}}</span>
                {{trans('aboutPage.aboutUsSection8')}}
            </p>
        </div>
        <div class="row">
            <h2 class="font-tajawal font-bold theme-color"> {{trans('homePage.our')}} {{trans('homePage.vision')}}</h2>
            <p class="font-tajawal text-black font-18">
                {{trans('homePage.ourVision')}}
            </p>
        </div>
        <div class="row">
            <h2 class="font-tajawal font-bold theme-color"> {{trans('homePage.our')}} {{trans('homePage.goals')}}</h2>
            <p class="font-tajawal text-black font-18">
                {{trans('homePage.ourGoals')}}
            </p>
        </div>

        <div class="row">
            <a href="{{url('/get-offer')}}"  class="get-service-btn btn btn-default theme-second-background-color text-black text-uppercase font-medium">{{trans('homePage.getService')}}</a>
        </div>

    </div>

@endsection
