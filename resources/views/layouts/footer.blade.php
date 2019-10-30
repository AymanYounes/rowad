
<!-- Footer -->
<footer id="footer" class="footer pb-0 ">
    <div class="container pb-20">
        <div class="row multi-row-clearfix">
            <div class="col-sm-6 col-xs-6 col-md-2">
                <div class="widget dark">
                    <h5 class="widget-title font-tajawal font-medium font-22 theme-second-color">{{trans('homePage.category')}}</h5>

                    <div class="footer-li">
                        <ul class="list list-border">
                            <li class="clearfix">
                                <a href="{{url('/')}}">
                    <span class=" font-tajawal font-medium font-18 text-white text-uppercase">
                      <i class="fa {{(app()->getLocale() == 'en')?'fa-caret-right':'fa-caret-left'}} theme-second-color"></i> {{trans('nav.home')}}
                    </span>
                                </a>
                            </li>
                            <li class="clearfix">
                                <a href="{{url('/about')}}">
                    <span class=" font-tajawal font-medium font-18 text-white text-uppercase">
                      <i class="fa {{(app()->getLocale() == 'en')?'fa-caret-right':'fa-caret-left'}} theme-second-color"></i> {{trans('nav.about')}}
                    </span>
                                </a>
                            </li>
                            <li class="clearfix">
                                <a href="{{url('/services')}}">
                    <span class=" font-tajawal font-medium font-18 text-white text-uppercase">
                      <i class="fa {{(app()->getLocale() == 'en')?'fa-caret-right':'fa-caret-left'}} theme-second-color"></i> {{trans('nav.services')}}
                    </span>
                                </a>
                            </li>
                            <li class="clearfix">
                                <a href="{{url('/products')}}">
                    <span class=" font-tajawal font-medium font-18 text-white text-uppercase">
                      <i class="fa fa-caret-right theme-second-color"></i> {{trans('nav.products')}}
                    </span>
                                </a>
                            </li>
                            <li class="clearfix">
                                <a href="{{url('/catalog')}}">
                    <span class=" font-tajawal font-medium font-18 text-white text-uppercase">
                      <i class="fa {{(app()->getLocale() == 'en')?'fa-caret-right':'fa-caret-left'}} theme-second-color"></i> {{trans('nav.catalog')}}
                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xs-6 col-md-2">
                <div class="widget dark">
                    <h5 class="widget-title font-tajawal font-medium font-22 theme-second-color">{{trans('homePage.quickLinks')}}</h5>

                    <div class="footer-li">
                        <ul class="list list-border">
                            <li class="clearfix">
                                <a href="{{url('/get-offer')}}">
                    <span class=" font-tajawal font-medium font-18 text-white text-uppercase">
                      <i class="fa {{(app()->getLocale() == 'en')?'fa-caret-right':'fa-caret-left'}} theme-second-color"></i> {{trans('homePage.offerBtn')}}
                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xs-12 col-md-5">
                <h5 class="widget-title font-tajawal font-bold font-26 theme-color text-uppercase text-center">
                    <span class="text-white font-medium">{{trans('homePage.keepIn')}} </span>{{trans('homePage.touch')}}
                </h5>

                <div class="widget dark">
                    <div class="widget-subscribe mt-20">
                        <h5 class="subscribe-title font-13 text-white font-tajawal text-center font-medium">
                            {{trans('homePage.newsLetterSlogan1')}} <br> {{trans('homePage.newsLetterSlogan2')}}
                        </h5>
                        <form id="mailchimp-subscription-form" class="newsletter-form mt-10">
                            <div class="input-group">
                                <input type="email" id="mce-EMAIL" data-height="54px" class="form-control input-sm" placeholder="{{trans('homePage.emailHere')}}" name="EMAIL" value="">
                                <span class="input-group-btn">
                    <button type="submit" class="btn btn-colored btn-theme-colored btn-xs m-0 font-tajawal font-medium text-uppercase font-20 theme-second-color" data-height="54px">{{trans('homePage.subscribeBtn')}}</button>
                  </span>
                            </div>
                        </form>

                        <!-- Mailchimp Subscription Form Validation-->
                        <script type="text/javascript">
                            $('#mailchimp-subscription-form').ajaxChimp({
                                callback: mailChimpCallBack,
                                url: '//thememascot.us9.list-manage.com/subscribe/post?u=a01f440178e35febc8cf4e51f&amp;id=49d6d30e1e'
                            });

                            function mailChimpCallBack(resp) {
                                // Hide any previous response text
                                var $mailchimpform = $('#mailchimp-subscription-form'),
                                    $response = '';
                                $mailchimpform.children(".alert").remove();
                                console.log(resp);
                                if (resp.result === 'success') {
                                    $response = '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
                                } else if (resp.result === 'error') {
                                    $response = '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>' + resp.msg + '</div>';
                                }
                                $mailchimpform.prepend($response);
                            }
                        </script>

                    </div>
                </div>
            </div>
            <div class="col-sm-6 col-xs-12 col-md-3">
                <div class="widget dark">
                    <h5 class="widget-title font-tajawal font-medium font-22 theme-second-color text-center">{{trans('homePage.contactBtn')}}</h5>

                    <div class="footer-contact-wrapper text-center text-white">
                        <div class="row">

                            <div class="col-sm-6 col-xs-6 col-md-5 contact-sec" dir="ltr">
                                <i class="fa fa-phone font-32" ></i>
                                <p class="font-tajawal">
                                    <a href="tel:+9660559197115" class="text-white font-16">+9660559197115</a></br>
                                    <a href="tel:+966920007397" class="text-white font-16">+966920007397</a>
                                </p>
                            </div>
                            <div class="col-sm-6 col-xs-6 col-md-7 contact-sec">
                                <i class="fa fa-map-marker font-32"></i>
                                <p class="font-tajawal font-16">Saudi Arabia, Riyadh</br>Eastern and Western Region</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-nav bg-black p-20">
        <div class="container">
            <div class="row text-left">

                <div class="col-md-12">
                    <p class="text-white m-0 font-tajawal text-uppercase font-medium font-16"> &copy; 2019 {{trans('homePage.designedBy')}} <a href="https://akwanmedia.com" class="theme-second-color"> Akwan Media</a>. {{trans('homePage.rightsReserved')}}</p>
                </div>
            </div>

        </div>
    </div>
</footer>
