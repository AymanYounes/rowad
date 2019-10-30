@extends('layouts.app')
@section('title', 'Contact rowad')
@section('sidebar')
    @parent

@endsection

@section('content')

    <!-- Section: offer -->
    <section id="offer" class="divider parallax" data-bg-img="images/offer-page-bg.webp">


        <div class="mt-50 mt-xs-0">

            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-sm-12 col-xs-12">
                        <h2 class="get-offer-head text-center font-tajawal font-bold">GET OFFER PRICE NOW!</h2>
                        <p  class="get-offer-p text-center font-tajawal">Please fill out the following form to get a service<br>
                            Thank you for choosing <span class="theme-color font-bold">ROWAD ALTAMAYOZ</span> .</p>
                        <div class="get-offer-form">
                            <form>

                                <div class="row">
                                    <div class="col-sm-4 col-xs-6">
                                        <div class="form-group">

                                            <label for="f-name" class="font-tajawal font-medium">First Name</label>
                                            <input type="text" name="f-name" class="form-control get-offer-input" id="f-name" required>
                                        </div>
                                    </div>
                                    <div class="col-sm-4 col-xs-6">
                                        <div class="form-group">

                                            <label for="l-name" class="font-tajawal font-medium">Last Name</label>
                                            <input type="text" name="l-name" class="form-control get-offer-input" id="l-name" required>
                                        </div>
                                    </div>
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="form-group">

                                            <label for="phone" class="font-tajawal font-medium">Phone number</label>
                                            <input type="text" name="phone" class="form-control get-offer-input" id="phone" required>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="form-group">

                                            <label for="region" class="font-tajawal font-medium">Region</label>
                                            <select name="region" id="region" class="form-control get-offer-input minimal" required>
                                                <option> Reyadh </option>
                                                <option> El-Qassim </option>
                                                <option> Jaddah </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <label for="email" class="font-tajawal font-medium">Email</label>
                                            <input type="email" name="email" class="form-control get-offer-input" id="email" required>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">

                                            <label for="service" class="font-tajawal font-medium">Choose Service</label>
                                            <select name="service" id="service" class="form-control get-offer-input minimal" required>
                                                <option> service-1 </option>
                                                <option> service-2 </option>
                                                <option> service-3 </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-sm-4">
                                        <div class="form-group">

                                            <label for="type" class="font-tajawal font-medium">Pool Type</label>
                                            <select name="type" id="type" class="form-control get-offer-input minimal" required>
                                                <option> Type-1 </option>
                                                <option> Type-2 </option>
                                                <option> Type-3 </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-sm-2 col-sm-offset-2 col-xs-4">
                                        <div class="form-group mt-10">
                                            <label for="length" class="font-tajawal font-medium font-18">Length</label>
                                            <input type="number" name="length" class="form-control get-offer-input" id="length" required>
                                        </div>
                                    </div>
                                    <div class="col-sm-2  col-xs-4">
                                        <div class="form-group mt-10">
                                            <label for="width" class="font-tajawal font-medium font-18">Width</label>
                                            <input type="number" name="width" class="form-control get-offer-input" id="width" required>
                                        </div>
                                    </div>
                                    <div class="col-sm-2 col-xs-4">
                                        <div class="form-group mt-10">
                                            <label for="height" class="font-tajawal font-medium font-18">Height</label>
                                            <input type="number" name="height" class="form-control get-offer-input" id="height" required>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-6 col-sm-offset-3 mt-10 col-xs-offset-1">
                                        <span class="text-white font-tajawal font-medium ml-10 attach-file">Attach File or Upload a Photo</span>
                                        <div class="form-group">
                                            <span id="filename">Select your file</span>
                                            <label for="photo" class="font-tajawal font-medium font-18">Upload
                                                <input type="file" name="photo" id="photo" class="form-control get-offer-input">
                                            </label>
                                        </div>
                                    </div>
                                </div>


                                <div class="row p-10">
                                    <label for="notes">Notes</label>
                                    <textarea class="form-control get-offer-input p-15" placeholder="your message here" rows="10" id="notes" name="notes"></textarea>
                                </div>


                            </form>
                        </div>

                    </div>
                </div>

            </div>

            <div class="col-md-4 col-md-offset-8 hidden-xs hidden-sm " style="">
                <img src="images/offer-side-img.png" alt="" style="position: absolute; bottom: 0">

            </div>


        </div>
    </section>

@endsection


@section('scripts')
    <script>
        $('#photo').change(function() {
            var filepath = this.value;
            var m = filepath.match(/([^\/\\]+)$/);
            var filename = m[1];
            $('#filename').html(filename);

        });
    </script>
    @endsection
