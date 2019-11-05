<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use App\Models\ProductCategory;
use App\Models\Products;
use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class ProductsController extends Controller
{
    //
    public function index(Request $request)
    {
        $category_id = 0 ;
        if($request->category_id){
            $products = Products::where('category_id',$request->category_id)->get();
            $category_id = $request->category_id;
        }else{
            $products = Products::all();
        }
        $categories = ProductCategory::all();
        return view('products',compact('products','categories','category_id'));
    }

    public function getCategoryProducts($category_id)
    {
        $categories = ProductCategory::all();
        $products = Products::where('category_id',$category_id)->get();
        return view('products',compact('products','categories','category_id'));
    }



}
