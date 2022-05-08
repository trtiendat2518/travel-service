@extends('customer.layout')
@section('user-content')

<div class="layout-theme">
    <!-- Start Top Title -->
    <section class="top-title">
        <img src="{{ asset('public/user/img/xe-dua-don-san-bay.png') }}" alt="" style="width: 100vw; height: 500px; filter: brightness(30%)">
        <div class="top-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="top-page-heading">
                            <h1>Giới Thiệu Về Dịch Vụ Thuê Xe Chúng Tôi</h1>
                            <p class="sub-title">Chúng tôi luôn mang đến khách hàng những trải nghiệp tốt nhât.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- End Top Title -->
    <!-- Start Custom Single -->
    <section class="customs-single">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <section class="template-title center">
                        <h1 class="title has-over">Dịch vụ xe đưa đón sân bay</h1>
                        <span>Dịch vụ xe đưa đón sân bay </span>
                    </section>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <div class="elementor-element elementor-element-d3f4414 elementor-widget elementor-widget-Bordered Text Block" data-id="d3f4414"
                        data-element_type="widget" data-widget_type="Bordered Text Block.default">
                        <div class="elementor-widget-container">
                            <div class="bordered-text-block" style="border: 2px solid #dedede">
                                <div style="padding: 20px">
                                    {{-- <h4 style="color: #1e1e1e;">Xe dịch vụ miền Nam rất vui được đồng hành cùng bạn trên mọi nẻo đường!</h4> --}}
                                    <p style="color: #1e1e1e; font-size: 18px">
                                        Bạn đang tìm một chuyến xe êm ái sau chuyến bay mệt mỏi? Bạn cần dịch vụ xe đưa đón sân bay uy tín, an toàn mà
                                        lại đảm bảo các chất lượng như: nhanh, tiện, chuyên nghiệp?
                                    </p>
                                    <p style="color: #1e1e1e; font-size: 18px">
                                        Sao bạn không sử dụng dịch vụ đưa đón sân bay của công ty chúng tôi? Với ABC, giờ đây mọi việc sẽ dễ dàng hơn
                                        nhiều. Bạn sẽ dễ dàng lựa chọn được chuyến đi phù hợp với nhu cầu và sự thoải mái sau một chuyến bay dài.
                                    </p>
                                    <img class="mt-2 mb-2" src="public/user/img/xe-dua-don-san-bay-1.jpg"
                                        style="width: 50vw; display: block;margin-left: auto; margin-right: auto; border-radius: 5%" alt="">
                                    <p style="color: #1e1e1e; font-size: 18px">
                                        Đối với khách hàng sử dụng dịch vụ di chuyển đến sân bay. Chúng tôi cung cấp dịch vụ đặt xe đưa đón giúp đảm
                                        bảo các chuyến bay theo thời gian của quý khách hàng. Vậy còn chờ gì nữa mà không nhấc máy lên và liên hệ ngay
                                        cho công ty ABC chúng tôi, chắc hẵn bạn sẽ hài lòng và đem lòng yêu thương những chuyến đi nhiều hơn thì sao?
                                        Hãy để nỗi lo lắng của quý khách hàng trở thành động lực cho chính chúng tôi!
                                    </p>
                                    <p style="color: #1e1e1e; font-size: 18px" class="text-center">“CHỈ CẦN BẠN GỌI, CHÚNG TÔI LUÔN
                                        SẴN SÀNG CÓ MẶT”
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar mb-3">
                        <div class="widget widget-category">
                            <h3>Dịch vụ</h3>
                            <ul>
                                <li>
                                    <a href="#" title=""><img src="{{ asset('public/user/img/next.png') }}" alt=""> Đi 1 chiều có tài xế</a>
                                </li>
                                <li>
                                    <a href="#" title=""><img src="{{ asset('public/user/img/next.png') }}" alt=""> Đi 2 chiều có tài xế</a>
                                </li>
                                <li>
                                    <a href="#" title=""><img src="{{ asset('public/user/img/next.png') }}" alt=""> Đi về quê</a>
                                </li>
                                <li>
                                    <a href="#" title=""><img src="{{ asset('public/user/img/next.png') }}" alt=""> Đi công tác</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="sidebar mb-3">
                        <div class="widget widget-news">
                            <h3>Bài viết</h3>
                            <ul>
                                <li>
                                    <div class="news-image">
                                        <img src="{{ asset('public/user/img/dich-vu-cho-thue-xe-tphcm.png') }}" width="100px" height="100px" alt="">
                                    </div>
                                    <div class="news-content">
                                        <h6 class="mt-3">
                                            <a href="#" title="">Hồ Chí Minh</a>
                                        </h6>
                                    </div>
                                </li>
                                <li>
                                    <div class="news-image">
                                        <img src="{{ asset('public/user/img/dich-vu-thue-xe-tai-vung-tau.png') }}" width="100px" height="100px"
                                            alt="">
                                    </div>
                                    <div class="news-content">
                                        <h6 class="mt-3">
                                            <a href="#" title="">Vũng Tàu</a>
                                        </h6>
                                    </div>
                                </li>
                                <li>
                                    <div class="news-image">
                                        <img src="{{ asset('public/user/img/thue-xe-du-lich-binh-duong.png') }}" width="100px" height="100px" alt="">
                                    </div>
                                    <div class="news-content">
                                        <h6 class="mt-3">
                                            <a href="#" title="">Bình Dương</a>
                                        </h6>
                                    </div>
                                </li>
                                <li>
                                    <div class="news-image">
                                        <img src="{{ asset('public/user/img/dich-vu-cho-thue-xe-du-lich-da-lat.png') }}" width="100px" height="100px"
                                            alt="">
                                    </div>
                                    <div class="news-content">
                                        <h6 class="mt-3">
                                            <a href="#" title="">Đà Lạt</a>
                                        </h6>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <booking-service-component></booking-service-component>
                </div>
            </div>
        </div>
    </section>
    <!-- End Custom Single -->
</div>

@endsection
