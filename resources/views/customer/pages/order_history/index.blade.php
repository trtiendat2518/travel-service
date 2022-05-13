@extends('customer.layout')
@section('user-content')
<section class="login-booking-area mt-5">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="login-booking">
                    <div class="container mb-5">
                        <div class="box-title text-center">
                            <h2>Lịch sử đơn thuê xe</h2>
                            <h3 class="title">Lịch sử đơn thuê xe</h3>
                        </div>
                    </div>
                    <order-history-component></order-history-component>
                </div>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
</section>
@endsection
