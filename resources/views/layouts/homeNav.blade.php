
<!-- Header -->
<header id="header" class="header">
    <style>
        .header-nav{
            /*top: 45px;*/
        }
        @media only screen and (min-width: 992px){
            .animated-active{
                top: 41px !important;
            }
            .menuzord-menu > li > a{
                font-size: 12px;
            }
        }
    </style>
    <div class="header-top bg-theme-colored sm-text-center hidden-sm">
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="widget no-border m-0">
                        <ul class="social-icons icon-dark icon-circled icon-theme-colored icon-sm sm-text-center mt-sm-15">
                            <li>
                                <a href="http://www.facebook.com/RowadUn/" target="_blank"><i class="fa fa-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/RowadUn" target="_blank"><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/rowadun/" target="_blank"><i class="fa fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/rowadun/" target="_blank"><i class="fa fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="https://wa.me/9660559197115" target="_blank"><i class="fa fa-whatsapp"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="widget no-border m-0">
                        <ul class="list-inline pull-right flip sm-pull-none sm-text-center mt-5">
                            <li class=" font-tajawal text-uppercase">
                                <a href="{{url('/catalog')}}" class="text-white font-bold">{{trans('nav.catalog')}}</a>
                            </li>
                            <li class=" font-tajawal text-uppercase"><span class="text-white"> |</span>
                                <a href="{{route('lang',[trans('nav.langval')])}}" class="font-bold text-white">{{trans('nav.lang')}}</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="header-nav navbar-fixed-top header-dark navbar-white navbar-sticky-animated animated-active">
        <div class="header-nav-wrapper">
            <div class="container">
                <nav id="menuzord-right" class="menuzord blue">
                    <a class="menuzord-brand pull-left flip" href="javascript:void(0)">
                        <img src="images/logo-wide.png" alt="">
                    </a>
                    <ul class="menuzord-menu">
                        <li class="active font-tajawal text-uppercase"><a href="{{url('/')}}" class="font-bold">{{trans('nav.home')}}</a></li>
                        <li class=" font-tajawal text-uppercase"><a href="{{url('/about')}}" class="font-bold">{{trans('nav.about')}}</a></li>
                        <li class=" font-tajawal text-uppercase"><a href="{{url('/services')}}" class="font-bold">{{trans('nav.services')}}</a></li>
                        <li class=" font-tajawal text-uppercase"><a href="{{url('/products')}}" class="font-bold">{{trans('nav.products')}}</a></li>
                        <li class=" font-tajawal text-uppercase"><a href="{{url('/gallery')}}" class="font-bold">{{trans('nav.gallery')}}</a></li>
{{--                        <li class=" font-tajawal text-uppercase"><a href="{{url('/catalog')}}" class="font-bold">{{trans('nav.catalog')}}</a></li>--}}
                        <li class=" font-tajawal text-uppercase"><a href="{{url('/contact')}}" class="font-bold">{{trans('nav.contact')}}</a></li>
{{--                        <li class=" font-tajawal text-uppercase"><span class="text-white"> |</span>--}}
{{--                            <a href="{{route('lang',[trans('nav.langval')])}}" class="font-bold">{{trans('nav.lang')}}</a>--}}
{{--                        </li>--}}
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
