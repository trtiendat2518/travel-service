<template>
    <div>
        <!-- <div class="item">
            <div class="style-display">
                <div class="numbered-steps-block">
                    <div class="numbered-steps-number-container numbered-steps-number-first">
                        <span class="numbered-steps-number">1.</span>
                    </div>
                    <p>Gửi thông tin của bạn cho chúng tôi</p>
                </div>
            </div>
        </div> -->
        <VueSlickCarousel
            :arrows="false"
            :dots="false"
            :infinite="true"
            :slidesToShow="5"
            :slidesToScroll="1"
            :autoplay="false"
            :responsive="responsive"
        >
            <div class="item">
                <div class="style-display">
                    <div class="numbered-steps-block">
                        <div class="numbered-steps-number-container numbered-steps-number-first">
                            <span class="numbered-steps-number">1.</span>
                        </div>
                        <p>Gửi thông tin của bạn cho chúng tôi</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="style-display">
                    <div class="numbered-steps-block">
                        <div class="numbered-steps-number-container"><span class="numbered-steps-number">2.</span></div>
                        <p>Nhóm 24/7 của chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="style-display">
                    <div class="numbered-steps-block">
                        <div class="numbered-steps-number-container"><span class="numbered-steps-number">3.</span></div>
                        <p>Chúng tôi sẽ sắp xếp lịch trình, dịch vụ cho bạn</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="style-display">
                    <div class="numbered-steps-block">
                        <div class="numbered-steps-number-container"><span class="numbered-steps-number">4.</span></div>
                        <p>Tài xế chuyên nghiệp của chúng tôi sẽ đón bạn vào khung giờ bạn chọn</p>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="style-display">
                    <div class="numbered-steps-block">
                        <div class="numbered-steps-number-container numbered-steps-number-last">
                            <span class="numbered-steps-number">5.</span>
                        </div>
                        <p>Thư giãn và tận hưởng chuyến đi của bạn!</p>
                    </div>
                </div>
            </div>
        </VueSlickCarousel>
    </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { VueSlickCarousel },
    data() {
        return {
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        infinite: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        }
    }
}
</script>

<style scoped>
.style-display {
    width: 100%;
    display: inline-block;
}
.slick-list .slick-slide .item {
    padding: 0px;
}
</style>
