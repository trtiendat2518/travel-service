@extends('customer.layout')
@section('user-content')

<div class="layout-theme">
    <!-- Start Top Title -->
    <section class="top-title">
        <img src="{{ asset('public/user/img/di-du-lich-viet-nam.jpg') }}" alt="" style="width: 100vw; height: 500px; filter: brightness(30%)">
        <div class="top-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="top-page-heading">
                            <h1>Giới thiệu những địa điểm du lịch Việt Nam</h1>
                            <p class="sub-title">Chúng tôi luôn mang đến khách hàng những trải nghiệp tốt nhât.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Top Title -->
    <!-- Start Custom Single -->
    <section id="main-post">
        <post-news-component></post-news-component>
    </section>
    <!-- End Custom Single -->
</div>

@endsection
