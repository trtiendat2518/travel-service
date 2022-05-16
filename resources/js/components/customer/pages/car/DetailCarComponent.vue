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
                                <h1>Giới Thiệu Về Các Loại Xe Chúng Tôi</h1>
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
                            <h1 class="title has-over">{{ form.name }}</h1>
                            <span>{{ form.name }}</span>
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

                            <div class="widget widget-tags">
                                <h3>Tags</h3>
                                <ul>
                                    <li v-for="tag in form.tags" :key="tag">
                                        <a href="javascript:void(0)" title="" class="text-tags" @click="hashtag(slug(tag))">{{ tag }}</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="booking">
                            <button class="btn btn-color btn-block btn-lg" @click="book()">Đặt thuê xe</button>
                            <a href="tel:0886786052" class="btn btn-secondary btn-block btn-lg"> Liên hệ </a>
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

        <!-- Modal not Loged -->
        <div
            class="modal fade bd-example-modal-lg"
            id="bookNoLogedModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="bookNoLogedModalTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-lg" role="document">
                <form @submit.prevent="storeNotLoged()" @keydown="booking.onKeydown($event)">
                    <div class="modal-content">
                        <div class="modal-header styling-modal-header-update">
                            <h4 class="modal-title" id="bookNoLogedModalTitle">Đặt thuê xe</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <label class="text-left" for="name">Họ và tên</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('full_name')"
                                        v-html="'( ' + booking.errors.get('full_name') + ' )'"
                                    >
                                    </span>
                                    <input
                                        type="text"
                                        name="full_name"
                                        id="full_name"
                                        v-model="booking.full_name"
                                        placeholder="Nhập đầy đủ họ tên"
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label class="text-left" for="phone">Số điện thoại </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('phone_number')"
                                        v-html="'( ' + booking.errors.get('phone_number') + ' )'"
                                    >
                                    </span>
                                    <input
                                        type="number"
                                        name="phone_number"
                                        id="phone_number"
                                        v-model="booking.phone_number"
                                        placeholder="Nhập số điện thoại"
                                    />
                                </div>
                                <div class="col-md-12">
                                    <label class="text-left" for="phone">Địa chỉ Email </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('email')"
                                        v-html="'( ' + booking.errors.get('email') + ' )'"
                                    >
                                    </span>
                                    <input type="email" name="email" id="email" v-model="booking.email" placeholder="Nhập Email" />
                                </div>
                                <div class="col-md-6">
                                    <label for="category">Loại xe</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('car_id')"
                                        v-html="'( ' + booking.errors.get('car_id') + ' )'"
                                    >
                                    </span>
                                    <select name="category" id="category" v-model="booking.car_id">
                                        <option value="" disabled>Chọn loại xe</option>
                                        <option v-for="car in cars" :key="car.id" :value="car.id">
                                            {{ car.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="service">Dịch vụ thuê xe </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('service_id')"
                                        v-html="'( ' + booking.errors.get('service_id') + ' )'"
                                    >
                                    </span>
                                    <select name="service" id="service" v-model="booking.service_id">
                                        <option value="" disabled>Chọn dịch vụ</option>
                                        <option v-for="service in services" :key="service.id" :value="service.id">
                                            {{ service.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="address-start">Chọn điểm đón</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('place_from')"
                                        v-html="'( ' + booking.errors.get('place_from') + ' )'"
                                    >
                                    </span>
                                    <select name="address-start" id="address-start" v-model="booking.place_from">
                                        <option value="" disabled>Chọn điểm đón</option>
                                        <option v-for="place in places" :key="place.id" :value="place.id">{{ place.name }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="address-end">Chọn điểm đến</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('place_to')"
                                        v-html="'( ' + booking.errors.get('place_to') + ' )'"
                                    >
                                    </span>
                                    <select name="address-end" id="address-end" v-model="booking.place_to">
                                        <option value="" disabled>Chọn điểm đến</option>
                                        <option v-for="place in places" :key="place.id" :value="place.id">{{ place.name }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="time-start">Ngày bắt đầu</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('start')"
                                        v-html="'( ' + booking.errors.get('start') + ' )'"
                                    >
                                    </span>
                                    <input type="date" name="time-start" id="time-start" v-model="booking.start" />
                                </div>
                                <div class="col-md-6">
                                    <label for="time-end">Ngày kết thúc </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('end')"
                                        v-html="'( ' + booking.errors.get('end') + ' )'"
                                    >
                                    </span>
                                    <input type="date" name="time-end" id="time-end" v-model="booking.end" />
                                </div>
                                <div class="col-md-12">
                                    <label class="text-left" for="phone">Ghi chú </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('note')"
                                        v-html="'( ' + booking.errors.get('note') + ' )'"
                                    >
                                    </span>
                                    <textarea
                                        name="note"
                                        rows="4"
                                        laceholder="Để lại lời nhắn cho chúng tôi"
                                        v-model="booking.note"
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
        <!-- End Modal -->

        <!-- Modal validate OTP -->
        <div class="modal fade" id="validateModal" tabindex="-1" role="dialog" aria-labelledby="validateModalTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <form @submit.prevent="validateOtp()" @keydown="booking.onKeydown($event)">
                    <div class="modal-content">
                        <div class="modal-header styling-modal-header-update">
                            <h4 class="modal-title" id="validateModalTitle">Xác thực tài khoản</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <p class="alert alert-warning">Vui lòng không đóng biểu mẫu này khi đang xác thực mã OTP</p>
                                    <label class="text-left" for="name">Nhập mã OTP</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('code')"
                                        v-html="'( ' + booking.errors.get('code') + ' )'"
                                    >
                                    </span>
                                    <input
                                        type="number"
                                        name="code"
                                        id="code"
                                        v-model="booking.code"
                                        :placeholder="`Mã OTP đã được gửi tới ${booking.email}`"
                                    />
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
        <!-- End Modal -->

        <!-- Modal -->
        <div
            class="modal fade bd-example-modal-lg"
            id="bookModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="bookModalTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-lg" role="document">
                <form @submit.prevent="store()" @keydown="booking.onKeydown($event)">
                    <div class="modal-content">
                        <div class="modal-header styling-modal-header-update">
                            <h4 class="modal-title" id="bookModalTitle">Đặt thuê xe</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-6">
                                    <label for="category">Loại xe</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('car_id')"
                                        v-html="'( ' + booking.errors.get('car_id') + ' )'"
                                    >
                                    </span>
                                    <select name="category" id="category" v-model="booking.car_id">
                                        <option value="" disabled>Chọn loại xe</option>
                                        <option v-for="car in cars" :key="car.id" :value="car.id">
                                            {{ car.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="service">Dịch vụ thuê xe </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('service_id')"
                                        v-html="'( ' + booking.errors.get('service_id') + ' )'"
                                    >
                                    </span>
                                    <select name="service" id="service" v-model="booking.service_id">
                                        <option value="" disabled>Chọn dịch vụ</option>
                                        <option v-for="service in services" :key="service.id" :value="service.id">
                                            {{ service.name }}
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="address-start">Chọn điểm đón</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('place_from')"
                                        v-html="'( ' + booking.errors.get('place_from') + ' )'"
                                    >
                                    </span>
                                    <select name="address-start" id="address-start" v-model="booking.place_from">
                                        <option value="" disabled>Chọn điểm đón</option>
                                        <option v-for="place in places" :key="place.id" :value="place.id">{{ place.name }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="address-end">Chọn điểm đến</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('place_to')"
                                        v-html="'( ' + booking.errors.get('place_to') + ' )'"
                                    >
                                    </span>
                                    <select name="address-end" id="address-end" v-model="booking.place_to">
                                        <option value="" disabled>Chọn điểm đến</option>
                                        <option v-for="place in places" :key="place.id" :value="place.id">{{ place.name }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="time-start">Ngày bắt đầu</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('start')"
                                        v-html="'( ' + booking.errors.get('start') + ' )'"
                                    >
                                    </span>
                                    <input type="date" name="time-start" id="time-start" v-model="booking.start" />
                                </div>
                                <div class="col-md-6">
                                    <label for="time-end">Ngày kết thúc </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('end')"
                                        v-html="'( ' + booking.errors.get('end') + ' )'"
                                    >
                                    </span>
                                    <input type="date" name="time-end" id="time-end" v-model="booking.end" />
                                </div>
                                <div class="col-md-12">
                                    <label class="text-left" for="phone">Ghi chú </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="booking.errors.has('note')"
                                        v-html="'( ' + booking.errors.get('note') + ' )'"
                                    >
                                    </span>
                                    <textarea
                                        name="note"
                                        rows="4"
                                        laceholder="Để lại lời nhắn cho chúng tôi"
                                        v-model="booking.note"
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
        <!-- End Modal -->
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
            code_otp: '',
            customer_id: this.$customerId,
            service_popular: [],
            post_popular: [],
            services: [],
            cars: [],
            places: [],
            posts: [],
            car_slug: this.$route.params.slugCar,
            form: new Form({
                id: '',
                name: '',
                avatar: '',
                content: '',
                slug: '',
                tags: '',
                author: this.$adminId
            }),
            booking: new Form({
                id: '',
                user_id: '',
                full_name: '',
                phone_number: '',
                email: '',
                note: '',
                car_id: '',
                service_id: '',
                place_from: '',
                place_to: '',
                start: '',
                end: '',
                code: ''
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
            this.car_slug = to.params.slugCar
        }
    },
    methods: {
        book() {
            this.fetchPlaces()
            this.fetchCars()
            this.fetchServices()
            if (this.customer_id == null) {
                this.booking.clear()
                this.booking.reset()
                this.code_otp = ''
                $('#bookNoLogedModal').modal('show')
            } else {
                $('#bookModal').modal('show')
            }
        },
        close() {
            $('#bookNoLogedModal').modal('hide')
            $('#bookModal').modal('hide')
            $('#validateModal').modal('hide')
        },
        show(page_url) {
            page_url = `../../../api/customer/car/detail/${this.car_slug}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.form.fill(res.data[0])
                    let tags = res.data[0].tags.split(',')
                    this.form.tags = tags
                    this.form.avatar = `../../../public/images/car/${res.data[0].avatar}`
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
        fetchPlaces(page_url) {
            page_url = `../../../api/admin/manage-order/order/place`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.places = res.data
                })
                .catch((err) => console.log(err))
        },
        fetchCars(page_url) {
            page_url = `../../../api/admin/manage-car/car/all`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.cars = res.data
                })
                .catch((err) => console.log(err))
        },
        fetchServices(page_url) {
            page_url = `../../../api/admin/manage-service/service/all`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.services = res.data
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
        },
        storeNotLoged() {
            this.booking
                .post('../../api/customer/book-service/not-loged')
                .then((res) => {
                    if (this.booking.successful) {
                        if (res.data == 'errorPhone') {
                            this.$swal({
                                title: 'Số điện thoại không đúng định dạng!',
                                icon: 'error',
                                confirmButtonText: 'OK!',
                                timer: 3500
                            })
                        } else {
                            this.code_otp = res.data
                            $('#bookNoLogedModal').modal('hide')
                            $('#validateModal').modal('show')
                        }
                    } else {
                        this.$swal({
                            title: 'Lỗi!',
                            icon: 'error',
                            confirmButtonText: 'OK!',
                            timer: 3500
                        })
                    }
                })
                .catch((err) => console.log(err))
        },
        validateOtp() {
            if (this.booking.code != this.code_otp) {
                this.$swal({
                    title: 'Mã OTP không đúng!',
                    icon: 'error',
                    confirmButtonText: 'OK!',
                    timer: 3500
                })
            } else if (this.booking.code == '') {
                this.$swal({
                    title: 'Mã OTP không được để trống!',
                    icon: 'error',
                    confirmButtonText: 'OK!',
                    timer: 3500
                })
            } else {
                this.booking
                    .post('../../api/customer/book-service/validate')
                    .then((res) => {
                        if (this.booking.successful) {
                            if (res.data == 'errorIp') {
                                this.$swal({
                                    title: 'Mỗi ngày bạn chỉ được đặt 5 lần, vui lòng vui quay lại vào hôm sau!',
                                    icon: 'error',
                                    confirmButtonText: 'OK!',
                                    timer: 3500
                                })
                            } else {
                                $('#validateModal').modal('hide')
                                this.$swal({
                                    title: 'Đặt thuê xe thành công!',
                                    icon: 'success',
                                    confirmButtonText: 'OK!',
                                    timer: 3500
                                })
                            }
                        } else {
                            this.$swal({
                                title: 'Lỗi!',
                                icon: 'error',
                                confirmButtonText: 'OK!',
                                timer: 3500
                            })
                        }
                    })
                    .catch((err) => console.log(err))
            }
        },
        store() {
            this.booking.user_id = this.customer_id
            this.booking
                .post('../../api/customer/book-service/loged')
                .then((res) => {
                    if (this.booking.successful) {
                        if (res.data == 'errorIp') {
                            this.$swal({
                                title: 'Mỗi ngày bạn chỉ được đặt 5 lần, vui lòng vui quay lại vào hôm sau!',
                                icon: 'error',
                                confirmButtonText: 'OK!',
                                timer: 3500
                            })
                        } else {
                            this.$swal({
                                title: 'Đặt thuê xe thành công!',
                                icon: 'success',
                                confirmButtonText: 'OK!',
                                timer: 3500
                            })
                            $('#bookModal').modal('hide')
                        }
                    } else {
                        this.$swal({
                            title: 'Lỗi!',
                            icon: 'error',
                            confirmButtonText: 'OK!',
                            timer: 3500
                        })
                    }
                })
                .catch((err) => console.log(err))
        },
        slug(name) {
            var slug = ''
            // Change to lower case
            var nameLower = name.toLowerCase()
            // Letter "e"
            slug = nameLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e')
            // Letter "a"
            slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a')
            // Letter "o"
            slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o')
            // Letter "u"
            slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u')
            // Letter "d"
            slug = slug.replace(/đ/gi, 'd')
            // Trim the last whitespace
            slug = slug.replace(/\s*$/g, '')
            // Change whitespace to "-"
            slug = slug.replace(/\s+/g, '-')

            return slug
        },
        hashtag(slug) {
            axios
                .post(`../../../api/customer/hashtag/${slug}`)
                .then((res) => {
                    if (res.data[0] == 'post') {
                        window.location.href = `../../bai-viet/${res.data[1]}`
                    } else if (res.data[0] == 'car') {
                        window.location.href = `../../loai-xe/${res.data[1]}`
                    } else if (res.data[0] == 'service') {
                        window.location.href = `../../dich-vu-thue-xe/${res.data[1]}`
                    } else {
                        window.location.href = '../../404'
                    }
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
.text-tags {
    color: #000;
}
.text-tags:hover {
    color: #fff;
}
</style>
