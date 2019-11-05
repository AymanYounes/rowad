@extends('dashboard.layouts.app')
@section('title', 'Add new product category')
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
                                        <h4>Add new</h4>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4">
                                <div class="page-header-breadcrumb">
                                    <ul class="breadcrumb-title">
                                        <li class="breadcrumb-item">
                                            <a href="{{url('/')}}"> <i class="feather icon-home"></i> </a>
                                        </li>
                                        <li class="breadcrumb-item"><a href="{{url('/product-category/show')}}">Product Categories</a>
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
                                        <form method="post" action="{{route('getAddProductCategory')}}">
                                            @csrf
                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label" for="name_en">Name En</label>
                                                <div class="col-sm-10">
                                                    <input type="text" name="name_en" id="name_en" class="form-control">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-sm-2 col-form-label" for="name_ar">Name Ar</label>
                                                <div class="col-sm-10">
                                                    <input type="text" name="name_ar" id="name_ar" class="form-control">
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


