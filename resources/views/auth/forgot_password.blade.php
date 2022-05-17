@extends('customer.layout')
@section('user-content')
<section class="login-booking-area mt-3">
    {{-- <user-register-component></user-register-component> --}}
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div class="login-booking">
                    <div class="container mb-5 mt-5">
                        <div class="box-title text-center">
                            <h3 class="title">Quên mật khẩu</h3>
                        </div>
                    </div>
                    <div class="login-content">
                        <div id="tab-2" class="content-tab" style="display: block;">
                            <div class="register-form">
                                <form action="{{ url('quen-mat-khau-tai-khoan') }}" method="POST" accept-charset="utf-8">
                                    @csrf
                                    <div class="results">

                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="firstname">
                                                Email / Số điện thoại <span style="color: red">(*)</span>
                                            </label>
                                            <input type="text" name="email_phone" id="email_phone"
                                                placeholder="Nhập Email hoặc Số điện thoại để xác nhận tài khoản" value="{{old('email_phone')}}" />
                                            <span class="text-danger">@error('email_phone') {{ $message }} @enderror</span>
                                            @if (Session::get('fail'))
                                            <span class="text-danger">{{ Session::get('fail') }}</span>
                                            @endif
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
