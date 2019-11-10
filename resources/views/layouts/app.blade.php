<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>

    <!-- Meta Tags -->
    <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8"/>
    <meta name="description" content="Description" />
    <meta name="keywords" content="" />
    <meta name="author" content="Rowad El tamayoz" />

    <!-- Page Title -->
    <title>Rowad | @yield('title')</title>

    <!-- Favicon and Touch Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="images/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="images/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="images/favicon/favicon-16x16.png">
    <link rel="manifest" href="images/favicon/site.webmanifest">
    <link rel="mask-icon" href="images/favicon/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#00aba9">
    <meta name="theme-color" content="#ffffff">


{{--    <link href="css/plugins.css" rel="stylesheet" type="text/css">--}}
    <link href="css/build.css" rel="stylesheet" type="text/css">
    @if(Config::get('app.locale') == 'ar')
        <link href="css/build-ar.css" rel="stylesheet" type="text/css">
    @endif
    <!-- Stylesheet -->
{{--    <link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">--}}
    @if(Config::get('app.locale') == 'ar')
        <link href="css/bootstrap-rtl.min.css" rel="stylesheet" type="text/css">
    @endif
{{--    <link href="css/jquery-ui.min.css" rel="stylesheet" type="text/css">--}}
{{--    <link href="css/animate.css" rel="stylesheet" type="text/css">--}}
{{--    <link href="css/css-plugin-collections.css" rel="stylesheet"/>--}}
    <!-- CSS | menuzord megamenu skins -->
{{--    <link id="menuzord-menu-skins" href="css/menuzord-skins/menuzord-boxed.css" rel="stylesheet"/>--}}
    <!-- CSS | Main style file -->
{{--    <link href="css/style-main.css" rel="stylesheet" type="text/css">--}}
    @if(Config::get('app.locale') == 'ar')
        <link href="css/style-main-rtl.css" rel="stylesheet" type="text/css">
        <link href="css/style-main-rtl-extra.css" rel="stylesheet" type="text/css">
    @endif
<!-- CSS | Preloader Styles -->
{{--    <link href="css/preloader.css" rel="stylesheet" type="text/css">--}}
    <!-- CSS | Custom Margin Padding Collection -->
{{--    <link href="css/custom-bootstrap-margin-padding.css" rel="stylesheet" type="text/css">--}}
    <!-- CSS | Responsive media queries -->
{{--    <link href="css/responsive.css" rel="stylesheet" type="text/css">--}}
    <!-- CSS | Style css. This is the file where you can place your own custom css code. Just uncomment it and use it. -->
    <!-- <link href="css/style.css" rel="stylesheet" type="text/css"> -->

    <link href="https://fonts.googleapis.com/css?family=Tajawal&display=swap" rel="stylesheet">
    <!--  <link href="https://fonts.googleapis.com/css?family=Tajawal:700&display=swap" rel="stylesheet">-->


    <!-- Revolution Slider 5.x CSS settings -->
{{--    <link  href="js/revolution-slider/css/settings.css" rel="stylesheet" type="text/css"/>--}}
{{--    <link  href="js/revolution-slider/css/layers.css" rel="stylesheet" type="text/css"/>--}}
{{--    <link  href="js/revolution-slider/css/navigation.css" rel="stylesheet" type="text/css"/>--}}

    <!-- CSS | Theme Color -->
{{--    <link href="css/colors/theme-skin-blue.css" rel="stylesheet" type="text/css">--}}

{{--    <link href="css/style.css" rel="stylesheet" type="text/css">--}}
    @if(Config::get('app.locale') == 'ar')
        <link href="css/style-ar.css" rel="stylesheet" type="text/css">
    @endif



{{--    @if(Config::get('app.locale') == 'ar')--}}
{{--        <link href="css/build-ar.css" rel="stylesheet" type="text/css">--}}
{{--    @else--}}
{{--        <link href="css/build.css" rel="stylesheet" type="text/css">--}}
{{--    @endif--}}
<!-- external javascripts -->

    <script src="js/jquery-2.2.0.min.js"></script>
    <script src="js/build.js"></script>
{{--    <script src="js/jquery-ui.min.js"></script>--}}
{{--    <script src="js/bootstrap.min.js"></script>--}}
    <!-- JS | jquery plugin collection for this theme -->
{{--    <script src="js/jquery-plugin-collection.js"></script>--}}

    @yield('early-scripts')
<!-- Revolution Slider 5.x SCRIPTS -->
{{--    <script src="js/revolution-slider/js/jquery.themepunch.tools.min.js"></script>--}}
{{--    <script src="js/revolution-slider/js/jquery.themepunch.revolution.min.js"></script>--}}

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->



    @yield('styles')

</head>

<body>



<div id="wrapper">
    <!-- preloader -->
@include('layouts.preloader')

@if (Route::current()->getName() == 'homePage')
    @include('layouts.homeNav')
@else
    @include('layouts.navbar')
@endif



<!-- Start main-content -->
    <div class="main-content">

        @yield('content')


    </div>
    <!-- end main-content -->

    @include('layouts.footer')


    <a class="scrollToTop" href="#"><i class="fa fa-angle-up"></i></a>

</div>
<!-- end wrapper -->


<!-- Footer Scripts -->
<!-- JS | Custom script for all pages -->
<script src="js/custom.js"></script>
<script>
    /* Set the width of the side navigation to 250px */
    function openNav() {
        var $window = $(window);
        var windowsize = $window.width();
        if (windowsize > 768) {

            document.getElementById("mySidenav").style.width = "500px";
        }else{

            document.getElementById("mySidenav").style.width = "300px";
        }
    }

    /* Set the width of the side navigation to 0 */
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    $(document).ready(function() {
        $("a[data-rel^='prettyPhoto']").prettyPhoto({
            hook: 'data-rel',
            animation_speed:'normal',
            theme:'light_square',
            slideshow:3000,
            autoplay_slideshow: false,
            social_tools: false
        });
    });
</script>
@yield('scripts')

</body>
</html>
