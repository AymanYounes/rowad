@extends('dashboard.layouts.app')
@section('title', 'Home Page')
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
                                    <h4>{{$service->title_en}}</h4>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="page-header-breadcrumb">
                                <ul class="breadcrumb-title">
                                    <li class="breadcrumb-item">
                                        <a href="{{url('/')}}"> <i class="feather icon-home"></i> </a>
                                    </li>
                                    <li class="breadcrumb-item"><a href="{{url('/services')}}">Services</a>
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
                                    <h4 class="sub-title">Service Update</h4>
                                    <form method="post" action="{{route('updateService',$service->id)}}">
                                        @csrf
{{--                                        <div class="form-group row">--}}
{{--                                            <label class="col-sm-2 col-form-label" for="thumbnail">Thumbnail</label>--}}
{{--                                            <div class="col-sm-10">--}}
{{--                                                <input type="file" name="thumbnail" id="thumbnail" class="form-control">--}}
{{--                                            </div>--}}
{{--                                        </div>--}}
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label" for="title_en">Title En</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="title_en" id="title_en" class="form-control" value="{{($service->title_en)?$service->title_en:''}}">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label" for="title_ar">Title Ar</label>
                                            <div class="col-sm-10">
                                                <input type="text" name="title_ar" id="title_ar" class="form-control" value="{{($service->title_ar)?$service->title_ar:''}}">
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label" for="content_en">Content En</label>
                                            <div class="col-sm-10">
                                                 <textarea class="form-control" name="content_en" id="content_en"> {{($service->content_en)?$service->content_en:''}}</textarea>
                                             </div>
                                        </div>

                                        <div class="form-group row">
                                            <label class="col-sm-2 col-form-label" for="content_ar">Content Ar</label>
                                            <div class="col-sm-10">
                                                 <textarea class="form-control" name="content_ar" id="content_ar"> {{($service->content_ar)?$service->content_ar:''}}</textarea>
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

@section('scripts')

<script src="https://cdn.ckeditor.com/4.13.0/full/ckeditor.js"></script>

<script>
    CKEDITOR.replace( 'content_en' );
    CKEDITOR.replace( 'content_ar' );
</script>
@endsection
