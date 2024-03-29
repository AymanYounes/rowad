

<nav class="navbar header-navbar pcoded-header">
    <div class="navbar-wrapper">

        <div class="navbar-logo">
            <a class="mobile-menu" id="mobile-collapse" href="#!">
                <i class="feather icon-menu"></i>
            </a>
            <a href="{{url('/')}}">
                <img class="img-fluid" style="width: 140px;" src="{{asset('images\logo-wide.png')}}" alt="Rowad-Logo">
            </a>
            <a class="mobile-options">
                <i class="feather icon-more-horizontal"></i>
            </a>
        </div>

        <div class="navbar-container container-fluid">
            <ul class="nav-left">
                <li>
                    <a href="#!" onclick="javascript:toggleFullScreen()">
                        <i class="feather icon-maximize full-screen"></i>
                    </a>
                </li>
            </ul>
            <ul class="nav-right">
                <li class="user-profile header-notification">
                    <div class="dropdown-primary dropdown">
                        <div class="dropdown-toggle" data-toggle="dropdown">
                            <img src="{{asset('assets\images\avatar-4.jpg')}}" class="img-radius" alt="User-Profile-Image">
                            <span>{{ Auth::user()->name }}</span>
                            <i class="feather icon-chevron-down"></i>
                        </div>
                        <ul class="show-notification profile-notification dropdown-menu" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
{{--                            <li>--}}
{{--                                <a href="#!">--}}
{{--                                    <i class="feather icon-settings"></i> Settings--}}
{{--                                </a>--}}
{{--                            </li>--}}
{{--                            <li>--}}
{{--                                <a href="user-profile.htm">--}}
{{--                                    <i class="feather icon-user"></i> Profile--}}
{{--                                </a>--}}
{{--                            </li>--}}
{{--                            <li>--}}
{{--                                <a href="email-inbox.htm">--}}
{{--                                    <i class="feather icon-mail"></i> My Messages--}}
{{--                                </a>--}}
{{--                            </li>--}}
{{--                            <li>--}}
{{--                                <a href="auth-lock-screen.htm">--}}
{{--                                    <i class="feather icon-lock"></i> Lock Screen--}}
{{--                                </a>--}}
{{--                            </li>--}}
                            <li>

                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        <i class="feather icon-log-out"></i> {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                            </li>
                        </ul>

                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- Sidebar inner chat start-->
<div class="showChat_inner">
    <div class="media chat-inner-header">
        <a class="back_chatBox">
            <i class="feather icon-chevron-left"></i> Josephin Doe
        </a>
    </div>
    <div class="media chat-messages">
        <a class="media-left photo-table" href="#!">
            <img class="media-object img-radius img-radius m-t-5" src="{{asset('\assets\images\avatar-3.jpg')}}" alt="Generic placeholder image">
        </a>
        <div class="media-body chat-menu-content">
            <div class="">
                <p class="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                <p class="chat-time">8:20 a.m.</p>
            </div>
        </div>
    </div>
    <div class="media chat-messages">
        <div class="media-body chat-menu-reply">
            <div class="">
                <p class="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                <p class="chat-time">8:20 a.m.</p>
            </div>
        </div>
        <div class="media-right photo-table">
            <a href="#!">
                <img class="media-object img-radius img-radius m-t-5" src="{{asset('assets\images\avatar-4.jpg')}}" alt="Generic placeholder image">
            </a>
        </div>
    </div>
    <div class="chat-reply-box p-b-20">
        <div class="right-icon-control">
            <input type="text" class="form-control search-text" placeholder="Share Your Thoughts">
            <div class="form-icon">
                <i class="feather icon-navigation"></i>
            </div>
        </div>
    </div>
</div>
<!-- Sidebar inner chat end-->
