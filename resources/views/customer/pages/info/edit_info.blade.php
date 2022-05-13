@extends('customer.layout')
@section('user-content')
<section class="login-booking-area mt-3">
    {{-- <user-register-component></user-register-component> --}}
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div class="login-booking">
                    <ul class="login-tab-list">
                        <li rel="tab-2" class="active">Thông tin cá nhân</li>
                    </ul>
                    <div class="login-content">
                        <div id="tab-2" class="content-tab" style="display: block;">
                            <div class="register-form">
                                <form action="{{ url('chinh-sua-thong-tin') }}" method="POST" accept-charset="utf-8">
                                    @csrf
                                    <div class="results">
                                        @if (Session::get('success'))
                                        <div class="alert alert-success">
                                            {{ Session::get('success') }}
                                        </div>
                                        @elseif (Session::get('fail'))
                                        <div class="alert alert-danger">
                                            {{ Session::get('fail') }}
                                        </div>
                                        @endif
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="firstname">
                                                Họ tên
                                            </label>
                                            <input type="text" name="full_name" value="{{ $user->full_name }}" />
                                            <span class="text-danger">@error('full_name') {{ $message }} @enderror</span>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="lastname">
                                                Số điện thoại
                                            </label>
                                            <input type="text" name="phone_number" value="{{ $user->phone_number }}" />
                                            <span class="text-danger">@error('phone_number') {{ $message }} @enderror</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="re-pass">
                                                Email
                                            </label>
                                            <input type="email" name="email" value="{{ $user->email }}" />
                                            <span class="text-danger">@error('email') {{ $message }} @enderror</span>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="re-pass">
                                                Địa chỉ
                                            </label>
                                            <textarea name="address" style="resize: none">{{ $user->address }}</textarea>
                                            <span class="text-danger">@error('address') {{ $message }} @enderror</span>
                                        </div>
                                    </div>
                                    <div class="btn-submit">
                                        <div class="row">
                                            <div class="col-md-12 center-form" style="display: flex; align-items: center; justify-content: center;">
                                                <button type="submit">
                                                    Chỉnh sửa
                                                </button>
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
