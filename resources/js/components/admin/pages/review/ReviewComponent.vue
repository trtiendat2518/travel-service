<template>
    <div class="card">
        <vue-snotify></vue-snotify>
        <div class="card-header">
            <div class="row">
                <div class="col-md-12">Danh sách đánh giá của khách hàng</div>
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
                        <option value="">Xem tất cả</option>
                        <option value="1">Đánh giá 1 sao</option>
                        <option value="2">Đánh giá 2 sao</option>
                        <option value="3">Đánh giá 3 sao</option>
                        <option value="4">Đánh giá 4 sao</option>
                        <option value="5">Đánh giá 5 sao</option>
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
                            <th>Họ và tên</th>
                            <th>Số điện thoại</th>
                            <th>Ngày đánh giá</th>
                            <th>Đánh giá</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="review in reviews" :key="review.id">
                            <td>
                                <a href="javascript:void(0)" @click="detail(review)">
                                    {{ review.full_name }}
                                </a>
                            </td>
                            <td>{{ review.phone_number }}</td>
                            <td>{{ review.created_at | formatFullTime }}</td>
                            <td>
                                <span v-for="star in review.star" :key="'star' + star"
                                    >&nbsp;<i class="bi bi-star-fill star-color"></i
                                ></span>
                                <span v-for="star in 5 - review.star" :key="star"><i class="bi bi-star star-color"></i>&nbsp;</span>
                            </td>
                            <td>
                                <button class="btn btn-dark" v-if="review.status == 0" @click="update(review.id)">
                                    <i class="bi bi-eye"></i>
                                </button>
                                <button class="btn btn-secondary" v-else-if="review.status == 1" @click="update(review.id)">
                                    <i class="bi bi-eye-slash"></i>
                                </button>
                                <button class="btn btn-danger" @click="destroy(review.id)">
                                    <i class="bi bi-trash"></i>
                                </button>
                            </td>
                        </tr>
                        <tr v-show="!reviews.length">
                            <td colspan="5">
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
                @paginate="query === '' ? fetchReviews() : search()"
            >
            </pagination-component>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="DetailModal" tabindex="-1" role="dialog" aria-labelledby="DetailModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <h5 class="modal-title white" id="DetailModalTitle">Chi tiết đánh giá</h5>
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
                                        Tên khách hàng: <strong> {{ form.full_name }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Số điện thoại: <strong> {{ form.phone_number }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Email: <strong>{{ form.email }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Ngày gửi: <strong> {{ form.created_at | formatFullTime }}</strong>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Ghi chú: <strong> {{ form.comment }}</strong>
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
            reviews: [],
            pagination: {
                current_page: 1,
                last_page: 5
            },
            currentEntries: 10,
            showEntries: [5, 10, 25, 50],
            query: '',
            value: '',
            editMode: false,
            form: new Form({
                id: '',
                comment: '',
                star: '',
                full_name: '',
                email: '',
                phone_number: '',
                created_at: '',
                car_name: '',
                service_name: '',
                place_from: '',
                place_to: ''
            })
        }
    },
    mounted() {
        this.fetchReviews()
    },
    watch: {
        currentEntries(number) {
            if (number === 10) {
                this.pagination = 1
                this.fetchReviews()
            } else {
                this.pagination = 1
                this.fetchReviews()
            }
        },
        query(keyword) {
            if (keyword === '') {
                this.fetchReviews()
            } else {
                this.value = ''
                this.pagination.current_page = 1
                this.search()
            }
        },
        value(value) {
            if (value === '') {
                this.fetchReviews()
            } else {
                this.query = ''
                this.pagination.current_page = 1
                this.filter()
            }
        }
    },
    methods: {
        empty() {
            return this.reviews.length < 1
        },
        fetchReviews(page_url) {
            page_url = `../../api/admin/manage-review/review/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.reviews = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        close() {
            $('#DetailModal').modal('hide')
        },
        detail(review) {
            this.form.reset()
            this.form.clear()
            this.form.fill(review)
            $('#DetailModal').modal('show')
        },
        update(reviewId) {
            this.form
                .put(`../../api/admin/manage-review/review/${reviewId}`)
                .then((res) => {
                    this.fetchReviews()
                    this.$snotify.success('Cập nhật thành công!')
                })
                .catch((err) => console.log(err))
        },
        destroy(reviewId) {
            this.$snotify.clear()
            this.$snotify.confirm('Xác nhận xóa', {
                timeout: 5000,
                showProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                buttons: [
                    {
                        text: 'Xóa',
                        action: (toast) => {
                            this.$snotify.remove(toast.id)
                            axios
                                .delete(`../../api/admin/manage-review/review/${reviewId}`)
                                .then((res) => {
                                    this.$snotify.success('Đã xóa!')
                                    let checkData = this.reviews.length - 1
                                    if (checkData == 0) {
                                        this.pagination.current_page = this.pagination.current_page - 1
                                    }
                                    this.fetchReviews()
                                })
                                .catch((err) => console.log(err))
                        },
                        bold: false
                    },
                    {
                        text: 'Đóng',
                        action: (toast) => {
                            this.$snotify.remove(toast.id)
                        },
                        bold: true
                    }
                ]
            })
        },
        search(page_url) {
            page_url = `../../api/admin/manage-review/review/search/${this.query}/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.reviews = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        filter(page_url) {
            page_url = `../../api/admin/manage-review/review/filter/${this.value}/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.reviews = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
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
.not-allowed {
    cursor: not-allowed;
}
.star-color {
    color: #ffc107;
}
</style>
