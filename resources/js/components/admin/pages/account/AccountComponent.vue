<template>
    <div class="card">
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
                            <select
                                class="select form-select"
                                id="form-select"
                                v-model="currentEntries"
                            >
                                <option
                                    v-for="entry in showEntries"
                                    :key="entry"
                                    :value="entry"
                                >
                                    {{ entry }}
                                </option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <input
                        class="form-control form-search"
                        placeholder="Tìm kiếm..."
                        type="text"
                    />
                </div>
            </div>
            <table class="table table-striped" id="table1">
                <thead>
                    <tr>
                        <th>Họ và tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Loại tài khoản</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="account in accounts" :key="account.id">
                        <td>{{ account.name }}</td>
                        <td>{{ account.email }}</td>
                        <td>{{ account.phone }}</td>
                        <td>{{ account.role }}</td>
                        <td>
                            <span class="badge bg-success">{{
                                account.status
                            }}</span>
                        </td>
                        <td>
                            <button class="btn btn-dark">
                                <i class="bi bi-eye"></i>
                            </button>
                            <button class="btn btn-primary">
                                <i class="bi bi-pencil-square"></i>
                            </button>
                            <button class="btn btn-danger">
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
                        <div class="modal-header bg-primary">
                            <h5 class="modal-title white" id="loanModalTitle">
                                Tạo mới tài khoản
                            </h5>
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
                                <div class="col-12">
                                    <div class="form-group has-icon-left">
                                        <label for="first-name-icon">
                                            Họ và tên
                                        </label>
                                        <div class="position-relative">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Nhập họ và tên"
                                                id="first-name-icon"
                                            />
                                            <div class="form-control-icon">
                                                <i class="bi bi-person"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group has-icon-left">
                                        <label for="email-id-icon">Email</label>
                                        <div class="position-relative">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="abc@email.com"
                                                id="email-id-icon"
                                            />
                                            <div class="form-control-icon">
                                                <i class="bi bi-envelope"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group has-icon-left">
                                        <label for="mobile-id-icon">
                                            Số điện thoại
                                        </label>
                                        <div class="position-relative">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="0123456789"
                                                id="mobile-id-icon"
                                            />
                                            <div class="form-control-icon">
                                                <i class="bi bi-phone"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group has-icon-left">
                                        <label for="password-id-icon"
                                            >Password</label
                                        >
                                        <div class="position-relative">
                                            <input
                                                type="password"
                                                class="form-control"
                                                placeholder="*******"
                                                id="password-id-icon"
                                            />
                                            <div class="form-control-icon">
                                                <i class="bi bi-lock"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group has-icon-left">
                                        <label for="password-id-icon"
                                            >Vai trò</label
                                        >
                                        <div class="position-relative">
                                            <select
                                                type="password"
                                                class="form-select select"
                                                id="role-id-icon"
                                            >
                                                <option value="">
                                                    Chọn vai trò
                                                </option>
                                                <option value="1">
                                                    Đăng bài
                                                </option>
                                                <option value="1">
                                                    Kiểm duyệt bài
                                                </option>
                                            </select>
                                            <!-- <div class="form-control-icon">
                                                <i class="bi bi-lock"></i>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="submit"
                                class="btn btn-primary me-1 mb-1"
                            >
                                Tạo mới
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            accounts: [],
            pagination: {
                current_page: 1,
                last_page: 5,
            },
            currentEntries: 5,
            showEntries: [5, 10, 25, 50],
            query: "",
            editMode: false,
            form: new Form({
                adminh_id: "",
                admin_name: "",
                admin_email: "",
                admin_phone: "",
                admin_role: "",
                admin_status: "",
            }),
        };
    },
    mounted() {
        this.fetchAccounts();
    },
    watch: {
        currentEntries(number) {
            if (number === 5) {
                this.pagination = 1;
                this.fetchFaculties();
            } else {
                this.pagination = 1;
                this.fetchFaculties();
            }
        },
        // query(keyword) {
        //     if (keyword === "") {
        //         this.fetchFaculties();
        //     } else {
        //         this.pagination.current_page = 1;
        //         this.search();
        //     }
        // },
    },
    methods: {
        empty() {
            return this.accounts.length < 1;
        },
        fetchAccounts(page_url) {
            // page_url = `../../api/admin/edu-faculty/khoa/${this.currentEntries}?page=${this.pagination.current_page}`;
            // fetch(page_url)
            //     .then((res) => res.json())
            //     .then((res) => {
            //         this.accounts = res.data;
            //         this.pagination = res.meta;
            //     })
            //     .catch((err) => console.log(err));

            let obj = {};
            for (let i = 0; i < 10; i++) {
                this.form.adminh_id = i;
                this.form.admin_name = "Họ và tên " + i;
                this.form.admin_email = "email" + i + "@email.com";
                this.form.admin_phone =
                    "09" + Math.floor(Math.random() * 12345678);
                this.form.admin_role = "Đăng bài";
                this.form.admin_status = "active";

                obj = {
                    id: this.form.adminh_id,
                    name: this.form.admin_name,
                    email: this.form.admin_email,
                    phone: this.form.admin_phone,
                    role: this.form.admin_role,
                    status: this.form.admin_status,
                };

                this.accounts.push(obj);
            }
        },
        create() {
            $("#loanModal").modal("show");
        },
        close() {
            $("#loanModal").modal("hide");
        },
    },
};
</script>

<style scoped>
#form-select {
    width: 25%;
    display: inline;
}
.form-search {
    width: 50%;
    float: right;
}
.btn-right {
    float: right;
}
</style>
