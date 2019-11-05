<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\ProductCategory;
use App\Models\Products;
use App\Models\Services;
use Illuminate\Http\Request;

class ProductCategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function show()
    {
        $services = Services::all();
        $categories = ProductCategory::all();

        return view('dashboard.product_category.show', compact('services','categories'));
    }



    public function getAdd()
    {
        $services = Services::all();

        return view('dashboard.product_category.add', compact('services'));
    }

    public function addCategory(Request $request)
    {
        $category = new ProductCategory();

        $category->name_en =$request->name_en;
        $category->name_ar =$request->name_ar;
        $category->save();


        $services = Services::all();

        return redirect()->route('ProductCategoryShow');
    }

    public function getEdit($id)
    {
        $services = Services::all();
        $category = ProductCategory::find($id);

        return view('dashboard.product_category.edit', compact('services','category'));
    }


    public function updateCategory(Request $request,$id)
    {
        $category = ProductCategory::find($id);

        $category->name_en =$request->name_en;
        $category->name_ar =$request->name_ar;
        $category->save();

        return redirect()->route('ProductCategoryShow');

    }

    public function destroy($id)
    {

        $category = ProductCategory::findOrFail($id);
        $category->delete();

        return redirect()->route('ProductCategoryShow');
    }
}
