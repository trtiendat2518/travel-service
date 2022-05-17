@extends('customer.layout')
@section('user-content')

<div class="layout-theme">
    <!-- Start Top Title -->
    <section class="top-title">
        <img src="{{ asset('public/user/img/about-us-page.jpg') }}" alt="" style="width: 100vw; height: 500px; filter: brightness(30%)">
        <div class="top-page">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="top-page-heading">
                            <h1>GIỚI THIỆU</h1>
                            <p class="sub-title">Chúng tôi luôn mang đến khách hàng những trải nghiệp tốt nhât.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="breadcrumbs">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <ul>
                            <li>
                                <a href="#">Trang chủ </a>
                            </li>
                            <li>
                                / Giới thiệu
                            </li>
                        </ul>
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
                        <h1 class="title has-over">Giới Thiệu Công Ty Chúng Tôi</h1>
                        <span>Giới Thiệu Công Ty Chúng Tôi</span>
                    </section>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    {{-- <div class="elementor-element elementor-element-d3f4414 elementor-widget elementor-widget-Bordered Text Block"
                        data-id="d3f4414" data-element_type="widget" data-widget_type="Bordered Text Block.default">
                        <div class="elementor-widget-container">
                            <div class="bordered-text-block" style="border: 2px solid #dedede">
                                <div style="padding: 20px">
                                    <h4 style="color: #1e1e1e;">Xe dịch vụ miền Nam rất vui được đồng hành cùng bạn trên mọi nẻo đường!</h4>
                                    <p>Làm sao để mỗi chuyến đi là một cuộc hành trình đáng nhớ? Sự khởi đầu suôn sẻ luôn rất quan trọng trong mỗi
                                        chuyến
                                        đi dài. Vậy như thế nào thì sẽ được coi là “sự khởi đầu suôn sẻ”? Đó là bạn thuê được một chiếc xe tốt, được
                                        dẫn
                                        dắt bởi một tài xế tốt và được trải nghiệm những dịch vụ tốt trên suốt chặng đường. Khi đến nơi bạn cảm thấy
                                        thoải
                                        mái, không mệt mỏi, không say xe và có thể vui vẻ tận hưởng tiếp hành trình.</p>
                                    <p>Vậy làm thế nào để có một sự khởi đầu suôn sẻ? Với mong muốn trở thành người đồng hành của quý khách trong các
                                        chặng hành trình du lịch, dã ngoại, các sự kiện quan trọng, đám cưới hỏi, các chuyến công tác… xedichvumiennam
                                        ở
                                        đây để đưa bạn đến những nơi cần đến một cách nhanh chóng, an toàn.</p>
                                    <p>Chúng tôi cực kỳ tự tin vì đã có nhiều năm kinh nghiệm lái xe đường dài, lái xe đưa đón, thông thuộc mọi tuyến
                                        đường từ Nam ra Bắc. Chắc chắn xedichvumiennam là lựa chọn hoàn hảo dành cho bạn mỗi khi cần. </p>
                                    <p class="text-center">“CHỈ CẦN BẠN GỌI, CHÚNG TÔI LUÔN SẴN SÀNG CÓ MẶT”</p>
                                </div>
                            </div>
                        </div>
                    </div> --}}
                    <div class="elementor-element elementor-element-618d663 elementor-widget elementor-widget-Image Text Alignment Block"
                        data-element_type="widget" data-widget_type="Image Text Alignment Block.default">
                        <div class="elementor-widget-container">
                            <div class="row image-text-alignment-row image-text-alignment-row-right rocket-lazyload"
                                style="background-image: url(&quot;{{ asset('public/user/img/travel.jpg') }}&quot;);" data-was-processed="true">
                                <div class="col-md-3 col-sm-12"></div>
                                <div class="col-md-9 col-sm-12">
                                    <div class="image-text-alignment-block" style="border-right: 2px solid #d1d6db; border-bottom: 2px solid #d1d6db">
                                        <div class="image-text-alignment-block-mobile-image rocket-lazyload"
                                            style="background-image: url(&quot;{{ asset('public/user/img/travel.jpg') }}&quot;);"
                                            data-was-processed="true"></div>
                                        <div class="image-text-alignment-block-content">
                                            <h4 style="color: #1e1e1e;">Xe dịch vụ miền Nam – cho thuê mọi loại xe</h4>
                                            <div class="image-text-aligment-1-column">
                                                <p>Thuê xe miền Nam là đơn vị tiên phong cung cấp các dịch vụ thuê xe, đồng thời luôn đổi mới với
                                                    các dòng xe hiện
                                                    đại, chất lượng, mang lại trải nghiệm tốt nhất cho khách hàng khi ngồi trên xe. Các dòng xe hiện
                                                    tại chúng tôi
                                                    đang cho thuê bao gồm: Xe 4 chỗ, Xe 7 chỗ, Xe 16 chỗ, Xe 29 chỗ, Xe 45 chỗ, Xe giường nằm</p>
                                                <p>
                                                    Với đủ mọi dòng xe, hãng xe từ trung cấp đến cao cấp và đến ngay cả các dòng xe sang chúng tôi
                                                    luôn sẵn sàng phục
                                                    vụ bất cứ khi bạn cần. Bên cạnh đó, số lượng người cũng không còn là vấn đề vì chúng tôi sở hữu
                                                    tất cả các loại từ
                                                    xe 4 chỗ phục vụ gia đình nhỏ đến xe 45 chỗ hoặc xe giường nằm để phục vụ công ty, đoàn thể, lớp
                                                    học trong mỗi
                                                    chuyến du lịch.
                                                </p>
                                                <p>
                                                    Với đầy đủ các lựa chọn từ loại xe, mẫu mã, số lượng, … khách hàng sẽ không còn phải đắn đo suy
                                                    nghĩ để chọn cho
                                                    mình chiếc xe phù hợp nữa. Việc của bạn chỉ là nhấc máy lên, còn mọi khâu chuẩn bị thì đã có
                                                    xedichvumiennam sắp
                                                    xếp sẵn cho bạn, đảm bảo bạn sẽ vô cùng hài lòng.
                                                </p>
                                            </div>
                                            <div class="image-icon-cta-block-button-container"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="elementor-element elementor-element-dd26c33 elementor-widget elementor-widget-Image Text Alignment Block"
                        data-id="dd26c33" data-element_type="widget" data-widget_type="Image Text Alignment Block.default">
                        <div class="elementor-widget-container">
                            <div class="row image-text-alignment-row image-text-alignment-row-left rocket-lazyload"
                                style="background-image: url(&quot;{{ asset('public/user/img/lien-he-voi-chung-toi.jpg') }}&quot;);"
                                data-was-processed="true">
                                <div class="col-md-7 col-sm-12">
                                    <div class="image-text-alignment-block" style="border-right: 2px solid #d1d6db; border-bottom: 2px solid #d1d6db">
                                        <div class="image-text-alignment-block-mobile-image rocket-lazyload"
                                            style="background-image: url(&quot;{{ asset('public/user/img/lien-he-voi-chung-toi.jpg') }}&quot;);"
                                            data-was-processed="true"></div>
                                        <div class="image-text-alignment-block-content">
                                            <h4 style="color: #1e1e1e;">THÔNG TIN LIÊN HỆ XE DỊCH VỤ MIỀN NAM</h4>
                                            <div class="image-text-aligment-1-column">
                                                <p>– <b style="font-family: auto">Trụ sở:</b>
                                                    <span>Đường số 8, Phường Linh Tây,Quận Thủ Đức, Thành phố Hồ
                                                        Chí Minh</span>
                                                </p>
                                                <p>
                                                    – <b style="font-family: auto">Chi nhánh:</b> 4 Đường D1, Thị Xã Bến Cát, Tỉnh Bình Dương
                                                </p>
                                                <p>
                                                    – <b style="font-family: auto">Chi nhánh:</b> 583 Đường Cách Mạng Tháng 8, Khu phố 2, Phường 3,
                                                    Thành phố Tây Ninh
                                                </p>
                                                <p>
                                                    – <b style="font-family: auto">Điện thoại:</b> 088.678.6052 (Tú) hoặc 0911.714.452 (Hà)
                                                </p>
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
    <!-- End Custom Single -->
</div>

@endsection
