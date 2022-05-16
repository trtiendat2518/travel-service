<template>
    <div class="card">
        <vue-snotify></vue-snotify>
        <div class="card-header">
            <div class="row">
                <div class="col-md-6">Danh sách các đơn đặt xe</div>
                <div class="col-md-6">
                    <button class="btn btn-primary btn-right" @click="create()">Tạo mới</button>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-3">
                    <div class="between:flex bottom:margin-3 ml-2">
                        <div class="center:flex-items">
                            <span class="right:marign-1">Hiển thị</span>
                            <select class="select form-select" id="form-select" v-model="currentEntries">
                                <option v-for="entry in showEntries" :key="entry" :value="entry">
                                    {{ entry }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <select class="select form-select" id="select-right" v-model="value">
                        <option value="">Xem tất cả đơn đặt thuê</option>
                        <option value="0">Đang xử lý</option>
                        <option value="1">Đã liên hệ</option>
                        <option value="2">Đã hoàn thành</option>
                        <option value="3">Đã bị huỷ</option>
                    </select>
                </div>
                <div class="col-md-5">
                    <input class="form-control form-search" v-model="query" placeholder="Tìm kiếm..." type="text" />
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-striped" id="table1">
                    <thead>
                        <tr>
                            <th>Mã đơn thuê xe</th>
                            <th>Họ và tên</th>
                            <th>Số điện thoại</th>
                            <th>Địa điểm đón</th>
                            <th>Địa điểm đến</th>
                            <th>Trạng thái</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="order in orders" :key="order.order_id">
                            <td>
                                <a href="javascript:void(0)" @click="detail(order)">
                                    {{ order.code }}
                                </a>
                            </td>
                            <td>{{ order.full_name }}</td>
                            <td class="text-center">
                                <div v-if="order.phone_number == 0">-</div>
                                <div v-else>{{ order.phone_number }}</div>
                            </td>
                            <td>{{ namePlaceFrom(order) }}</td>
                            <td>{{ namePlaceTo(order) }}</td>
                            <td>
                                <select
                                    class="form-select"
                                    v-model="order.status"
                                    @change="change($event, order)"
                                    name="order_status"
                                    :class="[
                                        {
                                            'btn-outline-secondary': order.status == 0
                                        },
                                        {
                                            'btn-outline-primary': order.status == 1
                                        },
                                        {
                                            'btn-outline-success': order.status == 2
                                        },
                                        {
                                            'btn-outline-danger': order.status == 3
                                        }
                                    ]"
                                >
                                    <option value="0" :hidden="order.status != 0">Đang chờ xử lý</option>
                                    <option value="1" :hidden="order.status > 1">Đã liên hệ</option>
                                    <option value="2" :hidden="order.status == 3">Đã hoàn thành</option>
                                    <option value="3" :hidden="order.status == 2">Đã huỷ</option>
                                </select>
                            </td>
                        </tr>
                        <tr v-show="!orders.length">
                            <td colspan="6">
                                <div class="alert alert-danger">Không tìm thấy kết quả phù hợp!</div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <pagination-component
                v-if="pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                @paginate="query === '' ? fetchOrders() : search()"
            >
            </pagination-component>
        </div>

        <!-- Modal -->
        <div
            class="modal fade bd-example-modal-lg"
            id="orderModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="orderModalTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-lg" role="document">
                <form @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
                    <div class="modal-content">
                        <div class="modal-header bg-primary">
                            <h5 class="modal-title white" id="orderModalTitle">{{ editMode ? 'Cập nhật' : 'Thêm mới' }} đơn thuê</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="first-name-icon"> Chọn dịch vụ <span class="required">(*)</span></label>
                                            <div class="position-relative">
                                                <select class="form-select select" name="service_id" v-model="form.service_id">
                                                    <option value="" disabled>Chọn dịch vụ</option>
                                                    <option v-for="service in services" :key="service.id" :value="service.id">
                                                        {{ service.name }}
                                                    </option>
                                                </select>
                                                <div
                                                    class="text-danger mb-3"
                                                    v-if="form.errors.has('service_id')"
                                                    v-html="form.errors.get('service_id')"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="first-name-icon"> Chọn loại xe <span class="required">(*)</span></label>
                                            <select class="form-select select" name="car_id" v-model="form.car_id">
                                                <option value="" disabled>Chọn loại xe</option>
                                                <option v-for="car in cars" :key="car.id" :value="car.id">{{ car.name }}</option>
                                            </select>
                                            <div
                                                class="text-danger mb-3"
                                                v-if="form.errors.has('car_id')"
                                                v-html="form.errors.get('car_id')"
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="first-name-icon"> Chọn điểm đón <span class="required">(*)</span></label>
                                            <div class="position-relative">
                                                <select class="form-select select" name="place_from" v-model="form.place_from">
                                                    <option value="" disabled>Chọn điểm đón</option>
                                                    <option v-for="place in places" :key="place.id" :value="place.id">
                                                        {{ place.name }}
                                                    </option>
                                                </select>
                                                <div
                                                    class="text-danger mb-3"
                                                    v-if="form.errors.has('place_from')"
                                                    v-html="form.errors.get('place_from')"
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="first-name-icon"> Chọn điểm đến <span class="required">(*)</span></label>
                                            <select class="form-select select" name="place_to" v-model="form.place_to">
                                                <option value="" disabled>Chọn điểm đến</option>
                                                <option v-for="place in places" :key="place.id" :value="place.id">
                                                    {{ place.name }}
                                                </option>
                                            </select>
                                            <div
                                                class="text-danger mb-3"
                                                v-if="form.errors.has('place_to')"
                                                v-html="form.errors.get('place_to')"
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="first-name-icon"> Chọn thời gian bắt đầu <span class="required">(*)</span></label>
                                            <div class="position-relative">
                                                <input type="datetime-local" class="form-control" name="start" v-model="form.start" />
                                            </div>
                                            <div
                                                class="text-danger mb-3"
                                                v-if="form.errors.has('start')"
                                                v-html="form.errors.get('start')"
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="first-name-icon"> Chọn thời gian kết thúc <span class="required">(*)</span></label>
                                            <input type="datetime-local" class="form-control" name="end" v-model="form.end" />
                                            <div
                                                class="text-danger mb-3"
                                                v-if="form.errors.has('end')"
                                                v-html="form.errors.get('end')"
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="first-name-icon"> Ghi chú <span class="required">(*)</span></label>
                                        <div class="position-relative">
                                            <textarea
                                                name="note"
                                                v-model="form.note"
                                                class="form-control"
                                                placeholder="Họ tên, Số điện thoại, Email của khách hàng"
                                            ></textarea>
                                        </div>
                                        <div class="text-danger mb-3" v-if="form.errors.has('note')" v-html="form.errors.get('note')"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary me-1 mb-1">{{ editMode ? 'Cập nhật' : 'Thêm mới' }}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <!-- Modal end-->

        <!-- Modal -->
        <div class="modal fade" id="DetailModal" tabindex="-1" role="dialog" aria-labelledby="DetailModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
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
                                    <td>
                                        Mã đơn: <strong> {{ form.code }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Tên khách hàng: <strong> {{ form.full_name }}</strong>
                                    </td>
                                </tr>
                                <tr v-show="form.phone_number != 0">
                                    <td>
                                        Số điện thoại: <strong> {{ form.phone_number }}</strong>
                                    </td>
                                </tr>
                                <tr v-show="form.email != 'null'">
                                    <td>
                                        Email: <strong>{{ form.email }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Dịch vụ thuê: <strong> {{ form.service_name }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Loại xe đã chọn: <strong> {{ form.car_name }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Điểm đón: <strong> {{ form.place_from_name }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Điểm đến: <strong> {{ form.place_to_name }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Thời gian bắt đầu: <strong> {{ form.start | formatDate }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Thời gian kết thúc: <strong> {{ form.end | formatDate }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Ghi chú: <strong> {{ form.note }}</strong>
                                    </td>
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
    </div>
</template>

<script>
import 'vue-snotify/styles/material.css'
export default {
    data() {
        return {
            orders: [],
            places: [],
            cars: [],
            services: [],
            pagination: {
                current_page: 1,
                last_page: 5
            },
            currentEntries: 10,
            showEntries: [5, 10, 25, 50],
            query: '',
            value: '',
            place_from: '',
            place_to: '',
            editMode: false,
            form: new Form({
                id: '',
                code: '',
                user_id: '',
                car_id: '',
                service_id: '',
                place_from: '',
                place_to: '',
                start: '',
                end: '',
                note: '',
                status: '',
                service_name: '',
                car_name: '',
                full_name: '',
                phone_number: '',
                email: '',
                place_from_name: '',
                place_to_name: ''
            })
        }
    },
    mounted() {
        this.fetchOrders()
        this.fetchPlaces()
    },
    watch: {
        currentEntries(number) {
            if (number === 10) {
                this.pagination = 1
                this.fetchOrders()
            } else {
                this.pagination = 1
                this.fetchOrders()
            }
        },
        query(keyword) {
            if (keyword === '') {
                this.fetchOrders()
            } else {
                this.value = ''
                this.pagination.current_page = 1
                this.search()
            }
        },
        value(value) {
            if (value === '') {
                this.fetchOrders()
            } else {
                this.query = ''
                this.pagination.current_page = 1
                this.filter()
            }
        }
    },
    methods: {
        empty() {
            return this.orders.length < 1
        },
        fetchOrders(page_url) {
            page_url = `../../api/admin/manage-order/order/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.orders = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
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
        search(page_url) {
            page_url = `../../api/admin/manage-order/order/search/${this.query}/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.orders = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        filter(page_url) {
            page_url = `../../api/admin/manage-order/order/filter/${this.value}/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.orders = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        create() {
            this.form.reset()
            this.form.clear()
            this.fetchCars()
            this.fetchServices()
            $('#orderModal').modal('show')
        },
        close() {
            $('#orderModal').modal('hide')
            $('#DetailModal').modal('hide')
        },
        store() {
            this.form.busy = true
            this.form
                .post('../../api/admin/manage-order/order')
                .then((res) => {
                    this.fetchOrders()
                    $('#orderModal').modal('hide')
                    if (this.form.successful) {
                        this.$snotify.success('Tạo mới thành công!')
                    } else {
                        this.$snotify.error('Không thể tạo mới', 'Lỗi')
                    }
                })
                .catch((err) => console.log(err))
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
        change(event, order) {
            this.form.status = event.target.value
            this.form
                .put(`../../api/admin/manage-order/order/${order.order_id}`)
                .then((res) => {
                    this.fetchOrders()
                    this.$snotify.success('Đã thay đổi trạng thái')
                })
                .catch((err) => console.log(err))
        },
        namePlaceFrom(order) {
            let place = this.places.filter((el) => {
                if (el.id == order.place_from) {
                    return el
                }
            })
            return place[0].name
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
textarea {
    resize: none;
}
#form-select {
    width: 25%;
    display: inline;
}
.form-search {
    float: right;
}
.btn-right {
    float: right;
}
.select-right {
    float: right;
}
.required {
    color: red;
}
</style>
