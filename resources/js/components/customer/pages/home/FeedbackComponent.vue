<template>
    <div>
        <div class="about-box box">
            <div class="container">
                <div class="box-title text-center mb-3">
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
                    :autoplaySpeed="3000"
                    v-if="reviews.length > 0"
                >
                    <blockquote v-for="review in reviews" :key="review.id">
                        <div class="row">
                            <div class="col-md-2">
                                <img class="avatar-img" :src="userAvatar(review.avatar)" alt="" />
                            </div>
                            <div class="col-md-10">
                                <!-- <div>
                                    <span class="fa fa-quote-left first"></span>
                                </div> -->
                                <p>
                                    <i class="fa fa-quote-left"></i>
                                    <span>&#32; {{ review.comment }} &#32;</span>
                                    <i class="fa fa-quote-right"></i>
                                </p>
                                <!-- <div>
                                    <span class="fa fa-quote-right last"></span>
                                </div> -->
                                <div class="author">
                                    <span class="name"> {{ review.full_name }} </span>
                                    <span class="option">
                                        <star-rating v-model="review.star" :star-size="30" :rating="0" read-only></star-rating>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </blockquote>
                </VueSlickCarousel>
            </div>
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
    components: { VueSlickCarousel, StarRating },
    data() {
        return {
            reviews: []
        }
    },
    mounted() {
        this.fetchReviews()
    },
    methods: {
        fetchReviews(page_url) {
            page_url = `../../api/customer/review/review-home`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.reviews = res.data
                })
                .catch((err) => console.log(err))
        },
        userAvatar(avatar) {
            if (avatar == 'avatar-mac-dinh.jpg') {
                return `public/images/avatar-mac-dinh.jpg`
            } else {
                return `public/images/user/${avatar}`
            }
        }
    }
}
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
.avatar-img {
    border-radius: 100%;
    height: 20vh;
}
</style>
