@extends('user.layout')
@section('user-content')
<section class="login-booking-area mt-3">
    {{-- <user-register-component></user-register-component> --}}
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div class="login-booking">
                    <ul class="login-tab-list">
                        <li rel="tab-2" class="active">Đăng ký</li>
                    </ul>
                    <div class="login-content">
                        <div id="tab-2" class="content-tab" style="display: block;">
                            <div class="register-form">
                                <form action="{{ url('dang-ky-tai-khoan') }}" method="POST" accept-charset="utf-8">
                                    @csrf
                                    <div class="results">
                                        @if (Session::get('fail'))
                                        <div class="alert alert-danger">
                                            {{ Session::get('fail') }}
                                        </div>
                                        @endif
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="firstname">
                                                Họ tên <span style="color: red">(*)</span>
                                            </label>
                                            <input type="text" name="full_name" id="full_name" placeholder="Họ và tên" value="{{old('full_name')}}" />
                                            <span class="text-danger">@error('full_name') {{ $message }} @enderror</span>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="lastname">
                                                Số điện thoại <span style="color: red">(*)</span>
                                            </label>
                                            <input type="number" min="0" name="phone_number" id="phone_number" placeholder="123456789"
                                                value="{{old('phone_number')}}" />
                                            <span class="text-danger">@error('phone_number') {{ $message }} @enderror</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="pass">Mật khẩu <span style="color: red">(*)</span></label>
                                            <input type="password" name="password" id="password" placeholder="************" />
                                            <span class="text-danger">@error('password') {{ $message }} @enderror</span>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="re-pass">
                                                Nhập lại mật khẩu <span style="color: red">(*)</span>
                                            </label>
                                            <input type="password" name="repeat_password" id="repeat_password" placeholder="************" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="re-pass">
                                                Email <span style="color: red">(*)</span>
                                            </label>
                                            <input type="email" name="email" id="email" placeholder="Địa chỉ email" value="{{old('email')}}" />
                                            <span class="text-danger">@error('email') {{ $message }} @enderror</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="re-pass">
                                                Địa chỉ <span style="color: red">(*)</span>
                                            </label>
                                            <textarea name="address" id="address" placeholder="..." style="resize: none"
                                                value="{{old('address')}}"></textarea>
                                            <span class="text-danger">@error('address') {{ $message }} @enderror</span>
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
                                            <div class="col-md-12 center-form" style="display: flex; align-items: center; justify-content: center;">
                                                <a href="#" title="" style="color: #000">
                                                    Quên mật khẩu ?
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
