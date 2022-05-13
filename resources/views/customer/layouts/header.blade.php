<div id="header" class="">
    <div class="container-fluid">
        <div class="row header-main">
            <div id="logo" class="col-lg-2 col-md-3 col-6 d-flex text-left">
                <a id="logo-img" href="#"><img src="{{ asset('public/images/logo.png') }}" alt="logo" title="thuexemiennam" style="width: 20vw" /></a>
            </div>
            <div class="top-header-right d-flex flex-wrap col-lg-10 col-md-9 col-6 align-items-center" style="justify-content: right !important">
                <ul id="menu" class="d-flex align-items-center list-unstyled mb-0">
                    <li class="item">
                        <a class="nav-link text-capitalize p-0" href="{{ url('/') }}">Trang chủ</a>
                    </li>

                    <li class="item">
                        <a class="nav-link text-capitalize p-0" href="{{ url('/gioi-thieu') }}">Giới thiệu</a>
                    </li>

                    <li class="item">
                        <a class="nav-link text-capitalize p-0" href="javascript:void(0)">Dịch vụ thuê xe</a>
                        <ul class="menu-dropdown position-absolute list-unstyled">
                            @foreach ($service as $key => $value)
                            <li>
                                <a href="{{ url('dich-vu-thue-xe/'.$value->slug) }}">
                                    {{ $value->name }}
                                </a>
                            </li>
                            @endforeach
                        </ul>
                    </li>

                    @if (Session::get('id') && Session::get('role') == 1)
                    <li class="item">
                        <a class="nav-link text-capitalize p-0" href="{{ url('/thong-tin-ca-nhan') }}">Hồ sơ cá nhân</a>
                        <ul class="menu-dropdown position-absolute list-unstyled">
                            <li><a href="{{ url('/thong-tin-ca-nhan') }}">Thông tin cá nhân</a></li>
                            <li><a href="{{ url('/lich-su-don-thue-xe') }}">Lịch sử đơn đặt thuê xe</a></li>
                            <li><a href="{{ url('/doi-mat-khau') }}">Đổi mật khẩu</a></li>
                        </ul>
                    </li>
                    <div class="login">
                        <a href="{{ url('dang-xuat') }}">Đăng xuất </a>
                    </div>
                    @else
                    <div class="login">
                        <a href="{{ url('dang-nhap') }}">Đăng nhập </a>/
                        <a href="{{ url('dang-ky') }}"> Đăng ký</a>
                    </div>
                    @endif
                </ul>
                <div class="close-menu d-none">
                    <img src="{{ asset('public/user/img/close_s.png') }}" alt="">
                </div>
                <div class="logo-res d-none">
                    <a href="index.html"><img src="{{ asset('public/user/img/logo.png') }}" alt=""></a>
                </div>
                <div class="hamburger-menu d-lg-none">
                    <span class="line-top"></span>
                    <span class="line-center"></span>
                    <span class="line-bottom"></span>
                </div>

                {{-- <div class="header-right d-flex mt-0 mt-lg-4 mt-xl-0">
                    <div class="login ml-40 d-none d-md-block">
                        <div class="btn outline-login">
                            <a href="#" class="text-capitalize">login/</a>
                            <a href="#" class="text-capitalize">register</a>
                        </div>
                    </div>
                    <div class="search ml-40">
                        <div class="active-search d-flex align-items-center">
                            <a href="#" class="search-show"><i class="fa fa-search"></i></a>
                        </div>
                        <form class="form-search d-flex align-items-center" method="get" action="#">
                            <button type="submit" id="submit"><i class="fa fa-search"></i></button>
                            <input class="action-text" type="text" name="s" placeholder="Type & Hit Enter...">
                            <a href="#" class="hide" title="Close"><img src="{{ asset('public/user/img/close_s.png') }}" alt=""></a>
                        </form>
                    </div>
                </div> --}}
            </div>
        </div>
    </div>
</div>
