@extends('layouts.app')
@section('title', 'About Rowad')
@section('sidebar')
    @parent

@endsection

@section('content')

    <!-- Section: inner-header -->
    <section class="inner-header divider layer-overlay overlay-deep" data-bg-img="http://placehold.it/1920x1280">
        <div class="container pt-90 pb-50">
            <!-- Section Content -->
            <div class="section-content">
                <div class="row">
                    <div class="col-md-12 xs-text-center">
                        <h2 class="font-28">Blog</h2>
                            <ol class="breadcrumb white mt-10">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Pages</a></li>
                                <li class="active text-theme-colored">Blog</li>
                            </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container mt-30 mb-30 pt-30 pb-30">
            <div class="row multi-row-clearfix">
                <div class="col-md-9">
                    <div class="blog-posts">
                        <div class="col-md-12">
                            <div class="row list-dashed">
                                <article class="post clearfix mb-50 pb-30">
                                    <div class="entry-header">
                                        <div class="post-thumb"> <img alt="" src="https://placehold.it/900x500" class="img-fullwidth img-responsive"> </div>
                                        <h5 class="entry-title"><a href="#">Single Image Post</a></h5>
                                        <ul class="list-inline font-12 mb-20 mt-10">
                                            <li>posted by <a href="#" class="text-theme-colored">Admin |</a></li>
                                            <li><span class="text-theme-colored">SEP 12,15</span></li>
                                        </ul>
                                    </div>
                                    <div class="entry-content">
                                        <p class="mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sit nobis magni incidunt eos quasi et excepturi, animi omnis velit, deserunt ratione eum dolorem ducimus ab quidem saepe, natus earum facilis voluptate molestias quos nisi. Beatae in saepe velit nisi sapiente ullam nihil. Laboriosam repellat deleniti voluptate maiores consectetur debitis <a href="#">[...]</a></p>
                                        <ul class="list-inline like-comment pull-left font-12">
                                            <li><i class="pe-7s-comment"></i>36</li>
                                            <li><i class="pe-7s-like2"></i>125</li>
                                        </ul>
                                        <a class="pull-right text-gray font-13" href="#"><i class="fa fa-angle-double-right text-theme-colored"></i> Read more</a>
                                    </div>
                                </article>

                                <article class="post clearfix mb-50 pb-30">
                                    <div class="entry-header">
                                        <h5 class="entry-title mt-0 pt-0"><a href="#">Text Post</a></h5>
                                        <ul class="list-inline font-12 mb-20 mt-10">
                                            <li>posted by <a href="#" class="text-theme-colored">Admin |</a></li>
                                            <li><span class="text-theme-colored">SEP 12,15</span></li>
                                        </ul>
                                    </div>
                                    <div class="entry-content">
                                        <p class="mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sit nobis magni incidunt eos quasi et excepturi, animi omnis velit, deserunt ratione eum dolorem ducimus ab quidem saepe, natus earum facilis voluptate molestias quos nisi. Beatae in saepe velit nisi sapiente ullam nihil. Laboriosam repellat deleniti voluptate maiores consectetur debitis <a href="#">[...]</a></p>
                                        <ul class="list-inline like-comment pull-left font-12">
                                            <li><i class="pe-7s-comment"></i>36</li>
                                            <li><i class="pe-7s-like2"></i>125</li>
                                        </ul>
                                        <a class="pull-right text-gray font-13" href="#"><i class="fa fa-angle-double-right text-theme-colored"></i> Read more</a>
                                    </div>
                                </article>

                                <article class="post clearfix mb-50 pb-30">
                                    <div class="entry-header">
                                        <div class="post-thumb">
                                            <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167425759&amp;auto_play=false&amp;hide_related=true&amp;show_comments=true&amp;show_user=false&amp;show_reposts=false&amp;visual=false"></iframe>
                                        </div>
                                        <h5 class="entry-title"><a href="#">Sound Cloud Post </a></h5>
                                        <ul class="list-inline font-12 mb-20 mt-10">
                                            <li>posted by <a href="#" class="text-theme-colored">Admin |</a></li>
                                            <li><span class="text-theme-colored">SEP 12,15</span></li>
                                        </ul>
                                    </div>
                                    <div class="entry-content">
                                        <p class="mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sit nobis magni incidunt eos quasi et excepturi, animi omnis velit, deserunt ratione eum dolorem ducimus ab quidem saepe, natus earum facilis voluptate molestias quos nisi. Beatae in saepe velit nisi sapiente ullam nihil. Laboriosam repellat deleniti voluptate maiores consectetur debitis <a href="#">[...]</a></p>
                                        <ul class="list-inline like-comment pull-left font-12">
                                            <li><i class="pe-7s-comment"></i>36</li>
                                            <li><i class="pe-7s-like2"></i>125</li>
                                        </ul>
                                        <a class="pull-right text-gray font-13" href="#"><i class="fa fa-angle-double-right text-theme-colored"></i> Read more</a>
                                    </div>
                                </article>

                                <article class="post clearfix mb-50 pb-30">
                                    <div class="entry-header">
                                        <div class="post-thumb">
                                            <iframe src="//player.vimeo.com/video/114959015?title=0&amp;byline=0&amp;portrait=0" width="360" height="205" allowfullscreen>
                                            </iframe>
                                        </div>
                                        <h5 class="entry-title"><a href="#">Vimeo Video Post </a></h5>
                                        <ul class="list-inline font-12 mb-20 mt-10">
                                            <li>posted by <a href="#" class="text-theme-colored">Admin |</a></li>
                                            <li><span class="text-theme-colored">SEP 12,15</span></li>
                                        </ul>
                                    </div>
                                    <div class="entry-content">
                                        <p class="mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sit nobis magni incidunt eos quasi et excepturi, animi omnis velit, deserunt ratione eum dolorem ducimus ab quidem saepe, natus earum facilis voluptate molestias quos nisi. Beatae in saepe velit nisi sapiente ullam nihil. Laboriosam repellat deleniti voluptate maiores consectetur debitis <a href="#">[...]</a></p>
                                        <ul class="list-inline like-comment pull-left font-12">
                                            <li><i class="pe-7s-comment"></i>36</li>
                                            <li><i class="pe-7s-like2"></i>125</li>
                                        </ul>
                                        <a class="pull-right text-gray font-13" href="#"><i class="fa fa-angle-double-right text-theme-colored"></i> Read more</a>
                                    </div>
                                </article>

                                <article class="post clearfix mb-50 pb-30">
                                    <div class="entry-header">
                                        <div class="post-thumb">
                                            <iframe width="600" height="340"
                                                    src="http://www.youtube.com/embed/oIDqz2BrVec?autoplay=0" allowfullscreen>
                                            </iframe>
                                        </div>
                                        <h5 class="entry-title"><a href="#">Youtube Video Post </a></h5>
                                        <ul class="list-inline font-12 mb-20 mt-10">
                                            <li>posted by <a href="#" class="text-theme-colored">Admin |</a></li>
                                            <li><span class="text-theme-colored">SEP 12,15</span></li>
                                        </ul>
                                    </div>
                                    <div class="entry-content">
                                        <p class="mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sit nobis magni incidunt eos quasi et excepturi, animi omnis velit, deserunt ratione eum dolorem ducimus ab quidem saepe, natus earum facilis voluptate molestias quos nisi. Beatae in saepe velit nisi sapiente ullam nihil. Laboriosam repellat deleniti voluptate maiores consectetur debitis <a href="#">[...]</a></p>
                                        <ul class="list-inline like-comment pull-left font-12">
                                            <li><i class="pe-7s-comment"></i>36</li>
                                            <li><i class="pe-7s-like2"></i>125</li>
                                        </ul>
                                        <a class="pull-right text-gray font-13" href="#"><i class="fa fa-angle-double-right text-theme-colored"></i> Read more</a>
                                    </div>
                                </article>

                                <article class="post clearfix mb-50 pb-30">
                                    <div class="entry-header">
                                        <div class="post-thumb">
                                            <!-- Portfolio Gallery Grid -->
                                            <div class="gallery-isotope grid-5 masonry gutter-small clearfix" data-lightbox="gallery">
                                                <!-- Portfolio Item Start -->
                                                <div class="gallery-item">
                                                    <a href="http://placehold.it/400x300" data-lightbox="gallery-item" title="Title Here 1"><img src="http://placehold.it/400x300" alt=""></a>
                                                </div>
                                                <!-- Portfolio Item End -->

                                                <!-- Portfolio Item Start -->
                                                <div class="gallery-item wide">
                                                    <a href="http://placehold.it/800x600" data-lightbox="gallery-item" title="Title Here 2"><img src="http://placehold.it/800x600" alt=""></a>
                                                </div>
                                                <!-- Portfolio Item End -->

                                                <!-- Portfolio Item Start -->
                                                <div class="gallery-item">
                                                    <a href="http://placehold.it/400x300" data-lightbox="gallery-item" title="Title Here 3"><img src="http://placehold.it/400x300" alt=""></a>
                                                </div>
                                                <!-- Portfolio Item End -->

                                                <!-- Portfolio Item Start -->
                                                <div class="gallery-item">
                                                    <a href="http://placehold.it/400x600" data-lightbox="gallery-item" title="Title Here 4"><img src="http://placehold.it/400x600" alt=""></a>
                                                </div>
                                                <!-- Portfolio Item End -->

                                                <!-- Portfolio Item Start -->
                                                <div class="gallery-item">
                                                    <a href="http://placehold.it/400x600" data-lightbox="gallery-item" title="Title Here 5"><img src="http://placehold.it/400x600" alt=""></a>
                                                </div>
                                                <!-- Portfolio Item End -->

                                                <!-- Portfolio Item Start -->
                                                <div class="gallery-item">
                                                    <a href="http://placehold.it/400x300" data-lightbox="gallery-item" title="Title Here 6"><img src="http://placehold.it/400x300" alt=""></a>
                                                </div>
                                                <!-- Portfolio Item End -->

                                                <!-- Portfolio Item Start -->
                                                <div class="gallery-item">
                                                    <a href="http://placehold.it/400x300" data-lightbox="gallery-item" title="Title Here 6"><img src="http://placehold.it/400x300" alt=""></a>
                                                </div>
                                                <!-- Portfolio Item End -->

                                                <!-- Portfolio Item Start -->
                                                <div class="gallery-item">
                                                    <a href="http://placehold.it/400x300" data-lightbox="gallery-item" title="Title Here 6"><img src="http://placehold.it/400x300" alt=""></a>
                                                </div>
                                                <!-- Portfolio Item End -->

                                                <!-- Portfolio Item Start -->
                                                <div class="gallery-item">
                                                    <a href="http://placehold.it/400x300" data-lightbox="gallery-item" title="Title Here 6"><img src="http://placehold.it/400x300" alt=""></a>
                                                </div>
                                                <!-- Portfolio Item End -->

                                                <!-- Portfolio Item Start -->
                                                <div class="gallery-item">
                                                    <a href="http://placehold.it/400x300" data-lightbox="gallery-item" title="Title Here 6"><img src="http://placehold.it/400x300" alt=""></a>
                                                </div>
                                                <!-- Portfolio Item End -->
                                            </div>
                                            <!-- End Portfolio Gallery Grid -->
                                        </div>
                                        <h5 class="entry-title"><a href="#">Gallery Post </a></h5>
                                        <ul class="list-inline font-12 mb-20 mt-10">
                                            <li>posted by <a href="#" class="text-theme-colored">Admin |</a></li>
                                            <li><span class="text-theme-colored">SEP 12,15</span></li>
                                        </ul>
                                    </div>
                                    <div class="entry-content">
                                        <p class="mb-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores sit nobis magni incidunt eos quasi et excepturi, animi omnis velit, deserunt ratione eum dolorem ducimus ab quidem saepe, natus earum facilis voluptate molestias quos nisi. Beatae in saepe velit nisi sapiente ullam nihil. Laboriosam repellat deleniti voluptate maiores consectetur debitis <a href="#">[...]</a></p>
                                        <ul class="list-inline like-comment pull-left font-12">
                                            <li><i class="pe-7s-comment"></i>36</li>
                                            <li><i class="pe-7s-like2"></i>125</li>
                                        </ul>
                                        <a class="pull-right text-gray font-13" href="#"><i class="fa fa-angle-double-right text-theme-colored"></i> Read more</a>
                                    </div>
                                </article>

                                <article class="post clearfix mb-50 pb-30">
                                    <div class="entry-header">
                                        <h5 class="entry-title mt-0 pt-0"><a href="#">Quotation Post</a></h5>
                                        <ul class="list-inline font-12 mb-20 mt-10">
                                            <li>posted by <a href="#" class="text-theme-colored">Admin |</a></li>
                                            <li><span class="text-theme-colored">SEP 12,15</span></li>
                                        </ul>
                                    </div>
                                    <div class="entry-content">
                                        <div class="">
                                            <blockquote class="gray">
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo eligendi quibusdam doloremque necessitatibus doloribus blanditiis, praesentium ex error aliquid? Corporis dolores consequuntur cupiditate.</p>
                                                <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
                                            </blockquote>
                                        </div>
                                        <ul class="list-inline like-comment pull-left font-12 mt-30">
                                            <li><i class="pe-7s-comment"></i>36</li>
                                            <li><i class="pe-7s-like2"></i>125</li>
                                        </ul>
                                    </div>
                                </article>

                                <article class="post clearfix mb-50 pb-30">
                                    <div class="entry-header">
                                        <div class="post-thumb">
                                            <div class="widget-image-carousel">
                                                <div class="item">
                                                    <img src="https://placehold.it/900x500" alt="">
                                                </div>
                                                <div class="item">
                                                    <img src="https://placehold.it/900x500" alt="">
                                                </div>
                                                <div class="item">
                                                    <img src="https://placehold.it/900x500" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <h5 class="entry-title"><a href="#">Images Carousel Post</a></h5>
                                        <ul class="list-inline font-12 mb-20 mt-10">
                                            <li>posted by <a href="#" class="text-theme-colored">Admin |</a></li>
                                            <li><span class="text-theme-colored">SEP 12,15</span></li>
                                        </ul>
                                    </div>
                                    <div class="entry-content">
                                        <p class="mb-30">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna et sed aliqua <a href="#">[...]</a></p>
                                        <ul class="list-inline like-comment pull-left font-12">
                                            <li><i class="pe-7s-comment"></i>36</li>
                                            <li><i class="pe-7s-like2"></i>125</li>
                                        </ul>
                                        <a class="pull-right text-gray font-13" href="#"><i class="fa fa-angle-double-right text-theme-colored"></i> Read more</a>
                                    </div>
                                </article>

                                <article class="post clearfix mb-50 pb-30">
                                    <div class="entry-content">
                                        <div class="">
                                            <a class="post-link text-center text-white bg-theme-colored display-block font-20 p-30 mb-30" href="#">
                                                kodesolution.com<br><span class="font-13">http://kodesolution.com</span>
                                            </a>
                                        </div>
                                        <ul class="list-inline like-comment pull-left font-12">
                                            <li><i class="pe-7s-comment"></i>36</li>
                                            <li><i class="pe-7s-like2"></i>125</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <nav>
                                <ul class="pagination theme-colored">
                                    <li> <a aria-label="Previous" href="#"> <span aria-hidden="true">«</span> </a> </li>
                                    <li class="active"><a href="#">1</a></li>
                                    <li><a href="#">2</a></li>
                                    <li><a href="#">3</a></li>
                                    <li><a href="#">4</a></li>
                                    <li><a href="#">5</a></li>
                                    <li><a href="#">...</a></li>
                                    <li> <a aria-label="Next" href="#"> <span aria-hidden="true">»</span> </a> </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-3">
                    <div class="sidebar sidebar-right mt-sm-30">
                        <div class="widget">
                            <h5 class="widget-title line-bottom">Search box</h5>
                            <div class="search-form">
                                <form>
                                    <div class="input-group">
                                        <input type="text" placeholder="Click to Search" class="form-control search-input">
                                        <span class="input-group-btn">
                      <button type="submit" class="btn search-button"><i class="fa fa-search"></i></button>
                      </span>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="widget">
                            <h5 class="widget-title line-bottom">Categories</h5>
                            <div class="categories">
                                <ul class="list list-border angle-double-right">
                                    <li><a href="#">Creative<span>(19)</span></a></li>
                                    <li><a href="#">Portfolio<span>(21)</span></a></li>
                                    <li><a href="#">Fitness<span>(15)</span></a></li>
                                    <li><a href="#">Gym<span>(35)</span></a></li>
                                    <li><a href="#">Personal<span>(16)</span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="widget">
                            <h5 class="widget-title line-bottom">Latest News</h5>
                            <div class="latest-posts">
                                <article class="post media-post clearfix pb-0 mb-10">
                                    <a class="post-thumb" href="#"><img src="https://placehold.it/75x75" alt=""></a>
                                    <div class="post-right">
                                        <h5 class="post-title mt-0"><a href="#">Sustainable Construction</a></h5>
                                        <p>Lorem ipsum dolor sit amet adipisicing elit...</p>
                                    </div>
                                </article>
                                <article class="post media-post clearfix pb-0 mb-10">
                                    <a class="post-thumb" href="#"><img src="https://placehold.it/75x75" alt=""></a>
                                    <div class="post-right">
                                        <h5 class="post-title mt-0"><a href="#">Industrial Coatings</a></h5>
                                        <p>Lorem ipsum dolor sit amet adipisicing elit...</p>
                                    </div>
                                </article>
                                <article class="post media-post clearfix pb-0 mb-10">
                                    <a class="post-thumb" href="#"><img src="https://placehold.it/75x75" alt=""></a>
                                    <div class="post-right">
                                        <h5 class="post-title mt-0"><a href="#">Storefront Installations</a></h5>
                                        <p>Lorem ipsum dolor sit amet adipisicing elit...</p>
                                    </div>
                                </article>
                            </div>
                        </div>
                        <div class="widget">
                            <h5 class="widget-title line-bottom">Photos from Flickr</h5>
                            <div id="flickr-feed" class="clearfix">
                                <!-- Flickr Link -->
                                <script type="text/javascript" src="http://www.flickr.com/badge_code_v2.gne?count=9&amp;display=latest&amp;size=s&amp;layout=x&amp;source=user&amp;user=52617155@N08">
                                </script>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
