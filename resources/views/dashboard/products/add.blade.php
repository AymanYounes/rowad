@extends('dashboard.layouts.app')
@section('title', 'Add new product')
@section('sidebar')
    @parent

@endsection

@section('content')

    <div class="pcoded-content">
        <div class="pcoded-inner-content">
            <!-- Main-body start -->
            <div class="main-body">
                <div class="page-wrapper">
                    <!-- Page-header start -->
                    <div class="page-header">
                        <div class="row align-items-end">
                            <div class="col-lg-8">

                                <div class="page-header-title">
                                    <div class="d-inline">
                                        <h4>Add new Product</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="page-header-breadcrumb">
                                    <ul class="breadcrumb-title">
                                        <li class="breadcrumb-item">
                                            <a href="{{url('/')}}"> <i class="feather icon-home"></i> </a>
                                        </li>
                                        <li class="breadcrumb-item"><a href="{{url('/products/show')}}">Products</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Page-header end -->

                    <!-- Page body start -->
                    <div class="page-body">
                        <div class="row">
                            <div class="col-sm-12">
                                <!-- Basic Form Inputs card start -->
                                <div class="card">
                                    <div class="card-block">
                                        <h4 class="sub-title">Product Update</h4>
                                        <form method="post" action="{{route('getAddProduct')}}" enctype="multipart/form-data">
                                            @csrf

                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label" for="category">Category</label>
                                                <div class="col-sm-10">
                                                    <select name="category" id="category" class="form-control" required>
                                                        @foreach($categories as $category)
                                                            <option value="{{$category->id}}">{{$category->name_en}}</option>
                                                        @endforeach
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label" for="thumbnail">Thumbnail</label>
                                                <div class="col-sm-10">
                                                    <input type="file" name="thumbnail" id="thumbnail" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label" for="title_en">Title En</label>
                                                <div class="col-sm-10">
                                                    <input type="text" name="title_en" id="title_en" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label" for="title_ar">Title Ar</label>
                                                <div class="col-sm-10">
                                                    <input type="text" name="title_ar" id="title_ar" class="form-control" required>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label" for="description_en">description En</label>
                                                <div class="col-sm-10">
                                                    <input type="text" name="description_en" id="description_en" class="form-control">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label" for="description_ar">description Ar</label>
                                                <div class="col-sm-10">
                                                    <input type="text" name="description_ar" id="description_ar" class="form-control">
                                                </div>
                                            </div>

                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label" ></label>
                                                <div class="col-sm-10">
                                                    <input type="submit" class="form-control btn btn-inverse" value="Update">
                                                </div>

                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <!-- Page body end -->
                </div>
            </div>

        </div>
    </div>

@endsection


