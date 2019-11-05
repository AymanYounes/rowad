@extends('dashboard.layouts.app')
@section('title', 'Home Page')
@section('sidebar')
    @parent

@endsection

@section('styles')

    <link href="https://cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/buttons/1.5.6/css/buttons.dataTables.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap4.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/buttons/1.5.6/css/buttons.bootstrap4.min.css" rel="stylesheet" >
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
                                    <h4>Product Categories</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="page-header-breadcrumb">
                                <ul class="breadcrumb-title">
                                    <li class="breadcrumb-item">
                                        <a href="{{url('/')}}"> <i class="feather icon-home"></i> </a>
                                    </li>
{{--                                    <li class="breadcrumb-item"><a href="{{url('/product_category/show')}}">Product Categories</a>--}}
{{--                                    </li>--}}
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
                                    <h4 class="sub-title">Product Categories</h4>

                                    @if(count($categories)>0)
                                        <table id="example" class="display nowrap mb-0 table table-bordered table-striped" style="width:100%">
                                            <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name_en</th>
                                                <th>Name_ar</th>
                                                <th>created at </th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            @foreach($categories as $category )
                                                <tr>
                                                    <td>{{$category->id}}</td>
                                                    <td>{{$category->name_en}}</td>
                                                    <td>{{$category->name_ar}}</td>
                                                    <td>{{$category->created_at}}</td>
                                                    <td><a href="{{route('getEditProductCategory',[$category->id])}}" class="btn btn-primary">Edit</a></td>
                                                    <td>
                                                        <form method="post" action="{{route('deleteProductCategory',[$category->id])}}">@csrf @method('delete')
                                                            <button type="submit" class="btn btn-danger" onclick="if (!confirm('Are you sure?')) { return false }">Delete</button>
                                                        </form>
                                                    </td>

                                                </tr>
                                            @endforeach
                                            </tbody>
                                            <tfoot>
                                            <tr>
                                                <th>#</th>
                                                <th>Name_en</th>
                                                <th>Name_ar</th>
                                                <th>created at </th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                            </tfoot>
                                        </table>
                                    @else
                                        <p class="text-center font-weight-bold">no Categories Found</p>
                                    @endif
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

@section('scripts')


    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap4.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/1.5.6/js/dataTables.buttons.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.bootstrap4.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.html5.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.print.min.js"></script>
    <script type="text/javascript" language="javascript" src="https://cdn.datatables.net/buttons/1.5.6/js/buttons.colVis.min.js"></script>
@endsection
