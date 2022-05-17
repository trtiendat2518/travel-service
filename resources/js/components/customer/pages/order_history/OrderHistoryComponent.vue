<template>
    <div class="table-responsive">
        <div class="table">
            <table class="border table-striped">
                <thead class="bg-2">
                    <tr>
                        <th class="text-center">Mã đơn</th>
                        <th class="text-center">Nơi đến</th>
                        <th class="text-center">Ngày đặt</th>
                        <th class="text-center">Trạng thái</th>
                        <th class="text-center">Đánh giá</th>
                    </tr>
                </thead>
                <tbody class="border bg-2">
                    <tr v-for="order in orders" :key="order.order_id">
                        <td class="text-center">
                            <a href="javascript:void(0)" @click="detail(order)">
                                {{ order.code }}
                            </a>
                        </td>
                        <td class="text-center">
                            {{ namePlaceTo(order) }}
                        </td>
                        <td class="text-center">{{ order.created_at | formatFullTime }}</td>
                        <td class="text-center">
                            <div class="standby" v-if="order.status == 0">Chờ xử lý</div>
                            <div class="contacted" v-else-if="order.status == 1">Đã liên hệ</div>
                            <div class="done" v-else-if="order.status == 2">Đã hoàn thành</div>
                            <div class="cancel" v-else-if="order.status == 3">Bị huỷ</div>
                        </td>
                        <td class="text-center">
                            <div v-if="order.status > 1">
                                <div v-show="checkReview(order) > 0">
                                    <span v-for="star in stars" :key="'star' + star">
                                        &nbsp;<i class="fa-solid fa-star star-color"></i
                                    ></span>
                                    <span v-for="star in 5 - stars" :key="star"><i class="fa-solid fa-star star-disable"></i>&nbsp;</span>
                                </div>
                                <div v-show="checkReview(order) < 0">
                                    <button class="btn btn-primary" :disabled="checkReview(order) > 0" @click="createReview(order)">
                                        Đánh giá
                                    </button>
                                </div>
                            </div>
                            <div v-else>Chưa thể đánh giá</div>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- Modal -->
            <div
                class="modal fade bd-example-modal-lg"
                id="DetailModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="DetailModalTitle"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header bg-custom">
                            <h5 class="modal-title white" id="DetailModalTitle">Chi tiết đơn đặt thuê</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <table class="table row table-borderless w-100 m-0 border">
                                <tbody class="col-lg-12 p-0">
                                    <tr>
                                        <td class="h3-strong">
                                            <h3><strong> Thông tin chi tiết</strong></h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <div class="row">
                                            <div class="col-md-6 pad10">
                                                Mã đơn: <strong> {{ form.code }}</strong>
                                            </div>
                                            <div class="col-md-6 pad10">
                                                Tên khách hàng: <strong> {{ form.full_name }}</strong>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div class="row">
                                            <div class="col-md-6 pad10">
                                                Số điện thoại: <strong> {{ form.phone_number }}</strong>
                                            </div>
                                            <div class="col-md-6 pad10">
                                                Email: <strong>{{ form.email }}</strong>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div class="row">
                                            <div class="col-md-6 pad10">
                                                Dịch vụ thuê: <strong> {{ form.service_name }}</strong>
                                            </div>
                                            <div class="col-md-6 pad10">
                                                Loại xe đã chọn: <strong> {{ form.car_name }}</strong>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div class="row">
                                            <div class="col-md-6 pad10">
                                                Điểm đón: <strong> {{ form.place_from_name }}</strong>
                                            </div>
                                            <div class="col-md-6 pad10">
                                                Điểm đến: <strong> {{ form.place_to_name }}</strong>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div class="row">
                                            <div class="col-md-6 pad10">
                                                Thời gian bắt đầu: <strong> {{ form.start | formatFullTime }}</strong>
                                            </div>
                                            <div class="col-md-6 pad10">
                                                Thời gian kết thúc: <strong> {{ form.end | formatFullTime }}</strong>
                                            </div>
                                        </div>
                                    </tr>
                                    <tr>
                                        <div class="row">
                                            <div class="col-md-12 pad10">
                                                Ghi chú: <strong> {{ form.note }}</strong>
                                            </div>
                                        </div>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary btn-3d" data-dismiss="modal" @click="close()">Đóng</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal end-->

            <!-- Modal -->
            <div class="modal fade" id="ReviewModal" tabindex="-1" role="dialog" aria-labelledby="ReviewModalTitle" aria-hidden="true">
                <div class="modal-dialog">
                    <form @submit.prevent="storeReview" @keydown="review.onKeydown($event)">
                        <div class="modal-content">
                            <div class="modal-header bg-custom">
                                <h5 class="modal-title white" id="ReviewModalTitle">Đánh giá mã đơn {{ form.code }}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="modal-body">
                                    <div class="row mb-3">
                                        <div class="col-md-12">
                                            <label class="text-left" for="name"><b>Đánh giá</b></label>
                                            <star-rating v-model="review.star" :star-size="30" :rating="0"></star-rating>
                                            <div
                                                class="text-danger ml-2"
                                                v-if="review.errors.has('star')"
                                                v-html="review.errors.get('star')"
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label class="text-left" for="name"><b>Ghi chú</b></label>
                                            <textarea name="comment" id="comment" rows="4" v-model="review.comment"></textarea>
                                            <div
                                                class="text-danger ml-2"
                                                v-if="review.errors.has('star')"
                                                v-html="review.errors.get('star')"
                                            ></div>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button class="text-center" type="submit">Gửi</button>
                                <button type="button" class="btn btn-secondary btn-3d" data-dismiss="modal" @click="close()">Đóng</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- Modal end-->
        </div>
    </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
    components: {
        StarRating
    },
    data() {
        return {
            orders: [],
            places: [],
            reviews: [],
            stars: 0,
            customer_id: this.$customerId,
            review: new Form({
                order_id: '',
                star: 0,
                comment: ''
            }),
            form: new Form({
                order_id: '',
                code: '',
                note: '',
                status: '',
                created_at: '',
                car_id: '',
                service_id: '',
                place_from: '',
                place_to: '',
                start: '',
                end: '',
                place_from_name: '',
                place_to_name: '',
                car_name: '',
                service_name: '',
                full_name: '',
                email: '',
                phone_number: ''
            })
        }
    },
    mounted() {
        this.fetchOrders()
        this.fetchPlaces()
        this.fetchReviews()
    },
    methods: {
        fetchPlaces(page_url) {
            page_url = `../../api/admin/manage-order/order/place`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.places = res.data
                })
                .catch((err) => console.log(err))
        },
        fetchOrders(page_url) {
            page_url = `../../../api/customer/order/history/${this.customer_id}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.orders = res.data
                })
                .catch((err) => console.log(err))
        },
        fetchReviews(page_url) {
            page_url = `../../../api/customer/order/show-review`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.reviews = res.data
                })
                .catch((err) => console.log(err))
        },
        checkReview(order) {
            let review = this.reviews.filter((el) => {
                if (el.order_id == order.order_id) {
                    return el
                }
            })

            if (review.length > 0) {
                this.stars = review[0].star
                return Number(review[0].star)
            } else {
                return Number(-1)
            }
        },
        detail(order) {
            this.form.reset()
            this.form.clear()
            this.form.fill(order)
            this.places.forEach((el) => {
                if (el.id == order.place_from) {
                    this.form.place_from_name = el.name
                }
                if (el.id == order.place_to) {
                    this.form.place_to_name = el.name
                }
            })
            $('#DetailModal').modal('show')
        },
        close() {
            $('#DetailModal').modal('hide')
            $('#ReviewModal').modal('hide')
        },
        createReview(order) {
            this.form.reset()
            this.form.clear()
            this.form.fill(order)
            $('#ReviewModal').modal('show')
        },
        storeReview() {
            this.review.order_id = this.form.order_id
            if (this.review.star == 0) {
                this.$swal({
                    title: 'Vui lòng chọn từ 1 đến 5 sao!',
                    icon: 'error',
                    confirmButtonText: 'OK!',
                    timer: 3500
                })
            } else {
                this.review
                    .post('../../api/customer/order/create-review')
                    .then((res) => {
                        if (this.review.successful) {
                            this.fetchOrders()
                            this.fetchReviews()
                            this.$swal({
                                title: 'Đánh giá thành công!',
                                icon: 'success',
                                confirmButtonText: 'OK!',
                                timer: 3500
                            })
                            $('#ReviewModal').modal('hide')
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
        namePlaceTo(order) {
            let place = this.places.filter((el) => {
                if (el.id == order.place_to) {
                    return el
                }
            })
            return place[0].name
        }
    }
}
</script>

<style scoped>
.bg-custom {
    background-color: #bf9c60;
    color: #fff;
    font-weight: bold;
}
.star-color {
    color: #ffc107;
}
.star-disable {
    color: #c1c1c1;
}
.done {
    padding-right: 10px;
    background-color: #65c065;
    padding-left: 10px;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
}
.standby {
    padding-right: 10px;
    background-color: #c1c1c1;
    padding-left: 10px;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
}
.contacted {
    padding-right: 10px;
    background-color: #454cde;
    padding-left: 10px;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
}
.cancel {
    padding-right: 10px;
    background-color: #d55d5d;
    padding-left: 10px;
    border-radius: 10px;
    text-align: center;
    font-weight: bold;
}
.pad10 {
    padding: 10px 10px 10px 40px;
}
td {
    color: black;
}
a {
    color: #454cde;
}
textarea {
    resize: none;
}
</style>
