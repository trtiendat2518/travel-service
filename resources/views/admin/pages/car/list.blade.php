@extends('admin.layout')
@section('admin-content')
<div id="main">
    <header class="mb-3">
        <a href="#" class="burger-btn d-block d-xl-none">
            <i class="bi bi-justify fs-3"></i>
        </a>
    </header>

    <car-component></car-component>

    @include('admin.layouts.footer')
</div>
<script src="{{ asset('public/admin/js/ckeditor/ckeditor.js') }}"></script>
<script src="{{ asset('public/admin/js/ckfinder/ckfinder.js') }}"></script>
<script src="{{ asset('public/admin/js/jquery-3.4.1.js') }}"></script>
<script src="{{ asset('public/js/app.js') }}"></script>
@endsection
