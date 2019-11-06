<!-- Inner pages menu -->


<div id="mySidenav" class="sidenav text-uppercase">
    <span class=" mr-50 mb-50" style="top: 20px; position: absolute; right: 20px;">
        <a href="{{route('lang',[trans('nav.langval')])}}" class="font-bold text-white font-28">{{trans('nav.lang')}}</a>
    </span>
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="{{url('/')}}" class="{{(Route::current()->getName() == 'homePage')? 'text-white':''}}">{{trans('nav.home')}}</a>
    <a href="{{url('about')}}" class="{{(Route::current()->getName() == 'aboutPage')? 'text-white':''}}">{{trans('nav.about')}}</a>
    <a href="{{url('services')}}" class="{{(Route::current()->getName() == 'servicesPage'|| Route::current()->getName() == 'servicesDetails')? 'text-white':''}}">{{trans('nav.services')}}</a>
    <a href="{{url('products')}}" class="{{(Route::current()->getName() == 'productsPage')? 'text-white':''}}">{{trans('nav.products')}}</a>
    <a href="{{url('gallery')}}" class="{{(Route::current()->getName() == 'galleryPage')? 'text-white':''}}">{{trans('nav.gallery')}}</a>
    <a href="{{url('contact')}}" class="{{(Route::current()->getName() == 'contactPage')? 'text-white':''}}">{{trans('nav.contact')}}</a>
    <a href="{{url('get-offer')}}" class="{{(Route::current()->getName() == 'getOfferPage')? 'text-white':''}}">{{trans('nav.offer')}}</a>
</div>

<!-- Use any element to open the sidenav -->
<span onclick="openNav()" class="hamburger-menu">
    <span class="fa fa-bars text-white" style=""> </span>
  </span>

<!-- Home Arrow -->
{{--<a href="{{url('/')}}" class="back-home-btn text-white">--}}
{{--    <span class="fa fa-long-arrow-left" style=""> </span>--}}
{{--</a>--}}
