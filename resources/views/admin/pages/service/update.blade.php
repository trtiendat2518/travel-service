@extends('admin.layout')
@section('admin-content')
<div id="main">
    <header class="mb-3">
        <a href="#" class="burger-btn d-block d-xl-none">
            <i class="bi bi-justify fs-3"></i>
        </a>
    </header>

    <update-service-component></update-service-component>

    @include('admin.layouts.footer')
</div>
<script src="{{ asset('public/js/app.js') }}"></script>
@endsection
