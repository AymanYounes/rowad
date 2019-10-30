<!-- Inner pages menu -->


<div id="mySidenav" class="sidenav text-uppercase">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <a href="{{url('/')}}" class="{{(Route::current()->getName() == 'homePage')? 'text-white':''}}">Home</a>
    <a href="{{url('about')}}" class="{{(Route::current()->getName() == 'aboutPage')? 'text-white':''}}">About Us</a>
    <a href="{{url('services')}}" class="{{(Route::current()->getName() == 'servicesPage')? 'text-white':''}}">Services</a>
    <a href="{{url('products')}}" class="{{(Route::current()->getName() == 'productsPage')? 'text-white':''}}">Products</a>
    <a href="{{url('gallery')}}" class="{{(Route::current()->getName() == 'galleryPage')? 'text-white':''}}">Gallery</a>
    <a href="{{url('contact')}}" class="{{(Route::current()->getName() == 'contactPage')? 'text-white':''}}">Contact</a>
    <a href="{{url('getOffer')}}" class="{{(Route::current()->getName() == 'getOfferPage')? 'text-white':''}}">Get offer price</a>
</div>

<!-- Use any element to open the sidenav -->
<span onclick="openNav()" class="hamburger-menu">
    <span class="fa fa-bars text-white" style=""> </span>
  </span>

<!-- Home Arrow -->
<a href="{{url('/')}}" class="back-home-btn text-white">
    <span class="fa fa-long-arrow-left" style=""> </span>
</a>
