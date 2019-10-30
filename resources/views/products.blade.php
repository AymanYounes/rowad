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

    <!-- Section: products -->
    <section>

        <div class="inner-header products-header  layer-overlay">
            <div class="page-name">
                <h2 class="font-bold font-tajawal text-center text-white text-uppercase">
                    <span class="font-regular">our</span> Products
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
                                    <li class="font-tajawal text-center text-uppercase font-bold active"><a href="#">SWIMMING POOL FILTERS</a></li>
                                    <li class="font-tajawal text-center text-uppercase font-bold"><a href="#">SWIMMING POOL HEATER</a></li>
                                    <li class="font-tajawal text-center text-uppercase font-bold"><a href="#">MAINTENANCE TOOLS</a></li>
                                    <li class="font-tajawal text-center text-uppercase font-bold"><a href="#">POOL SPOTLIGHTS</a></li>
                                    <li class="font-tajawal text-center text-uppercase font-bold"><a href="#">POOL COVERS</a></li>
                                    <li class="font-tajawal text-center text-uppercase font-bold"><a href="#">POOL ACCESSORIES</a></li>

                                </ul>
                            </div>
                        </div>

                        <div class="widget text-center">
                            <a class="get-service-btn btn btn-default theme-second-background-color text-black text-uppercase font-medium">Get Service</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="row">

                        <div class="col-sm-4">
                            <div class="product-item">
                                <div class="product-img">
                                    <img src="images/products/sand-filter.png" alt="">
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="theme-color text-uppercase">Sand Filter</h3>
                                    </div>
                                    <div class="product-desc">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-sm-4">
                            <div class="product-item">
                                <div class="product-img">
                                    <img src="images/products/atlas-filter.png" alt="">
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="theme-color text-uppercase">Atlas Filter</h3>
                                    </div>
                                    <div class="product-desc">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-sm-4">
                            <div class="product-item">
                                <div class="product-img">
                                    <img src="images/products/sand-filter-2.png" alt="">
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="theme-color text-uppercase">Sand Filter - commercial Pools</h3>
                                    </div>
                                    <div class="product-desc">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-sm-4">
                            <div class="product-item">
                                <div class="product-img">
                                    <img src="images/products/sand-filter.png" alt="">
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="theme-color text-uppercase">Sand Filter</h3>
                                    </div>
                                    <div class="product-desc">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-sm-4">
                            <div class="product-item">
                                <div class="product-img">
                                    <img src="images/products/atlas-filter.png" alt="">
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="theme-color text-uppercase">Atlas Filter</h3>
                                    </div>
                                    <div class="product-desc">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="col-sm-4">
                            <div class="product-item">
                                <div class="product-img">
                                    <img src="images/products/sand-filter-2.png" alt="">
                                </div>
                                <div class="product-info">
                                    <div class="product-title">
                                        <h3 class="theme-color text-uppercase">Sand Filter - commercial Pools</h3>
                                    </div>
                                    <div class="product-desc">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                </div>
            </div>
        </div>
    </section>


@endsection
