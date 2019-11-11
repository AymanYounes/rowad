@extends('layouts.app')
@section('title', 'Contact rowad')
@section('sidebar')
    @parent

@endsection

@section('content')

    <!-- Section: Gallery -->
    <section id="gallery" class="divider parallax text-center full-section pt-100 gallery-page" data-bg-img="images/gallery-page-bg.jpg">

        <div class="container">
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


                    <div class="owl-carousel-4col" data-nav="true">
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


@endsection
