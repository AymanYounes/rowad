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


    Route::get('/products/{category_id}', 'ProductsController@getCategoryProducts')->name('ProductsByCategory');

    Route::get('/products', 'ProductsController@index')->name('productsPage');

    Route::get('/services', function () {
        return view('services');
    })->name('servicesPage');

    Route::get('/services-details', 'ServicesController@getServiceDetails')->name('servicesDetails');



    Route::get('/get-offer', function () {
        return view('getOffer');
    })->name('getOfferPage');





//    Route::match(['get', 'post'], 'laravel-send-contact-email', 'EmailsController@contact');
//    Route::get('contact-send-email', 'EmailsController@contact');


    Route::get('/contact-send-email', 'EmailsController@contact')->name('contactEmail');
    Route::get('/service-email', 'EmailsController@getServiceShort')->name('getServiceShort');
    Route::post('/offer-send-email', 'EmailsController@getService')->name('offerEmail');




    Route::get('/sitemap',function(){
        return response()->view('sitemap.sitemap')
            ->header('Content-Type', 'xml');
    });

    Route::get('/sitemap.xml',function(){
        return response()->view('sitemap.sitemap')
            ->header('Content-Type', 'xml');
    });
//========================================================================================================
//========================================= Dashboard ====================================================
//========================================================================================================


Route::group(['middleware' => 'auth'], function () {

    Route::get('/admin/', 'HomeController@admin')->name('homePage');
    Route::get('/admin/services', 'Dashboard\ServicesController@getService')->name('getServices');
    Route::get('/admin/services/update/{id}', ['uses' => 'Dashboard\ServicesController@getEdit', 'as' => 'getEditService']);
    Route::post('/admin/services/update/{id}', ['uses' => 'Dashboard\ServicesController@updateService', 'as' => 'updateService']);

//========================================= products ====================================================
    Route::get('/admin/products/show', ['uses' => 'Dashboard\ProductsController@show', 'as' => 'productsShow']);
    Route::get('/admin/products/add/', ['uses' => 'Dashboard\ProductsController@getAdd', 'as' => 'getAddProduct']);
    Route::post('/admin/products/add/', ['uses' => 'Dashboard\ProductsController@addProduct', 'as' => 'addProduct']);
    Route::get('/admin/products/update/{id}', ['uses' => 'Dashboard\ProductsController@getEdit', 'as' => 'getEditProduct']);
    Route::post('/admin/products/update/{id}', ['uses' => 'Dashboard\ProductsController@updateProduct', 'as' => 'updateProduct']);
    Route::delete('/admin/product/delete/{id}', ['uses' => 'Dashboard\ProductsController@destroy', 'as' => 'deleteProduct']);

//========================================= product Categories ====================================================
    Route::get('/admin/product-category/show', ['uses' => 'Dashboard\ProductCategoryController@show', 'as' => 'ProductCategoryShow']);
    Route::get('/admin/product-category/add/', ['uses' => 'Dashboard\ProductCategoryController@getAdd', 'as' => 'getAddProductCategory']);
    Route::post('/admin/product-category/add/', ['uses' => 'Dashboard\ProductCategoryController@addCategory', 'as' => 'addProductCategory']);
    Route::get('/admin/product-category/update/{id}', ['uses' => 'Dashboard\ProductCategoryController@getEdit', 'as' => 'getEditProductCategory']);
    Route::post('/admin/product-category/update/{id}', ['uses' => 'Dashboard\ProductCategoryController@updateCategory', 'as' => 'updateProductCategory']);
    Route::delete('/admin/product-category/delete/{id}', ['uses' => 'Dashboard\ProductCategoryController@destroy', 'as' => 'deleteProductCategory']);





});






});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
