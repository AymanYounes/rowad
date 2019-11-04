@extends('layouts.app')
@section('title', 'Service')


@php
    $title = 'title_'.Config::get('app.locale');
    $content = 'content_'.Config::get('app.locale');
@endphp

@section('content')

    <style>
        .main-content{
            background: #FFF;
            height: 100%;
        }
    </style>



    <div id="service_details">

    <div class="inner-header products-header  layer-overlay">
        <div class="page-name">
            <h2 class="font-bold font-tajawal text-center text-white text-uppercase">
                <span class="font-regular">{{trans('homePage.our')}}</span> {{trans('homePage.services')}}
            </h2>
        </div>
    </div>

    <div class="container mt-30 mb30" >
        <div class="row">
            <div class="tab col-sm-3">
                @foreach($services as $service)

                <a class="tablinks text-uppercase" onclick="openCity(event, '{{"tab_".$service->id}}')" id="defaultOpen">
                   {{$service->$title}}
                </a>

                @endforeach
            </div>



            <div class="tab-content col-sm-9 font-tajawal">
            @foreach($services as $service)


                <div id="{{'tab_'.$service->id}}" class="tabcontent">
                    <h3>{{$service->$title}}</h3>
                    {!! $service->$content !!}
                </div>

            @endforeach


            </div>

        </div>
    </div>


    </div>




@endsection



@section('scripts')

    <script>
        function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";
        }

        // Get the element with id="defaultOpen" and click on it
        document.getElementById("defaultOpen").click();
    </script>
@endsection
