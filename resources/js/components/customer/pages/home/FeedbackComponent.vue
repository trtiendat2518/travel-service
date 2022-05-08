<template>
    <div>
        <div class="about-box box">
            <div class="container">
                <div class="box-title text-center mb-3">
                    <h2>Cảm nhận</h2>
                    <h3 class="title">Cảm Nhận Khách Hàng</h3>
                </div>

                <VueSlickCarousel
                    :arrows="false"
                    :dots="false"
                    :infinite="true"
                    :slidesToShow="1"
                    :slidesToScroll="1"
                    :autoplay="true"
                    :speed="3000"
                    :autoplaySpeed="2000"
                >
                    <blockquote>
                        <div>
                            <img
                                :src="`../public/user/img/qteleft.png`"
                                class="first"
                                alt=""
                            />
                        </div>
                        <p>
                            Sau khi sử dụng dịch vụ thuê xe tôi rất hài lòng về
                            chất lượng xe cũng như là sự phục vụ của tài xế, đặc
                            biệt là nhân viên tư vấn rất nhiệt tình và thân
                            thiện khi tư vấn với khách hàng.
                        </p>

                        <div>
                            <img
                                :src="`/public/user/img/qteright.png`"
                                class="last"
                                alt=""
                            />
                        </div>
                        <div class="author">
                            <span class="name">Trần Tiến Đạt </span>
                            <span class="option"> - Developer</span>
                        </div>
                    </blockquote>
                    <blockquote>
                        <div>
                            <img
                                :src="`../public/user/img/qteleft.png`"
                                class="first"
                                alt=""
                            />
                        </div>
                        <p>
                            Tôi có thuê 1 xe 7 chỗ đi Cần Thơ buổi sáng đi buổi
                            chiều về. Khi kết thúc lộ trình tôi có để quên 1 ba
                            gồm: 1 laptop và 1 ví tiền nhưng tôi không nhớ là để
                            quên ở đâu nên tôi rất hoang man. Sáng hôm sau, đã
                            liên lạc với tôi để trả lại balo cho tôi. Tôi chân
                            thành cảm ơn, đặc biệt là tài xế đã gửi balo của tôi
                            lên văn phòng để gửi lại cho khách hàng. Tôi rất tin
                            tưởng, nếu có nhu cầu thuê xe nhất định tôi sẽ liên
                            hệ với công ty.
                        </p>
                        <div>
                            <img
                                :src="`/public/user/img/qteright.png`"
                                class="last"
                                alt=""
                            />
                        </div>
                        <div class="author">
                            <span class="name">Nguyễn Văn C </span>
                            <span class="option"> - Tester</span>
                        </div>
                    </blockquote>
                    <blockquote>
                        <div>
                            <img
                                :src="`../public/user/img/qteleft.png`"
                                class="first"
                                alt=""
                            />
                        </div>
                        <p>
                            Gây ấn tượng với tôi nhất nhờ khả năng ứng dụng công
                            nghệ mới rất cao và chính sách chăm sóc khách hàng
                            nhiệt tình ngay cả khi đã hoàn thành hợp đồng, đó là
                            việc mà tôi chưa bao giờ thấy được từ một đơn vị cho
                            thuê xe nào khác.
                        </p>
                        <div>
                            <img
                                :src="`/public/user/img/qteright.png`"
                                class="last"
                                alt=""
                            />
                        </div>
                        <div class="author">
                            <span class="name">Ngô Văn T </span>
                            <span class="option"> - Doc</span>
                        </div>
                    </blockquote>
                    <blockquote>
                        <div>
                            <img
                                :src="`../public/user/img/qteleft.png`"
                                class="first"
                                alt=""
                            />
                        </div>
                        <p>
                            Tôi đã thuê xe của nhiều đơn vị cho thuê xe khác
                            nhau nhưng chưa nơi nào tôi thấy giá cả hợp lý mà
                            lại phục vụ rất chuyên nghiệp như nơi đây. Vì thế
                            tôi hay giới thiệu bạn bè tôi khi họ có nhu cầu thuê
                            xe đi du lịch.
                        </p>
                        <div>
                            <img
                                :src="`/public/user/img/qteright.png`"
                                class="last"
                                alt=""
                            />
                        </div>
                        <div class="author">
                            <span class="name">Trần Văn B </span>
                            <span class="option"> - Quản lý</span>
                        </div>
                    </blockquote>
                </VueSlickCarousel>
            </div>
        </div>
    </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
    components: { VueSlickCarousel },
};
</script>

<style scoped>
.last {
    float: right;
    top: 72px;
    right: 12px;
    position: absolute;
}
.first {
    position: absolute;
    top: 42px;
    left: 12px;
    margin-top: -25px;
}
</style>
