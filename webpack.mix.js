const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

// mix.js('resources/js/app.js', 'public/js')
//    .sass('resources/sass/app.scss', 'public/css');

mix.styles([
    'public/css/bootstrap.min.css',
    'public/css/jquery-ui.min.css',
    'public/css/animate.css',
    'public/css/css-plugin-collections.css',
    'public/css/menuzord-skins/menuzord-boxed.css',
    'public/css/revolution-slider/css/settings.css',
    'public/css/revolution-slider/css/layers.css',
    'public/css/revolution-slider/css/navigation.css',
], 'public/css/plugins.css');


mix.styles([
    'public/css/style-main.css',
    'public/css/preloader.css',
    'public/css/custom-bootstrap-margin-padding.css',
    'public/css/responsive.css',
    'public/css/colors/theme-skin-blue.css',
    'public/css/style.css',
], 'public/css/styles.css');


mix.styles([
    'public/css/plugins.css',
    'public/css/styles.css',
], 'public/css/build.css');

mix.styles([
    'public/css/bootstrap.min.css',
    'public/css/bootstrap-rtl.min.css',
    'public/css/jquery-ui.min.css',
    'public/css/animate.css',
    'public/css/css-plugin-collections.css',
    'public/css/menuzord-skins/menuzord-boxed.css',
    'public/css/style-main.css',
    'public/css/style-main-rtl.css',
    'public/css/style-main-rtl-extra.css',
    'public/css/preloader.css',
    'public/css/custom-bootstrap-margin-padding.css',
    'public/css/responsive.css',
    'public/css/revolution-slider/css/settings.css',
    'public/css/revolution-slider/css/layers.css',
    'public/css/revolution-slider/css/navigation.css',
    'public/css/colors/theme-skin-blue.css',
    'public/css/style.css',
    'public/css/style-ar.css',
], 'public/css/build-ar.css');
