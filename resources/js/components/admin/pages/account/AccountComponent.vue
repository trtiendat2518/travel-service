<template>
    <div class="card">
        <vue-snotify></vue-snotify>
        <div class="card-header">
            <div class="row">
                <div class="col-md-6">Danh sách các tài khoản</div>
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
                <div class="col-md-4">
                    <select class="select form-select" id="select-right" v-model="value">
                        <option value="">Tất cả người dùng</option>
                        <option value="0">Quản trị viên</option>
                        <option value="1">Khách hàng</option>
                    </select>
                </div>
                <div class="col-md-5">
                    <input class="form-control form-search" v-model="query" placeholder="Tìm kiếm..." type="text" />
                </div>
            </div>
            <table class="table table-striped" id="table1">
                <thead>
                    <tr>
                        <th>Họ và tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Loại tài khoản</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="account in accounts" :key="account.id">
                        <td>{{ account.full_name }}</td>
                        <td>{{ account.email }}</td>
                        <td>{{ account.phone_number }}</td>
                        <td>
                            <div v-if="account.role == 0">Quản trị viên</div>
                            <div v-else-if="account.role == 1">Khách hàng</div>
                        </td>
                        <td>
                            <button class="btn btn-dark" v-if="account.status == 0" @click="change(account.id)">
                                <i class="bi bi-eye"></i>
                            </button>
                            <button class="btn btn-secondary" v-else-if="account.status == 1" @click="change(account.id)">
                                <i class="bi bi-eye-slash"></i>
                            </button>
                            <button class="btn btn-primary" @click="show(account)">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button class="btn btn-danger" @click="destroy(account.id)">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <pagination-component
                v-if="pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                @paginate="query === '' ? fetchAccounts() : search()"
            >
            </pagination-component>
        </div>

        <div
            class="modal fade bd-example-modal-lg"
            id="userModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="userModalTitle"
            aria-hidden="true"
        >
            <div class="modal-dialog modal-lg" role="document">
                <form @submit.prevent="editMode ? update() : store()" @keydown="form.onKeydown($event)">
                    <div class="modal-content">
                        <div class="modal-header bg-primary">
                            <h5 class="modal-title white" id="userModalTitle">{{ editMode ? 'Cập nhật' : 'Thêm mới' }} tài khoản</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="close()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-6">
                                    <div class="form-group has-icon-left">
                                        <label for="first-name-icon"> Họ và tên </label>
                                        <div class="position-relative">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Nhập họ và tên"
                                                id="full_name"
                                                name="full_name"
                                                v-model="form.full_name"
                                                :disabled="editMode"
                                                :class="{ 'not-allowed': editMode }"
                                            />
                                            <div class="form-control-icon">
                                                <i class="bi bi-person"></i>
                                            </div>
                                        </div>
                                        <div
                                            class="text-danger mb-3"
                                            v-if="form.errors.has('full_name')"
                                            v-html="form.errors.get('full_name')"
                                        ></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group has-icon-left">
                                        <label for="email-id-icon">Email</label>
                                        <div class="position-relative">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="abc@email.com"
                                                id="email"
                                                name="email"
                                                v-model="form.email"
                                                :disabled="editMode"
                                                :class="{ 'not-allowed': editMode }"
                                            />
                                            <div class="form-control-icon">
                                                <i class="bi bi-envelope"></i>
                                            </div>
                                        </div>
                                        <div
                                            class="text-danger mb-3"
                                            v-if="form.errors.has('email')"
                                            v-html="form.errors.get('email')"
                                        ></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group has-icon-left">
                                        <label for="mobile-id-icon"> Số điện thoại </label>
                                        <div class="position-relative">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="0123456789"
                                                id="phone_number"
                                                name="phone_number"
                                                v-model="form.phone_number"
                                                :disabled="editMode"
                                                :class="{ 'not-allowed': editMode }"
                                            />
                                            <div class="form-control-icon">
                                                <i class="bi bi-phone"></i>
                                            </div>
                                        </div>
                                        <div
                                            class="text-danger mb-3"
                                            v-if="form.errors.has('phone_number')"
                                            v-html="form.errors.get('phone_number')"
                                        ></div>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group has-icon-left">
                                        <label for="password-id-icon">Loại tài khoản</label>
                                        <div class="position-relative">
                                            <select class="form-select select" id="role" name="role" v-model="form.role">
                                                <option value="">Chọn loại tài khoản</option>
                                                <option value="0">Quản trị viên</option>
                                                <option value="1">Khách hàng</option>
                                            </select>
                                            <!-- <div class="form-control-icon">
                                                <i class="bi bi-lock"></i>
                                            </div> -->
                                        </div>
                                        <div class="text-danger mb-3" v-if="form.errors.has('role')" v-html="form.errors.get('role')"></div>
                                    </div>
                                </div>
                                <div class="col-12" :hidden="editMode">
                                    <div class="form-group has-icon-left">
                                        <label for="password-id-icon">Password</label>
                                        <div class="position-relative">
                                            <input
                                                type="password"
                                                class="form-control"
                                                placeholder="*******"
                                                id="password"
                                                name="password"
                                                v-model="form.password"
                                            />
                                            <div class="form-control-icon">
                                                <i class="bi bi-lock"></i>
                                            </div>
                                        </div>
                                        <div
                                            class="text-danger mb-3"
                                            v-if="form.errors.has('password')"
                                            v-html="form.errors.get('password')"
                                        ></div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group has-icon-left">
                                        <label for="password-id-icon">Địa chỉ</label>
                                        <div class="position-relative">
                                            <textarea
                                                name="address"
                                                id="address"
                                                rows="2"
                                                class="form-control"
                                                placeholder="..."
                                                v-model="form.address"
                                            ></textarea>
                                        </div>
                                        <div
                                            class="text-danger mb-3"
                                            v-if="form.errors.has('address')"
                                            v-html="form.errors.get('address')"
                                        ></div>
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
            accounts: [],
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
                full_name: '',
                email: '',
                phone_number: '',
                role: '',
                address: '',
                status: '',
                password: ''
            })
        }
    },
    mounted() {
        this.fetchAccounts()
    },
    watch: {
        currentEntries(number) {
            if (number === 10) {
                this.pagination = 1
                this.fetchAccounts()
            } else {
                this.pagination = 1
                this.fetchAccounts()
            }
        },
        query(keyword) {
            if (keyword === '') {
                this.value = ''
                this.fetchAccounts()
            } else {
                this.pagination.current_page = 1
                this.search()
            }
        },
        value(value) {
            if (value === '') {
                this.query = ''
                this.fetchAccounts()
            } else {
                this.pagination.current_page = 1
                this.filter()
            }
        }
    },
    methods: {
        empty() {
            return this.accounts.length < 1
        },
        fetchAccounts(page_url) {
            page_url = `../../api/admin/manage-user/user/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.accounts = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        create() {
            this.editMode = false
            this.form.reset()
            this.form.clear()
            $('#userModal').modal('show')
        },
        close() {
            $('#userModal').modal('hide')
        },
        store() {
            this.form.busy = true
            this.form
                .post('../../api/admin/manage-user/user')
                .then((res) => {
                    this.fetchAccounts()
                    $('#userModal').modal('hide')
                    if (this.form.successful) {
                        this.$snotify.success('Tạo mới thành công!')
                    } else {
                        this.$snotify.error('Không thể tạo mới', 'Lỗi')
                    }
                })
                .catch((err) => console.log(err))
        },
        show(account) {
            this.editMode = true
            this.form.reset()
            this.form.clear()
            this.form.fill(account)
            $('#userModal').modal('show')
        },
        update() {
            this.form
                .put(`../../api/admin/manage-user/user/${this.form.id}`)
                .then((res) => {
                    this.fetchAccounts()
                    $('#userModal').modal('hide')
                    console.log(this.form.successful)
                    if (this.form.successful) {
                        this.$snotify.success('Cập nhật thành công!')
                    } else {
                        this.$snotify.error('Không thể cập nhật', 'Lỗi')
                    }
                    this.form.reset()
                    this.form.clear()
                })
                .catch((err) => console.log(err))
        },
        destroy(userId) {
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
                                .delete(`../../api/admin/manage-user/user/${userId}`)
                                .then((res) => {
                                    this.$snotify.success('Đã xóa!')
                                    let checkData = this.accounts.length - 1
                                    if (checkData == 0) {
                                        this.pagination.current_page = this.pagination.current_page - 1
                                    }
                                    this.fetchAccounts()
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
            page_url = `../../api/admin/manage-user/user/search/${this.query}/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.accounts = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        filter(page_url) {
            page_url = `../../api/admin/manage-user/user/filter/${this.value}/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.accounts = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        change(userId) {
            axios
                .patch(`../../api/admin/manage-user/user/change/${userId}`)
                .then((res) => {
                    this.fetchAccounts()
                    this.$snotify.success('Cập nhật trạng thái thành công!')
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
</style>
