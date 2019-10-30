process.env.DISABLE_NOTIFIER = true;
var elixir = require('laravel-elixir'),
    gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    concatCss = require('gulp-concat-css'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    htmlmin = require('gulp-htmlmin'),
    cleanCSS = require('gulp-clean-css');

const babel = require('gulp-babel');

elixir(function (mix) {
    mix.styles([
            './public/css/jquery-ui.min.css',
            './public/css/bootstrap.min.css',
            './public/css/animate.css',
            './public/css/css-plugin-collections.css',
            './public/css/menuzord-skins/menuzord-boxed.css',
            './public/css/style-main.css',
            './public/css/preloader.css',
            './public/css/custom-bootstrap-margin-padding.css',
            './public/css/responsive.css',
            './public/js/revolution-slider/css/settings.css',
            './public/js/revolution-slider/css/layers.css',
            './public/js/revolution-slider/css/navigation.css',
            './public/css/colors/theme-skin-blue.css',
            './public/css/style.css',
        ], './public/css/gulp/homepage.css')
        // .styles([
        //     './resources/assets/css/jquery-ui.css',
        //     './public/css/bootstrap.css',
        //     './resources/assets/css/bootstrap-submenu.min.css',
        //     './resources/assets/css/animate.css',
        //     './resources/assets/css/font-awesome.css',
        //     './resources/assets/css/roboto.css',
        //     './public/css/homepage.css',
        //     './public/css/homepage-ar.css',
        //     './public/css/bootstrap-rtl.css'
        // ], './public/css/seperate/homepage-ar.css')

        .styles([
            './public/css/jquery-ui.min.css',
            './public/css/bootstrap.min.css',
            './public/css/animate.css',
            './public/css/css-plugin-collections.css',
            './public/css/menuzord-skins/menuzord-boxed.css',
            './public/css/style-main.css',
            './public/css/preloader.css',
            './public/css/custom-bootstrap-margin-padding.css',
            './public/css/responsive.css',
            './public/css/colors/theme-skin-blue.css',
            './public/css/style.css',
        ], './public/css/gulp/innerpages.css')


        // combining homepage js
        .combine([
            './public/js/jquery-2.2.0.min.js',
            './public/js/jquery-ui.min.js',
            './public/js/bootstrap.min.js',
            './public/js/jquery-plugin-collection.js',
            './resources/revolution-slider/js/jquery.themepunch.tools.min.js',
            './public/js/revolution-slider/js/jquery.themepunch.revolution.min.js',
        ], './public/js/gulp/homePage.min.js')



    // minify homePage js
    mix.scripts([
        './public/js/jquery-2.2.0.min.js',
        './public/js/jquery-ui.min.js',
        './public/js/bootstrap.min.js',
        './public/js/jquery-plugin-collection.js',
        './resources/revolution-slider/js/jquery.themepunch.tools.min.js',
        './public/js/revolution-slider/js/jquery.themepunch.revolution.min.js',
    ], './public/js/gulp/homePage.min.js')


        .version([
            'css/gulp/homepage.css',
            'css/gulp/innerpages.css',
            'js/gulp/homePage.min.js',
        ])

});
