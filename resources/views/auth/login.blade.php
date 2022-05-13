@extends('customer.layout')
@section('user-content')
<section class="login-booking-area mt-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div class="login-booking">
                    <div class="container mb-5">
                        <div class="box-title text-center">
                            <h2>Đăng nhập</h2>
                            <h3 class="title">Đăng nhập</h3>
                        </div>
                    </div>
                    <div class="login-content">
                        <div id="tab-1" class="content-tab" style="display: block;">
                            <div class="login-form">
                                <form action="{{ url('dang-nhap-tai-khoan') }}" method="POST" accept-charset="utf-8">
                                    @csrf
                                    <div class="results">
                                        @if (Session::get('fail'))
                                        <div class="alert alert-danger">
                                            {{ Session::get('fail') }}
                                        </div>
                                        @elseif (Session::get('success'))
                                        <div class="alert alert-success">
                                            {{ Session::get('success') }}
                                        </div>
                                        @endif
                                    </div>
                                    <div class="form-email">
                                        <label for="">Email / Số điện thoại <span style="color: red">(*)</span></label>
                                        <input type="text" name="email_phone" id="email_phone" placeholder="Nhập Email hoặc Số điện thoại" />
                                        <span class="text-danger">@error('email_phone') {{ $message }} @enderror</span>
                                    </div>
                                    <div class="form-password">
                                        <label for="">Mật khẩu <span style="color: red">(*)</span></label>
                                        <input type="password" name="password" id="password" placeholder="************" />
                                        <span class="text-danger">@error('password') {{ $message }} @enderror</span>
                                    </div>

                                    <div class="clearfix"></div>
                                    <div class="btn-submit">
                                        <div class="row">
                                            <div class="col-md-12 center-form" style="display: flex; align-items: center; justify-content: center;">
                                                <button type="submit">
                                                    Đăng nhập
                                                </button>
                                            </div>
                                            <div class="col-md-12 center-form" style="display: flex; align-items: center; justify-content: center;">
                                                <a href="{{ url('dang-ky') }}" title="" style="color: #000">Chưa có tài khoản ?</a>
                                            </div>
                                            <div class="col-md-12 center-form" style="display: flex; align-items: center; justify-content: center;">
                                                <a href="{{ url('quen-mat-khau') }}" title="" style="color: #000">Quên mật khẩu ?</a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
</section>
@endsection
