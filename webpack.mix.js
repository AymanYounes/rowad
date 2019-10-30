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
//     .sass('resources/sass/app.scss', 'public/css');



mix.js([
    'public/js/jquery-2.2.0.min.js',
    'public/js/jquery-ui.min.js',
    'public/js/bootstrap.min.js',
    'public/js/jquery-plugin-collection.js',
    'public/js/revolution-slider/js/jquery.themepunch.tools.min.js',
    'public/js/revolution-slider/js/jquery.themepunch.revolution.min.js',
], 'public/build/js/build.js')
    ;
