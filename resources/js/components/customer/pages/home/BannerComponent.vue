<template>
    <div>
        <div class="banner">
            <VueSlickCarousel
                :arrows="true"
                :dots="false"
                :infinite="true"
                :slidesToShow="1"
                :slidesToScroll="1"
                :autoplay="true"
                :speed="3000"
                :autoplaySpeed="2000"
                v-if="post_popular.length > 0"
            >
                <div class="item" v-for="post in post_popular" :key="post.id">
                    <img class="decrease-brightness post-img" :src="`public/images/post/${post.avatar}`" alt="" />
                    <div class="caption">
                        <h1>{{ post.name }}</h1>
                    </div>
                </div>
            </VueSlickCarousel>

            <div class="caption">
                <button class="btn btn-primary btn-booking btn-lg" @click="book()">
                    <i class="fa-solid fa-hand-point-right"></i>
                    <span id="button-booking-banner"> &nbsp;Đặt xe ngay&nbsp; </span>
                    <i class="fa-solid fa-hand-point-left"></i>
                </button>
            </div>
        </div>

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
                <form @submit.prevent="storeNotLoged()" @keydown="form.onKeydown($event)">
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
                                        v-if="form.errors.has('full_name')"
                                        v-html="'( ' + form.errors.get('full_name') + ' )'"
                                    >
                                    </span>
                                    <input
                                        type="text"
                                        name="full_name"
                                        id="full_name"
                                        v-model="form.full_name"
                                        placeholder="Nhập đầy đủ họ tên"
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label class="text-left" for="phone">Số điện thoại </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="form.errors.has('phone_number')"
                                        v-html="'( ' + form.errors.get('phone_number') + ' )'"
                                    >
                                    </span>
                                    <input
                                        type="number"
                                        name="phone_number"
                                        id="phone_number"
                                        v-model="form.phone_number"
                                        placeholder="Nhập số điện thoại"
                                    />
                                </div>
                                <div class="col-md-12">
                                    <label class="text-left" for="phone">Địa chỉ Email </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="form.errors.has('email')"
                                        v-html="'( ' + form.errors.get('email') + ' )'"
                                    >
                                    </span>
                                    <input type="email" name="email" id="email" v-model="form.email" placeholder="Nhập Email" />
                                </div>
                                <div class="col-md-6">
                                    <label for="category">Loại xe</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="form.errors.has('car_id')"
                                        v-html="'( ' + form.errors.get('car_id') + ' )'"
                                    >
                                    </span>
                                    <select name="category" id="category" v-model="form.car_id">
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
                                        v-if="form.errors.has('service_id')"
                                        v-html="'( ' + form.errors.get('service_id') + ' )'"
                                    >
                                    </span>
                                    <select name="service" id="service" v-model="form.service_id">
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
                                        v-if="form.errors.has('place_from')"
                                        v-html="'( ' + form.errors.get('place_from') + ' )'"
                                    >
                                    </span>
                                    <select name="address-start" id="address-start" v-model="form.place_from">
                                        <option value="" disabled>Chọn điểm đón</option>
                                        <option v-for="place in places" :key="place.id" :value="place.id">{{ place.name }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="address-end">Chọn điểm đến</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="form.errors.has('place_to')"
                                        v-html="'( ' + form.errors.get('place_to') + ' )'"
                                    >
                                    </span>
                                    <select name="address-end" id="address-end" v-model="form.place_to">
                                        <option value="" disabled>Chọn điểm đến</option>
                                        <option v-for="place in places" :key="place.id" :value="place.id">{{ place.name }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="time-start">Ngày bắt đầu</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="form.errors.has('start')"
                                        v-html="'( ' + form.errors.get('start') + ' )'"
                                    >
                                    </span>
                                    <input type="date" name="time-start" id="time-start" v-model="form.start" />
                                </div>
                                <div class="col-md-6">
                                    <label for="time-end">Ngày kết thúc </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="form.errors.has('end')"
                                        v-html="'( ' + form.errors.get('end') + ' )'"
                                    >
                                    </span>
                                    <input type="date" name="time-end" id="time-end" v-model="form.end" />
                                </div>
                                <div class="col-md-12">
                                    <label class="text-left" for="phone">Ghi chú </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="form.errors.has('note')"
                                        v-html="'( ' + form.errors.get('note') + ' )'"
                                    >
                                    </span>
                                    <textarea
                                        name="note"
                                        rows="4"
                                        laceholder="Để lại lời nhắn cho chúng tôi"
                                        v-model="form.note"
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
                <form @submit.prevent="validateOtp()" @keydown="form.onKeydown($event)">
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
                                        v-if="form.errors.has('code')"
                                        v-html="'( ' + form.errors.get('code') + ' )'"
                                    >
                                    </span>
                                    <input
                                        type="number"
                                        name="code"
                                        id="code"
                                        v-model="form.code"
                                        :placeholder="`Mã OTP đã được gửi tới ${form.email}`"
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
                <form @submit.prevent="store()" @keydown="form.onKeydown($event)">
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
                                        v-if="form.errors.has('car_id')"
                                        v-html="'( ' + form.errors.get('car_id') + ' )'"
                                    >
                                    </span>
                                    <select name="category" id="category" v-model="form.car_id">
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
                                        v-if="form.errors.has('service_id')"
                                        v-html="'( ' + form.errors.get('service_id') + ' )'"
                                    >
                                    </span>
                                    <select name="service" id="service" v-model="form.service_id">
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
                                        v-if="form.errors.has('place_from')"
                                        v-html="'( ' + form.errors.get('place_from') + ' )'"
                                    >
                                    </span>
                                    <select name="address-start" id="address-start" v-model="form.place_from">
                                        <option value="" disabled>Chọn điểm đón</option>
                                        <option v-for="place in places" :key="place.id" :value="place.id">{{ place.name }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="address-end">Chọn điểm đến</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="form.errors.has('place_to')"
                                        v-html="'( ' + form.errors.get('place_to') + ' )'"
                                    >
                                    </span>
                                    <select name="address-end" id="address-end" v-model="form.place_to">
                                        <option value="" disabled>Chọn điểm đến</option>
                                        <option v-for="place in places" :key="place.id" :value="place.id">{{ place.name }}</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="time-start">Ngày bắt đầu</label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="form.errors.has('start')"
                                        v-html="'( ' + form.errors.get('start') + ' )'"
                                    >
                                    </span>
                                    <input type="date" name="time-start" id="time-start" v-model="form.start" />
                                </div>
                                <div class="col-md-6">
                                    <label for="time-end">Ngày kết thúc </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="form.errors.has('end')"
                                        v-html="'( ' + form.errors.get('end') + ' )'"
                                    >
                                    </span>
                                    <input type="date" name="time-end" id="time-end" v-model="form.end" />
                                </div>
                                <div class="col-md-12">
                                    <label class="text-left" for="phone">Ghi chú </label>
                                    <span
                                        class="text-danger ml-2"
                                        v-if="form.errors.has('note')"
                                        v-html="'( ' + form.errors.get('note') + ' )'"
                                    >
                                    </span>
                                    <textarea
                                        name="note"
                                        rows="4"
                                        laceholder="Để lại lời nhắn cho chúng tôi"
                                        v-model="form.note"
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
            post_popular: [],
            services: [],
            places: [],
            cars: [],
            form: new Form({
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
            })
        }
    },
    mounted() {
        this.showPostPopular()
        this.fetchPlaces()
        this.fetchCars()
        this.fetchServices()
    },
    methods: {
        book() {
            if (this.customer_id == null) {
                this.form.clear()
                this.form.reset()
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
        fetchPlaces(page_url) {
            page_url = `../../api/admin/manage-order/order/place`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.places = res.data
                })
                .catch((err) => console.log(err))
        },
        fetchCars(page_url) {
            page_url = `../../api/admin/manage-car/car/all`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.cars = res.data
                })
                .catch((err) => console.log(err))
        },
        fetchServices(page_url) {
            page_url = `../../api/admin/manage-service/service/all`
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
            this.form
                .post('../../api/customer/book-service/not-loged')
                .then((res) => {
                    if (this.form.successful) {
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
            if (this.form.code != this.code_otp) {
                this.$swal({
                    title: 'Mã OTP không đúng!',
                    icon: 'error',
                    confirmButtonText: 'OK!',
                    timer: 3500
                })
            } else if (this.form.code == '') {
                this.$swal({
                    title: 'Mã OTP không được để trống!',
                    icon: 'error',
                    confirmButtonText: 'OK!',
                    timer: 3500
                })
            } else {
                this.form
                    .post('../../api/customer/book-service/validate')
                    .then((res) => {
                        if (this.form.successful) {
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
                                this.sendMail()
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
            this.form.user_id = this.customer_id
            this.form
                .post('../../api/customer/book-service/loged')
                .then((res) => {
                    if (this.form.successful) {
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
                            this.sendMail()
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
        sendMail() {
            let formData = new FormData()
            formData.append('email', this.form.email)
            formData.append('id', this.customer_id)
            axios.post(`../../api/customer/book-service/send-mail`, formData).catch((err) => {
                console.log(err)
            })
        }
    }
}
</script>

<style scoped>
/* #button-booking-banner {
    padding: 0;
} */
textarea {
    resize: none;
}
a:hover {
    color: #fff;
}
.decrease-brightness {
    filter: brightness(30%);
}
.slick-list .slick-slide .item {
    padding: 0px;
}
.post-img {
    width: 100vw;
    height: 110vh;
}
.caption {
    position: absolute !important;
    text-align: center;
}
.btn-booking {
    margin-top: 100vh;
    background-color: #2f7ed3;
    border-color: #2f7ed3;
}

.btn-booking:hover {
    background-color: #3a8adc;
    border-color: #3a8adc;
}
@media (min-width: 200px) {
    .btn-booking {
        margin-top: 20vh;
    }
    .post-img {
        height: 30vh;
    }
}

@media (min-width: 300px) {
    .btn-booking {
        margin-top: 30vh;
    }
    .post-img {
        height: 40vh;
    }
}

@media (min-width: 600px) {
    .btn-booking {
        width: 200px;
        height: 60px;
        margin-top: 50vh;
    }
    .post-img {
        height: 60vh;
    }
}

@media only screen and (min-width: 768px) {
    .btn-booking {
        width: 250px;
        height: 70px;
        margin-top: 70vh;
    }
    .post-img {
        height: 80vh;
    }
}

@media (min-width: 900px) {
    .btn-booking {
        width: 300px;
        height: 90px;
        margin-top: 80vh;
    }
    .post-img {
        height: 100vh;
    }
}

@media only screen and (min-width: 1200px) {
    .btn-booking {
        width: 300px;
        height: 90px;
        margin-top: 90vh;
    }
    .post-img {
        height: 110vh;
    }
}
</style>
