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

                <div class="service-form-wrapper hidden-xs">

                    <hr>
                    <h4>{{trans('homePage.serviceRequest')}}</h4>

                    <div class="service-form mt-20 mb-20 p-10" style="border: solid 1px #ccc;">

                        @if ($errors->any())
                            <div class="alert alert-danger">
                            {{ implode('', $errors->all(':message')) }}
                            </div>
                        @endif
                        <form method="get" action="{{url('/service-email')}}">
                            <div class="form-group">
                                <label for="name" class="font-bold">{{trans('homePage.fullName')}}</label>
                                <input type="text" name="name" class="form-input form-control" id="name" required>
                            </div>
                            <div class="form-group">
                                <label for="phone" class="font-bold">{{trans('homePage.phoneNumber')}}</label>
                                <input type="number" name="phone" class="form-input form-control" id="phone" required>
                            </div>
                            <div class="form-group">
                                <!--                              <label for="phone">Phone Number</label>-->
                                <textarea name="message" class="form-input form-control" id="message" placeholder="{{trans('homePage.messageHere')}}" required></textarea>
                            </div>

                            <div class="form-group text-center">
                                <input type="submit" class="btn btn-primary form-submit font-tajawal font-bold pl-40 pr-40" value="{{trans('homePage.sendNow')}}">
                            </div>
                        </form>
                    </div>


                 </div>

            </div>


            <div class="tab-content col-sm-9 font-tajawal">
            @foreach($services as $service)

                <div id="{{'tab_'.$service->id}}" class="tabcontent">
                    <h3>{{$service->$title}}</h3>
                    {!! $service->$content !!}
                </div>

            @endforeach


            </div>

            <div class="service-form-wrapper hidden-sm hidden-md hidden-lg m-10">

                <h4>{{trans('homePage.serviceRequest')}}</h4>

                <div class="service-form mt-20 mb-20 p-10" style="border: solid 1px #ccc;">

                    @if ($errors->any())
                        <div class="alert alert-danger">
                            {{ implode('', $errors->all(':message')) }}
                        </div>
                    @endif
                    <form method="get" action="{{url('/service-email')}}">
                        <div class="form-group">
                            <label for="name" class="font-bold">{{trans('homePage.fullName')}}</label>
                            <input type="text" name="name" class="form-input form-control" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="phone" class="font-bold">{{trans('homePage.phoneNumber')}}</label>
                            <input type="number" name="phone" class="form-input form-control" id="phone" required>
                        </div>
                        <div class="form-group">
                            <!--                              <label for="phone">Phone Number</label>-->
                            <textarea name="message" class="form-input form-control" id="message" placeholder="{{trans('homePage.messageHere')}}" required></textarea>
                        </div>

                        <div class="form-group text-center">
                            <input type="submit" class="btn btn-primary form-submit font-tajawal font-bold pl-40 pr-40" value="{{trans('homePage.sendNow')}}">
                        </div>
                    </form>
                </div>


            </div>
        </div>
    </div>


    </div>




@endsection



@section('scripts')

    @include('modals')
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
