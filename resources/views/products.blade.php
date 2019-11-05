@extends('layouts.app')
@section('title', 'About Rowad')

@php
    $name = 'name_'.Config::get('app.locale');
    $title = 'title_'.Config::get('app.locale');
    $description = 'description_'.Config::get('app.locale');
@endphp
@section('content')


    <style>
        .main-content{
            background: #FFF;
            height: 100%;
        }
    </style>

    <!-- Section: products -->
    <section>

        <div class="inner-header products-header  layer-overlay">
            <div class="page-name">
                <h2 class="font-bold font-tajawal text-center text-white text-uppercase">
                    <span class="font-regular">{{trans('homePage.our')}}</span> {{trans('homePage.products')}}
                </h2>
            </div>
        </div>

        <div class="container mt-30 mb-30 pt-30 pb-30">
            <div class="row">
                <div class="col-sm-12 col-md-3">
                    <div class="sidebar sidebar-right mt-sm-30">
                        <div class="widget">
                            <h5 class="widget-title text-center categories-title">Products Categories</h5>
                            <div class="categories">
                                <ul class="list">

                                    @foreach($categories as $category)
                                        <li class="font-tajawal text-center text-uppercase font-bold {{(isset($category_id) && $category->id == $category_id)?'active':''}}"><a href="{{url('/products?category_id='.$category->id)}}">{{$category->$name}}</a></li>
                                    @endforeach
                                </ul>
                            </div>
                        </div>

                        <div class="widget text-center">
                            <a class="get-service-btn btn btn-default theme-second-background-color text-black text-uppercase font-medium">{{trans('homePage.getService')}}</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="row">
                        @foreach($products as $product)
                        <div class="col-sm-4">
                            <div class="product-item">
                                <div class="product-img">
                                    <img src="{{'images/products/'.$product->image}}" alt="{{$product->$title}}">
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="theme-color text-uppercase">{{$product->$title}}</h3>
                                    </div>
                                    <div class="product-desc">
                                        {{$product->$description}}
                                    </div>
                                </div>
                            </div>

                        </div>
                        @endforeach
                    </div>


                </div>
            </div>
        </div>
    </section>


@endsection
