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
                    <h3>Quản lý loại xe</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Quản lý loại xe</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <section class="section">
            <car-component></car-component>
        </section>
    </div>

    @include('admin.layouts.footer')
</div>
<script src="{{ asset('public/js/app.js') }}"></script>
@endsection
