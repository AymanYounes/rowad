
<!-- Header -->
<header id="header" class="header">
    <div class="header-nav navbar-fixed-top header-dark navbar-white navbar-transparent navbar-sticky-animated animated-active">
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
                        <li class=" font-tajawal text-uppercase"><a href="{{url('/catalog')}}" class="font-bold">{{trans('nav.catalog')}}</a></li>
                        <li class=" font-tajawal text-uppercase"><a href="{{url('/contact')}}" class="font-bold">{{trans('nav.contact')}}</a></li>
                        <li class=" font-tajawal text-uppercase"><span class="text-white"> |</span>
                            <a href="{{route('lang',[trans('nav.langval')])}}" class="font-bold">{{trans('nav.lang')}}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
