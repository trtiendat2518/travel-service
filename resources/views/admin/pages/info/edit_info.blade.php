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
                                <form action="{{ url('admin/chinh-sua-thong-tin/'. $user->id) }}" method="POST" class="form">
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
                                        <div class="col-md-6 col-12">
                                            <div class="form-group">
                                                <label for="full_name">Họ tên</label>
                                                <input type="text" id="full_name" class="form-control" name="full_name"
                                                    value="{{ $user->full_name }}">
                                                <span class="text-danger">@error('full_name') {{ $message }} @enderror</span>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="form-group">
                                                <label for="phone_number">Số điện thoại</label>
                                                <input type="number" id="phone_number" class="form-control" name="phone_number"
                                                    value="{{ $user->phone_number }}">
                                                <span class="text-danger">@error('phone_number') {{ $message }} @enderror</span>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-12">
                                            <div class="form-group">
                                                <label for="email">Email</label>
                                                <input type="email" id="email" class="form-control" name="email" value="{{ $user->email }}">
                                                <span class="text-danger">@error('email') {{ $message }} @enderror</span>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-12">
                                            <div class="form-group">
                                                <label for="address">Địa chỉ</label>
                                                <textarea name="address" id="address" rows="3" class="form-control"
                                                    style="resize: none">{{ $user->address }}</textarea>
                                                <span class="text-danger">@error('address') {{ $message }} @enderror</span>
                                            </div>
                                        </div>
                                        <div class="col-12 d-flex justify-content-end">
                                            <button type="submit" class="btn btn-primary me-1 mb-1">Chỉnh sửa</button>
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
