<template>
    <div class="card">
        <vue-snotify></vue-snotify>
        <div class="card-header">
            <div class="row">
                <div class="col-md-6">Danh sách các loại xe</div>
                <div class="col-md-6">
                    <button class="btn btn-primary btn-right" @click="create()">
                        <span><i class="bi bi-plus-circle"></i> Tạo mới</span>
                    </button>
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
                <div class="col-md-4"></div>
                <div class="col-md-5">
                    <input class="form-control form-search" v-model="query" placeholder="Tìm kiếm..." type="text" />
                </div>
            </div>
            <table class="table table-striped" id="table1">
                <thead>
                    <tr>
                        <th width="40%">Hình ảnh</th>
                        <th width="40%">Tên loại xe</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="car in cars" :key="car.car_id">
                        <td>
                            <img class="image-car" :src="`../public/images/car/${car.avatar}`" alt="" />
                        </td>
                        <td>{{ car.name }}</td>
                        <td>
                            <button class="btn btn-dark" v-if="car.status == 0" @click="change(car.id)">
                                <i class="bi bi-eye"></i>
                            </button>
                            <button class="btn btn-secondary" v-else-if="car.status == 1" @click="change(car.id)">
                                <i class="bi bi-eye-slash"></i>
                            </button>
                            <button class="btn btn-primary" @click="show(car)">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button class="btn btn-danger" @click="destroy(car.id)">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr v-show="!cars.length">
                        <td colspan="3">
                            <div class="alert alert-danger">Không tìm thấy kết quả phù hợp!</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <pagination-component
                v-if="pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                @paginate="query === '' ? fetchCars() : search()"
            >
            </pagination-component>
        </div>

        <div class="modal fade" id="carModal" tabindex="-1" role="dialog" aria-labelledby="carModalTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <form @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
                    <div class="modal-content">
                        <div class="modal-header bg-primary">
                            <h5 class="modal-title white" id="carModalTitle">{{ editMode ? 'Cập nhật' : 'Thêm mới' }} loại xe</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group has-icon-left">
                                        <label for="first-name-icon"> Tên loại xe <span class="required">(*)</span></label>
                                        <div class="position-relative">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Nhập tên loại xe"
                                                name="name"
                                                v-model="form.name"
                                            />
                                            <div class="form-control-icon">
                                                <i class="bi bi-truck"></i>
                                            </div>
                                        </div>
                                        <div class="text-danger mb-3" v-if="form.errors.has('name')" v-html="form.errors.get('name')"></div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="first-name-icon"> Hình ảnh <span :hidden="editMode" class="required">(*)</span></label>
                                        <div class="position-relative">
                                            <input
                                                type="file"
                                                class="form-control"
                                                name="avatar"
                                                id="avatar"
                                                ref="fileupload"
                                                @change="onAvatarChange"
                                            />
                                        </div>
                                        <div
                                            class="text-danger mb-3"
                                            v-if="form.errors.has('avatar')"
                                            v-html="form.errors.get('avatar')"
                                        ></div>
                                        <img class="styling-img-car center" v-if="form.avatar" :src="form.avatar" alt="car_avatar" />
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
    </div>
</template>

<script>
import 'vue-snotify/styles/material.css'
export default {
    data() {
        return {
            cars: [],
            pagination: {
                current_page: 1,
                last_page: 5
            },
            currentEntries: 10,
            showEntries: [5, 10, 25, 50],
            query: '',
            editMode: false,
            form: new Form({
                id: '',
                name: '',
                avatar: '',
                status: ''
            })
        }
    },
    mounted() {
        this.fetchCars()
    },
    watch: {
        currentEntries(number) {
            if (number === 5) {
                this.pagination = 1
                this.fetchCars()
            } else {
                this.pagination = 1
                this.fetchCars()
            }
        },
        query(keyword) {
            if (keyword === '') {
                this.fetchCars()
            } else {
                this.pagination.current_page = 1
                this.search()
            }
        }
    },
    methods: {
        empty() {
            return this.cars.length < 1
        },
        fetchCars(page_url) {
            page_url = `../../api/admin/manage-car/car/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.cars = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        create() {
            $('#carModal').modal('show')
        },
        close() {
            $('#carModal').modal('hide')
        },
        onAvatarChange(e) {
            const file = e.target.files[0]
            this.form.avatar = URL.createObjectURL(file)
        },
        store() {
            this.form.avatar = document.getElementById('avatar').files[0]
            this.form
                .post('../../api/admin/manage-car/car')
                .then((res) => {
                    if (this.form.successful) {
                        $('#carModal').modal('hide')
                        this.$snotify.success('Thêm mới thành công!')
                        this.fetchCars()
                        this.form.reset()
                        this.form.clear()
                        this.$refs.fileupload.value = ''
                    }
                })
                .catch((err) => {
                    this.$snotify.error(err)
                })
        },
        search(page_url) {
            page_url = `../../api/admin/manage-car/car/search/${this.query}/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.cars = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        change(carId) {
            axios
                .patch(`../../api/admin/manage-car/car/change/${carId}`)
                .then((res) => {
                    this.fetchCars()
                    this.$snotify.success('Cập nhật trạng thái thành công!')
                })
                .catch((err) => console.log(err))
        },
        destroy(carId) {
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
                                .delete(`../../api/admin/manage-car/car/${carId}`)
                                .then((res) => {
                                    this.$snotify.success('Đã xóa!')
                                    this.fetchCars()
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
        show(car) {
            this.editMode = true
            this.form.reset()
            this.form.clear()
            this.form.fill(car)
            this.form.avatar = `../public/images/car/${car.avatar}`
            $('#carModal').modal('show')
        },
        update() {
            this.form.avatar = document.getElementById('avatar').files[0]
            this.form
                .post(`../../api/admin/manage-car/car/upgrade/${this.form.id}`)
                .then((res) => {
                    $('#carModal').modal('hide')
                    this.$snotify.success('Cập nhật thành công!')
                    this.fetchCars()
                    this.$refs.fileupload.value = ''
                })
                .catch((err) => {
                    this.$snotify.error('Lỗi')
                })
        }
    }
}
</script>

<style scoped>
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
.styling-img-car {
    display: block;
    width: 30vw;
    height: 40vh;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
}
.image-car {
    width: 10vw;
    height: 10vh;
}
</style>
