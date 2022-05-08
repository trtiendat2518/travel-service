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
                        <div class="card-header">
                            <h4 class="card-title">Thông tin cá nhân</h4>
                        </div>
                        <div class="card-content">
                            <div class="card-body">
                                <form action="{{ url('xac-thuc-tai-khoan') }}" method="POST" class="form">
                                    @csrf
                                    <div class="results">
                                        @if (Session::get('verify'))
                                        <div class="alert alert-warning">
                                            {{ Session::get('verify') }}
                                        </div>
                                        @endif
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12 col-12">
                                            <div class="form-group">
                                                <label for="verify">
                                                    Mã xác thực <span style="color: red">(*)</span>
                                                </label>
                                                <input type="text" id="verify" class="form-control" name="verify" placeholder="Mã xác thực">
                                                <span class="text-danger">@error('verify') {{ $message }} @enderror</span>
                                                @if (Session::get('fail'))
                                                <span class="text-danger">{{ Session::get('fail') }}</span>
                                                @endif
                                            </div>
                                        </div>
                                        <div class="col-12 d-flex justify-content-end">
                                            <button type="submit" class="btn btn-primary me-1 mb-1">Tiếp tục</button>
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
