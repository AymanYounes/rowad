
<nav class="pcoded-navbar">
    <div class="pcoded-inner-navbar main-menu">
        <div class="pcoded-navigatio-lavel">Navigation</div>

        <ul class="pcoded-item pcoded-left-item">

            <li class="active">
                <a href="index-1.htm">
                    <span class="pcoded-micon"><i class="feather icon-home"></i></span>
                    <span class="pcoded-mtext">Dashboard</span>
                </a>
            </li>
        </ul>


        <ul class="pcoded-item pcoded-left-item">
            <li class="pcoded-hasmenu">
                <a href="javascript:void(0)">
                    <span class="pcoded-micon"><i class="feather icon-box"></i></span>
                    <span class="pcoded-mtext">Home Page</span>
                </a>
                <ul class="pcoded-submenu">
                    <li class=" ">
                        <a href="alert.htm">
                            <span class="pcoded-mtext">meta tags</span>
                        </a>
                    </li>
                    <li class=" ">
                        <a href="alert.htm">
                            <span class="pcoded-mtext">Slider</span>
                        </a>
                    </li>
                    <li class=" ">
                        <a href="breadcrumb.htm">
                            <span class="pcoded-mtext">Offers</span>
                        </a>
                    </li>
                    <li class=" ">
                        <a href="button.htm">
                            <span class="pcoded-mtext">About</span>
                        </a>
                    </li>
                    <li class=" ">
                        <a href="box-shadow.htm">
                            <span class="pcoded-mtext">Services</span>
                        </a>
                    </li>
                    <li class=" ">
                        <a href="accordion.htm">
                            <span class="pcoded-mtext">Products</span>
                        </a>
                    </li>
                    <li class=" ">
                        <a href="generic-class.htm">
                            <span class="pcoded-mtext">Gellery</span>
                        </a>
                    </li>
                    <li class=" ">
                        <a href="tabs.htm">
                            <span class="pcoded-mtext">News</span>
                        </a>
                    </li>
                    <li class=" ">
                        <a href="color.htm">
                            <span class="pcoded-mtext">Contact</span>
                        </a>
                    </li>
                    <li class=" ">
                        <a href="color.htm">
                            <span class="pcoded-mtext">partners</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li class="pcoded-hasmenu {{(\Request::segment(2)=='services')?'pcoded-trigger':''}}">
                <a href="javascript:void(0)">
                    <span class="pcoded-micon"><i class="feather icon-server"></i></span>
                    <span class="pcoded-mtext">Services</span>
                </a>
                <ul class="pcoded-submenu">

                    @foreach($services as $service)
                        <li class="{{ (\Request::segment(2)=='services'&& \Request::segment(3)==$service->id)?"active":"" }} ">
                            <a href="{{url('/admin/services/update/'.$service->id)}}">
                                <span class="pcoded-mtext">{{$service->title_en}}</span>
                            </a>
                        </li>
                    @endforeach

                </ul>
            </li>
            <li class="pcoded-hasmenu {{(\Request::segment(2)=='product-category')?'pcoded-trigger':''}}">
                <a href="javascript:void(0)">
                    <span class="pcoded-micon"><i class="feather icon-shopping-cart"></i></span>
                    <span class="pcoded-mtext">Product Categories</span>
                </a>
                <ul class="pcoded-submenu">

                    <li class="{{ (\Request::segment(2)=='product-category'&& \Request::segment(3)== 'show' )?"active":"" }} ">
                        <a href="{{url('/admin/product-category/show/')}}">
                            <span class="pcoded-mtext">All Categories</span>
                        </a>
                    </li>
                    <li class="{{ (\Request::segment(2)=='product-category'&& \Request::segment(3)== 'add' )?"active":"" }} ">
                        <a href="{{url('/admin/product-category/add/')}}">
                            <span class="pcoded-mtext">Add New Category</span>
                        </a>
                    </li>


                </ul>
            </li>
            <li class="pcoded-hasmenu {{(\Request::segment(2)=='products')?'pcoded-trigger':''}}">
                <a href="javascript:void(0)">
                    <span class="pcoded-micon"><i class="feather icon-shopping-cart"></i></span>
                    <span class="pcoded-mtext">Products</span>
                </a>
                <ul class="pcoded-submenu">

                    <li class="{{ (\Request::segment(2)=='products'&& \Request::segment(3)== 'show' )?"active":"" }} ">
                        <a href="{{url('/admin/products/show/')}}">
                            <span class="pcoded-mtext">All Products</span>
                        </a>
                    </li>
                    <li class="{{ (\Request::segment(2)=='products'&& \Request::segment(3)== 'add' )?"active":"" }} ">
                        <a href="{{url('/admin/products/add/')}}">
                            <span class="pcoded-mtext">Add New Product</span>
                        </a>
                    </li>


                </ul>
            </li>
        </ul>

    </div>
</nav>
