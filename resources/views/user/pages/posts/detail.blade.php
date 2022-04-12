@extends('user.layout')
@section('user-content')

<div class="layout-theme">
    <!-- Start Top Title -->
    <section class="top-title"
        style="background-image: url('{{ asset('public/user/img/dich-vu-cho-thue-xe-tphcm.png') }}'); background-size: 100vw; filter: brightness(30%);">
        <div class="top-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="top-page-heading">
                            {{-- <h1>Du lịch tại Hồ Chí Minh</h1>
                            <p class="sub-title">Chúng tôi luôn mang đến khách hàng những trải nghiệp tốt nhât.</p> --}}
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
                        <h1 class="title has-over">Hồ Chí Minh</h1>
                        <span>Hồ Chí Minh</span>
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
                                        Du lịch đến với Sài Gòn – TP.HCM hơn 300 năm tuổi, bạn có thể gặp những tòa nhà cao tầng nằm san sát, những
                                        khu vui chơi giải trí, trung tâm mua sắm sầm uất, nhưng cũng không thiếu những biệt thự cổ kính, những ngôi
                                        chợ truyền thống tồn tại đã hàng trăm năm. Sài Gòn rộng lớn và không thiếu những “đặc sản” du lịch như Du
                                        ngoạn ven sông Sài Gòn bằng tàu, thăm phố Tây Phạm Ngũ Lão, mua sắm ở chợ Bến Thành hay về với biển Cần Giờ….
                                    </p>
                                    <img class="mt-2 mb-2" src="../public/user/img/tu-van-du-lich-thanh-pho-ho-chi-minh-1.jpg"
                                        style="width: 50vw; display: block;margin-left: auto; margin-right: auto; border-radius: 5%" alt="">
                                    <h3 style="color: #1e1e1e; font-weight: bold">DI CHUYỂN, ĐI LẠI KHI DU LỊCH THÀNH PHỐ HỒ CHÍ MINH</h3>
                                    <p style=" color: #1e1e1e; font-size: 18px">
                                        Phương tiện đi lại chủ yếu cho du khách du lịch Sài Gòn chủ yếu là xe máy, ô tô, xe đạp, xe buýt, xe xích lô.

                                        Phương tiện di chuyển công cộng rẻ nhất là xe buýt chỉ 5.000VND/tuyến, xe ôm và taxi. Hiện nay, mật độ giao
                                        thông ở TP.HCM khá đông đúc, nhiều đoạn đường trong thành phố xảy ra tình trạng kẹt xe vào giờ tan tầm: từ
                                        7h00 – 8h00 sáng và 17h00 – 18h00 chiều.
                                    </p>
                                    <img class="mt-2 mb-2" src="../public/user/img/tu-van-du-lich-thanh-pho-ho-chi-minh-3.jpg"
                                        style="width: 50vw; display: block;margin-left: auto; margin-right: auto; border-radius: 5%" alt="">
                                    <p style="color: #1e1e1e; font-size: 18px">
                                        TPHCM có hai mùa rõ rệt là mùa nắng và mùa mưa, mùa mưa bắt đầu từ tháng 6 và kết thúc vào tháng 11. Nhưng
                                        nhìn chung bạn có thể đến TPHCM bất cứ tháng nào trong năm và đừng đi du lịch tại TPHCM vào những ngày tết
                                        nguyên đán. Khi tết nguyên đán mọi người thường về quê hương ăn tế với gia đình.
                                    </p>
                                    <p style="color: #1e1e1e; font-size: 18px">
                                        Vào các mùa lễ hội hoạt động mua sắm và vui chơi tại TPHCM diễn ra vô cùng sôi nỗi trên khắp các ngả đường.
                                        Vào mùa Noel các con đường tràn ngập ánh đèn, xe cộ tấp nập và các hoạt động vui chơi giải trí diển ra gần tàn
                                        đêm, bạn có thể đến TPHCM vào những ngày này để tận hưởng cái không khí se se lạnh nhưng ấm áp tại TPHCM.
                                        Đừng lo ngại sự ồn ào của TPHCM bạn đến đây bất cứ ngày nào trong năm củng có các khu du lịch sinh thái, khu
                                        nghĩ dưỡng… cho bạn thư giãn.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
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

                    <booking-service-component></booking-service-component>
                </div>
            </div>
        </div>
    </section>
    <!-- End Custom Single -->
</div>

@endsection
