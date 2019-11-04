<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::group(['middleware' => 'language'], function () {


    Route::get('/', 'HomeController@index')->name('homePage');
    Route::get('lang/{locale}', 'LanguageController@lang')->name('lang');


    Route::get('/about', function () {
        return view('about');
    })->name('aboutPage');

    Route::get('/contact', function () {
        return view('contact');
    })->name('contactPage');

    Route::get('/gallery', function () {
        return view('gallery');
    })->name('galleryPage');

    Route::get('/blog', function () {
        return view('blog');
    })->name('blogPage');

    Route::get('/blog-single', function () {
        return view('blog-single');
    })->name('blogSinglePage');

    Route::get('/products', function () {
        return view('products');
    })->name('productsPage');

    Route::get('/services', function () {
        return view('services');
    })->name('servicesPage');

    Route::get('/services-details', 'ServicesController@getServiceDetails')->name('servicesDetails');



//    Route::get('/service-single', function () {
//        return view('service-single');
//    })->name('serviceSinglePage');

    Route::get('/get-offer', function () {
        return view('getOffer');
    })->name('getOfferPage');





    Route::match(['get', 'post'], 'laravel-send-contact-email', 'EmailsController@contact');
});
