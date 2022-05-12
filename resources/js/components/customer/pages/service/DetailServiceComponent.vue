<template>
    <div>
        <!-- Start Top Title -->
        <section class="top-title">
            <img :src="`../public/images/service/${form.avatar}`" alt="" style="width: 100vw; height: 500px; filter: brightness(30%)" />
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
                            <h1 class="title has-over">Dịch vụ {{ form.name }}</h1>
                            <span>Dịch vụ {{ form.name }}</span>
                        </section>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-8">
                        <div
                            class="elementor-element elementor-element-d3f4414 elementor-widget elementor-widget-Bordered Text Block"
                            data-id="d3f4414"
                            data-element_type="widget"
                            data-widget_type="Bordered Text Block.default"
                        >
                            <div class="elementor-widget-container">
                                <div class="bordered-text-block" style="border: 2px solid #dedede">
                                    <div style="padding: 20px">
                                        <div v-html="form.content"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="sidebar mb-3">
                            <div class="widget widget-category">
                                <h3>Dịch vụ phổ biến</h3>
                                <ul>
                                    <li v-for="item in service_popular" :key="item.id">
                                        <a :href="`/dich-vu-thue-xe/${item.slug}`" title="">
                                            <img :src="`../public/user/img/next.png`" alt="" />
                                            {{ item.name }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="booking">
                            <button class="btn btn-color btn-block btn-lg" @click="loan()">Đặt thuê xe</button>
                            <a href="tel:0123456789" class="btn btn-secondary btn-block btn-lg"> Liên hệ </a>

                            <div
                                class="modal fade"
                                id="loanModal"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="loanModalTitle"
                                aria-hidden="true"
                            >
                                <div class="modal-dialog" role="document">
                                    <form @submit.prevent="" @keydown="form.onKeydown($event)">
                                        <div class="modal-content">
                                            <div class="modal-header styling-modal-header-update">
                                                <h5 class="modal-title" id="loanModalTitle">Đặt thuê xe</h5>
                                                <button
                                                    type="button"
                                                    class="close"
                                                    data-dismiss="modal"
                                                    aria-label="Close"
                                                    @click="close()"
                                                >
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label class="text-left" for="name">Họ và tên</label>
                                                        <input type="text" name="name" id="name" placeholder="Nhập đầy đủ họ tên" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label class="text-left" for="phone">Số điện thoại </label>
                                                        <input type="text" name="phone" id="phone" placeholder="Nhập số điện thoại" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="category">Loại xe</label>
                                                        <select name="category" id="category">
                                                            <option value="">Chọn loại xe</option>
                                                            <option value="1">Xe 4 chỗ</option>
                                                            <option value="2">Xe 7 chỗ</option>
                                                            <option value="3">Xe 16 chỗ</option>
                                                            <option value="4">Xe 29 chỗ</option>
                                                            <option value="5">Xe 45 chỗ</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="service">Dịch vụ thuê xe </label>
                                                        <select name="service" id="service">
                                                            <option value="">Chọn dịch vụ</option>
                                                            <option value="1">Đi 1 chiều có tài xế</option>
                                                            <option value="2">Đi 2 chiều có tài xế</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="address-start">Chọn điểm đón</label>
                                                        <select name="address-start" id="address-start">
                                                            <option value="">Chọn điểm đón</option>
                                                            <option value="1">Xe 4 chỗ</option>
                                                            <option value="2">Xe 7 chỗ</option>
                                                            <option value="3">Xe 16 chỗ</option>
                                                            <option value="4">Xe 29 chỗ</option>
                                                            <option value="5">Xe 45 chỗ</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="address-end">Chọn điểm đến</label>
                                                        <select name="address-end" id="address-end">
                                                            <option value="">Chọn điểm đến</option>
                                                            <option value="1">Đi 1 chiều có tài xế</option>
                                                            <option value="2">Đi 2 chiều có tài xế</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="time-start">Ngày bắt đầu</label>
                                                        <input type="date" name="time-start" id="time-start" />
                                                    </div>
                                                    <div class="col-md-6">
                                                        <label for="time-end">Ngày kết thúc </label>
                                                        <input type="date" name="time-end" id="time-end" />
                                                    </div>
                                                    <div class="col-md-12">
                                                        <label class="text-left" for="phone">Ghi chú </label>
                                                        <textarea
                                                            name=""
                                                            id=""
                                                            rows="4"
                                                            laceholder="Để lại lời nhắn cho chúng tôi"
                                                        ></textarea>
                                                    </div>
                                                    <div class="clearfix"></div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button class="text-center" type="submit">Tiếp tục</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br />

                <div class="row">
                    <div class="col-md-12">
                        <section class="template-title center">
                            <h3 class="title has-over">Bài viết phổ biến</h3>
                            <span>Bài viết phổ biến</span>
                        </section>
                        <VueSlickCarousel
                            :arrows="true"
                            :dots="false"
                            :infinite="true"
                            :slidesToShow="4"
                            :slidesToScroll="1"
                            :autoplay="true"
                            :speed="3000"
                            :autoplaySpeed="2000"
                            :responsive="responsive"
                            v-if="post_popular.length > 0"
                        >
                            <div class="item" v-for="post in post_popular" :key="post.id">
                                <div class="card mb-0">
                                    <a :href="`/bai-viet/${post.slug}`">
                                        <article class="post">
                                            <div class="featured-image">
                                                <img class="post-img" :src="`../public/images/post/${post.avatar}`" alt="" />
                                            </div>
                                            <div class="entry-content">
                                                <div class="entry-post-title">
                                                    <h4 class="post-title text-left" v-if="post.title < 30">{{ post.title }}</h4>
                                                    <h4 class="post-title text-left" v-else>{{ post.title.substring(0, 30) + '...' }}</h4>
                                                </div>
                                            </div>
                                        </article>
                                    </a>
                                </div>
                            </div>
                        </VueSlickCarousel>
                    </div>
                </div>
            </div>
        </section>
        <!-- End Custom Single -->
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
            service_popular: [],
            post_popular: [],
            services: [],
            posts: [],
            service_slug: this.$route.params.slugService,
            form: new Form({
                id: '',
                name: '',
                avatar: '',
                content: '',
                slug: '',
                author: this.$adminId
            }),
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
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
    },
    created() {
        this.showPostPopular()
    },
    mounted() {
        this.show()
        this.showServicePopular()
        this.fetchPosts()
    },
    watch: {
        $route(to, from) {
            this.service_slug = to.params.slugService
        }
    },
    methods: {
        loan() {
            $('#loanModal').modal('show')
        },
        close() {
            $('#loanModal').modal('hide')
        },
        show(page_url) {
            page_url = `../../../api/customer/service/detail/${this.service_slug}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.form.fill(res.data[0])
                    this.form.avatar = `../../../public/images/service/${res.data[0].avatar}`
                })
                .catch((err) => console.log(err))
        },
        showServicePopular(page_url) {
            page_url = `../../../api/customer/service/popular`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.service_popular = res.data
                })
                .catch((err) => console.log(err))
        },
        showPostPopular(page_url) {
            page_url = `../../../api/customer/post/popular`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.post_popular = res.data
                })
                .catch((err) => console.log(err))
        }
    }
}
</script>

<style scoped>
.btn-color {
    background-color: #1e1e1e;
    color: #fff;
}
textarea {
    resize: none;
}
.slick-list .slick-slide .item {
    padding: 20px !important;
}
article.post {
    margin-bottom: 0 !important;
}
.post-title {
    color: #000;
}
.post-title:hover {
    color: #bf9c60;
}
.post-img {
    width: 100vw;
    height: 20vh;
}
</style>
