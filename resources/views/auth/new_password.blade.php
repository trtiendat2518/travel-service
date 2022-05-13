@extends('customer.layout')
@section('user-content')
<section class="login-booking-area mt-3">
    {{-- <user-register-component></user-register-component> --}}
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div class="login-booking">
                    <div class="container mb-5 mt-3">
                        <div class="box-title text-center">
                            <h2>Tạo mới mật khẩu</h2>
                            <h3 class="title">Tạo mới mật khẩu</h3>
                        </div>
                    </div>
                    <div class="login-content">
                        <div id="tab-2" class="content-tab" style="display: block;">
                            <div class="register-form">
                                <form action="{{ url('tao-moi-mat-khau-tai-khoan') }}" method="POST" accept-charset="utf-8">
                                    @csrf
                                    <div class="results">
                                        @if (Session::get('fail'))
                                        <div class="alert alert-danger">
                                            {{ Session::get('fail') }}
                                        </div>
                                        @endif
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="firstname">
                                                Mật khẩu mới <span style="color: red">(*)</span>
                                            </label>
                                            <input type="password" name="password" id="password" placeholder="************" />
                                            <span class="text-danger">@error('password') {{ $message }} @enderror</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="firstname">
                                                Nhập lại mật khẩu <span style="color: red">(*)</span>
                                            </label>
                                            <input type="password" name="repeat_password" id="repeat_password" placeholder="************" />
                                            <span class="text-danger">@error('repeat_password') {{ $message }} @enderror</span>
                                        </div>
                                    </div>
                                    <div class="btn-submit">
                                        <div class="row">
                                            <div class="col-md-12 center-form" style="display: flex; align-items: center; justify-content: center;">
                                                <button type="submit">
                                                    Tiếp tục
                                                </button>
                                            </div>
                                            <div class="col-md-12 center-form" style="display: flex; align-items: center; justify-content: center;">
                                                <a href="{{ url('dang-nhap') }}" title="" style="color: #000">
                                                    Đã có tài khoản ?
                                                </a>
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
