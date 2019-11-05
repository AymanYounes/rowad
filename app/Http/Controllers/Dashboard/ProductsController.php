<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\ProductCategory;
use App\Models\Products;
use App\Models\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }



    public function show()
    {
        $services = Services::all();
        $products = Products::all();

        return view('dashboard.products.show', compact('services','products'));
    }



    public function getAdd()
    {
        $services = Services::all();
        $categories = ProductCategory::all();

        return view('dashboard.products.add', compact('services','categories'));
    }

    public function addProduct(Request $request)
    {
//dd($request->all());
        $this->validate($request,[
           'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ]);


        $thumbnail = $request->file('thumbnail');
        $new_name = time().'.'.$thumbnail->getClientOriginalExtension();
        $thumbnail->move(public_path('images/products/'),$new_name);


        $product = new Products();


        $product->image =$new_name;
        $product->category_id =$request->category;
        $product->title_en =$request->title_en;
        $product->title_ar =$request->title_ar;
        $product->description_en =$request->description_en;
        $product->description_ar =$request->description_ar;
//        dd($product);
        $product->save();

        $services = Services::all();

        return redirect()->route('productsShow')->with('success', 'product has been added successfully');
    }
    public function getEdit($id)
    {
        $services = Services::all();
        $product = Products::find($id);
        $categories = ProductCategory::all();

        return view('dashboard.products.edit', compact('services','product','categories'));
    }

    public function updateProduct(Request $request,$id)
    {


        $product = Products::find($id);
if($request->hasFile('thumbnail')){


        $this->validate($request,[
            'thumbnail' => 'required|image|mimes:jpeg,png,jpg,gif,webp|max:2048'
        ]);

        $thumbnail = $request->file('thumbnail');
        $new_name = time().'.'.$thumbnail->getClientOriginalExtension();
        $thumbnail->move(public_path('images/products/'),$new_name);

            $product->image =$new_name;
    }



        $product->category_id =$request->category;
        $product->title_en =$request->title_en;
        $product->title_ar =$request->title_ar;
        $product->description_en =$request->description_en;
        $product->description_ar =$request->description_ar;
        $product->save();

        return redirect()->route('productsShow')->with('success', 'product has been updated successfully');
    }



    public function destroy($id)
    {

        $product = Products::findOrFail($id);
        $product->delete();

        return redirect()->route('productsShow')->with('success', 'product has been deleted successfully');
    }
}
