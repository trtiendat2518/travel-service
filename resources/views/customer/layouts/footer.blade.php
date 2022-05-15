<footer class="footer box">
    <div class="hotline-phone-ring-wrap">
        <div class="hotline-phone-ring">
            <div class="hotline-phone-ring-circle"></div>
            <div class="hotline-phone-ring-circle-fill"></div>
            <div class="hotline-phone-ring-img-circle">
                <a href="tel:0123456789" class="pps-btn-img">
                    <img src="{{ asset('public/user/img/call.png') }}" alt="Gọi điện thoại" width="50">
                </a>
            </div>
        </div>
        <div class="hotline-bar">
            <a href="tel:0123456789">
                <span class="text-hotline">0123.456.789</span>
            </a>
        </div>
    </div>

    {{-- <div class="container text-center">
        <div class="footer-logo ">
            <a href="#"><img src="{{ asset('public/user/img/logo.png') }}" alt=""></a>
        </div>
        <div class="footer-address">
            <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
        </div>
        <div class="footer-number">
            <span>123 456 7890</span>
        </div>
        <div class="footer-contact">
            <span>support@prodrive.com</span>
        </div>
        <ul class="social list-unstyled d-flex justify-content-between">
            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
            <li><a href="#"><i class="fab fa-pinterest"></i></a></li>
            <li><a href="#"><i class="fab fa-dribbble"></i></a></li>
            <li><a href="#"><i class="fab fa-google"></i></a></li>
        </ul>

        <ul class="list-city list-unstyled ">
            <li><a href="#">new york</a></li>
            <li><a href="#">Istanbul</a></li>
            <li><a href="#">London</a></li>
            <li><a href="#">Berlin</a></li>
            <li><a href="#">Los Angeles</a></li>
            <li><a href="#">Paris</a></li>
            <li><a href="#"> All cities</a></li>
        </ul>
    </div> --}}
    <section class="footer-widgets text-left">
        <div class="container">
            <div class="row">
                {{-- <div class="col-md-3">
                    <aside class="widget-area footer-1-area mb-2">
                        <section id="custom_html-4" class="widget_text widget wp-bp-footer-widget widget_custom_html">
                            <h5 class="widget-title h3">Theo dõi chúng tôi</h5>
                            <div class="textwidget custom-html-widget">
                                <div class="social-list"><a href="https://www.facebook.com/AsiaCarService/" target="_blank"
                                        rel="noopener noreferrer"><i class="fab fa-facebook"></i></a><a
                                        href="https://www.linkedin.com/company/asia-car-service/?originalSubdomain=hk" target="_blank"
                                        rel="noopener noreferrer"><i class="fab fa-linkedin"></i></a><a href="http://instagram.com/asiacarservice"
                                        target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></div>
                            </div>
                        </section>
                        <section id="media_image-4" class="widget wp-bp-footer-widget widget_media_image"><img loading="lazy" width="114" height="79"
                                src="https://www.asiacarservice.com/wp-content/uploads/2019/08/footer-logotype-group.png"
                                class="image wp-image-460 attachment-full size-full lazyloaded" alt="Associations and Payment Methods"
                                style="max-width: 100%; height: auto;"
                                data-lazy-src="https://www.asiacarservice.com/wp-content/uploads/2019/08/footer-logotype-group.png"
                                data-was-processed="true"><noscript><img width="114" height="79"
                                    src="https://www.asiacarservice.com/wp-content/uploads/2019/08/footer-logotype-group.png"
                                    class="image wp-image-460  attachment-full size-full" alt="Associations and Payment Methods"
                                    style="max-width: 100%; height: auto;" /></noscript></section>
                    </aside>
                </div> --}}

                <div class="col-md-6">
                    <aside class="widget-area footer-2-area mb-2">
                        <section id="nav_menu-2" class="widget wp-bp-footer-widget widget_nav_menu">
                            <h5 class="widget-title h3">Các dịch vụ</h5>
                            <div class="menu-footer-menu-our-services-container">
                                <div class="row">
                                    @foreach ($service as $key => $value)
                                    <div class="col-md-6">
                                        <a href="{{ url('dich-vu-thue-xe/'. $value->slug) }}" aria-current="page">{{
                                            $value->name }}</a>
                                    </div>
                                    @endforeach
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>

                <div class="col-md-3">
                    <aside class="widget-area footer-3-area mb-2">
                        <section id="nav_menu-3" class="widget wp-bp-footer-widget widget_nav_menu">
                            <h5 class="widget-title h3">Về chúng tôi</h5>
                            <div class="menu-footer-menu-about-us-container">
                                <ul id="menu-footer-menu-about-us" class="menu">
                                    <li id="menu-item-262" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-262"><a
                                            href="{{ url('gioi-thieu') }}">Giới thiệu</a></li>
                                    <li id="menu-item-262" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-262"><a
                                            href="{{ url('gioi-thieu') }}">Facebook</a></li>
                                    <li id="menu-item-262" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-262"><a
                                            href="{{ url('gioi-thieu') }}">Youtube</a></li>
                                </ul>
                            </div>
                        </section>
                    </aside>
                </div>

                <div class="col-md-3">
                    <aside class="widget-area footer-4-area mb-2">
                        <section id="nav_menu-4" class="widget wp-bp-footer-widget widget_nav_menu">
                            <h5 class="widget-title h3">Chính sách</h5>
                            <div class="menu-footer-menu-tcs-container">
                                <ul id="menu-footer-menu-tcs" class="menu">
                                    <li id="menu-item-2091"
                                        class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-2091">
                                        <a href="#">Chính sách bảo mật</a>
                                    </li>
                                    <li id="menu-item-2377" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2377">
                                        <a href="#">Chính sách thanh toán</a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </aside>
                </div>
            </div>
        </div>
    </section>

</footer>
<div class="copyright text-center">
    <p>Copyright ThueXeMienNam © 2022. All Rights Reserved</p>
</div>
