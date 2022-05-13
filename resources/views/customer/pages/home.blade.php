@extends('customer.layout')
@section('user-content')
<div class="main">
    <!-- banners -->
    <banner-component></banner-component>

    <!-- about us -->
    <div class="w-choose box">
        <div class="container">
            <div class="box-title text-center">
                <h2>Về Chúng Tôi</h2>
                <h3 class="title">Về Chúng Tôi</h3>
            </div>
        </div>
        <div class="container">
            <div class="box-content row justify-content-between">
                <div class="w-choose-item col-lg-3 col-md-6">
                    <div class="box-content-top">
                        <img src="{{ asset('public/user/img/wchoose1.png') }}" alt="">
                    </div>
                    <div class="box-content-bottom">
                        <a href="#" class="sub-title">Thuê Xe Nhanh Gọn</a>
                        <span class="sub-desc">
                            Đội ngũ booking luôn làm việc sẵn sàng hỗ trợ đặt xe 24/7, vì thế bạn có thể thuê xe bất cứ khi nào và ở đâu.
                        </span>
                    </div>
                </div>
                <div class="w-choose-item col-lg-3 col-md-6">
                    <div class="box-content-top">
                        <img src="{{ asset('public/user/img/wchoose2.png') }}" alt="">
                    </div>
                    <div class="box-content-bottom">
                        <a href="#" class="sub-title">Tài Xế Chuyên Nghiệp</a>
                        <span class="sub-desc">
                            Chỉ cần bắt máy gọi, xe dichvumiennam sẽ điều phối xe đến cho bạn trong vòng 30 phút. Bất kể bạn ở đâu,
                            tài xế sẵn sàng đưa đón bạn đến tận nơi an toàn, nhanh chóng và chính xác.
                        </span>
                    </div>
                </div>
                <div class="w-choose-item col-lg-3 col-md-6">
                    <div class="box-content-top">
                        <img src="{{ asset('public/user/img/wchoose3.png') }}" alt="">
                    </div>
                    <div class="box-content-bottom">
                        <a href="#" class="sub-title">Đầy Đủ Các Loại Xe</a>
                        <span class="sub-desc">
                            Từ các loại xe sang phục vụ sự kiện hay đến các dòng xe bình dân du lịch, từ quy mô nhỏ 4 chỗ đến quy mô lớn cho cả đoàn
                            khách du lịch chúng tôi đều có thể đáp ứng đầy đủ.
                        </span>
                    </div>
                </div>
                <div class="w-choose-item col-lg-3 col-md-6">
                    <div class="box-content-top">
                        <img src="{{ asset('public/user/img/wchoose4.png') }}" alt="">
                    </div>
                    <div class="box-content-bottom">
                        <a href="#" class="sub-title">Chi Phí Thấp</a>
                        <span class="sub-desc">
                            Sở hữu số lượng xe lớn, đầy đủ cả nhân lực và nguồn lực có sẵn, do đó mức giá của chúng tôi luôn thấp nhất trên thị
                            trường.
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <section
            class="elementor-element elementor-element-503a9f09 page-section elementor-section-boxed elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section"
            data-id="503a9f09" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
                <div class="elementor-row">
                    <div class="elementor-element elementor-element-3539daaa elementor-column elementor-col-100 elementor-top-column"
                        data-id="3539daaa" data-element_type="column">
                        <div class="elementor-column-wrap  elementor-element-populated">
                            <div class="elementor-widget-wrap">
                                <div class="elementor-element elementor-element-7dc7f301 elementor-widget elementor-widget-Image Text Alignment Block"
                                    data-id="7dc7f301" data-element_type="widget" data-widget_type="Image Text Alignment Block.default">
                                    <div class="elementor-widget-container">
                                        <div class="row image-text-alignment-row image-text-alignment-row-right rocket-lazyload"
                                            style="background-image: url(&quot;{{ asset('public/user/img/ve-chung-toi.jpg') }}&quot;);"
                                            data-was-processed="true">
                                            <div class="col-md-5 col-sm-12"></div>
                                            <div class="col-md-7 col-sm-12">
                                                <div class="image-text-alignment-block">
                                                    <div class="image-text-alignment-block-mobile-image rocket-lazyload"
                                                        style="background-image: url(&quot;{{ asset('public/user/img/ve-chung-toi.jpg') }}&quot;);"
                                                        data-was-processed="true"></div>
                                                    <div class="image-text-alignment-block-content">
                                                        <h3><b>Tại sao nên sử dụng dịch vụ của chúng tôi?</b> </h3>
                                                        <div class="image-text-aligment-1-column">
                                                            <p>Dịch vụ thuê xe của chúng tôi trải dài rộng khắp các tỉnh miền Nam, có
                                                                đa dạng các loại xe 4-7-16-29-45 chỗ, phù hợp với từng nhu cầu sử dụng của khách hàng.
                                                            </p>
                                                            <p>
                                                                Đến với chúng tôi, quý khách hàng sẽ được trải nghiệm dòng xe đời mới nhất, chất lượng
                                                                dịch vụ tốt nhất và giá thuê xe rẻ nhất hiện nay. Đảm bảo đem lại cho quý khách những
                                                                hành trình tuyệt vời đi đôi với chất lượng tốt nhất.</p>
                                                        </div>
                                                        <div class="image-icon-cta-block-button-container"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- our process -->
    <div class="our-process box">
        <div class="box-title text-center">
            <h2 class="text-capitalize">Quy Trình Làm Việc</h2>
            <h3 class="text-capitalize">Quy Trình Làm Việc</h3>
        </div>
        <div class="box-content">
            <our-process-component></our-process-component>
            {{-- <div class="container">
                <div class="elementor-element elementor-element-869e133 elementor-widget elementor-widget-Numbered Steps Row" data-id="869e133"
                    data-element_type="widget" data-widget_type="Numbered Steps Row.default">
                    <div class="elementor-widget-container">
                        <div class="slick-carousel steps-carousel slick-initialized slick-slider">
                            <div class="slick-list draggable">
                                <div class="slick-track" style="opacity: 1; width: 905px; transform: translate3d(0px, 0px, 0px);">
                                    <div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false"
                                        style="width: 181px;">
                                        <div>
                                            <div style="width: 100%; display: inline-block;">
                                                <div class="numbered-steps-block">
                                                    <div class="numbered-steps-number-container numbered-steps-number-first"><span
                                                            class="numbered-steps-number">1.</span></div>
                                                    <p>Gửi thông tin của bạn cho chúng tôi</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 181px;">
                                        <div>
                                            <div style="width: 100%; display: inline-block;">
                                                <div class="numbered-steps-block">
                                                    <div class="numbered-steps-number-container"><span class="numbered-steps-number">2.</span></div>
                                                    <p>Nhóm 24/7 của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 181px;">
                                        <div>
                                            <div style="width: 100%; display: inline-block;">
                                                <div class="numbered-steps-block">
                                                    <div class="numbered-steps-number-container"><span class="numbered-steps-number">3.</span></div>
                                                    <p>Chúng tôi sẽ sắp xếp lịch trình, dịch vụ cho bạn</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 181px;">
                                        <div>
                                            <div style="width: 100%; display: inline-block;">
                                                <div class="numbered-steps-block">
                                                    <div class="numbered-steps-number-container"><span class="numbered-steps-number">4.</span></div>
                                                    <p>Tài xế chuyên nghiệp của chúng tôi sẽ đón bạn vào khung giờ bạn chọn</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="slick-slide slick-active" data-slick-index="4" aria-hidden="false" style="width: 181px;">
                                        <div>
                                            <div style="width: 100%; display: inline-block;">
                                                <div class="numbered-steps-block">
                                                    <div class="numbered-steps-number-container numbered-steps-number-last"><span
                                                            class="numbered-steps-number">5.</span></div>
                                                    <p>Thư giãn và tận hưởng chuyến đi của bạn!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> --}}
        </div>
    </div>


    <!-- our service -->
    <our-service-component></our-service-component>

    <!-- cars service -->
    {{-- <car-category-component></car-category-component> --}}

    <!-- contact us -->
    {{-- <div id="info-box" class="hero-image parallax">
        <div class="hero-text">
            <div class="box-title text-center">
                <h3 class="">Liên hệ với chúng tôi</h3>
                <p>
                    Hotline hỗ trợ 24/24, quý khách cần tư vấn giá, lên tuor, hợp đồng thuê xe, cần xe đi gấp, cần tư vấn điểm du lịch vui lòng gọi
                    ngay cho chúng tôi để được hỗ trợ tốt nhất.
                </p>
            </div>
            <div class="info-box-content box-content">
                <a href="tel:0123456789" class="btn text-capitalize">Gọi ngay <span>(1)-212-333-4343</span></a>
            </div>
        </div>
    </div> --}}

    <!-- popular place -->
    <popular-place-component></popular-place-component>

    <!-- review -->
    <feedback-component></feedback-component>

    <!-- booking form -->
    <booking-now-component></booking-now-component>
</div>
@endsection
