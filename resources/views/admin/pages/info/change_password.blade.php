@extends('admin.layout')
@section('admin-content')
<div id="main">
    <header class="mb-3">
        <a href="#" class="burger-btn d-block d-xl-none">
            <i class="bi bi-justify fs-3"></i>
        </a>
    </header>

    <div class="page-heading">
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>{{ $meta_title }}</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="{{ url('/admin') }}">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{ $meta_title }}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <section id="multiple-column-form">
            <div class="row match-height">
                <div class="col-12">
                    <div class="card">
                        {{-- <div class="card-header">
                            <h4 class="card-title">Thông tin cá nhân</h4>
                        </div> --}}
                        <div class="card-content">
                            <div class="card-body">
                                <form action="{{ url('doi-mat-khau-tai-khoan') }}" method="POST" class="form">
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
                                        <div class="col-md-12 col-12">
                                            <div class="form-group">
                                                <label for="current_password">Mật khẩu hiện tại</label>
                                                <input type="password" id="current_password" class="form-control" name="current_password"
                                                    placeholder="********">
                                                <span class="text-danger">@error('current_password') {{ $message }} @enderror</span>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-12">
                                            <div class="form-group">
                                                <label for="new_password">Mật khẩu mới</label>
                                                <input type="password" id="new_password" class="form-control" name="new_password"
                                                    placeholder="********">
                                                <span class="text-danger">@error('new_password') {{ $message }} @enderror</span>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-12">
                                            <div class="form-group">
                                                <label for="repeat_password">Nhập lại mật khẩu</label>
                                                <input type="password" id="repeat_password" class="form-control" name="repeat_password"
                                                    placeholder="********">
                                                <span class="text-danger">@error('repeat_password') {{ $message }} @enderror</span>
                                            </div>
                                        </div>
                                        <div class="col-12 d-flex justify-content-end">
                                            <button type="submit" class="btn btn-primary me-1 mb-1">Thay đổi</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    @include('admin.layouts.footer')
</div>
@endsection
