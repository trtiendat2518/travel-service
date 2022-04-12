<template>
    <div class="card">
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
                <div class="col-md-4"></div>
                <div class="col-md-5">
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
                        <th width="80%">Tên loại xe</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="car in cars" :key="car.car_id">
                        <td>{{ car.name }}</td>
                        <td>
                            <button class="btn btn-dark" v-if="car.status == 0">
                                <i class="bi bi-eye"></i>
                            </button>
                            <button
                                class="btn btn-secondary"
                                v-else-if="car.status == 1"
                            >
                                <i class="bi bi-eye-slash"></i>
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
                @paginate="query === '' ? fetchCars() : search()"
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
                                Tạo mới loại xe
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
                                            Tên loại xe
                                        </label>
                                        <div class="position-relative">
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder="Nhập tên loại xe"
                                                id="first-name-icon"
                                            />
                                            <div class="form-control-icon">
                                                <i class="bi bi-truck"></i>
                                            </div>
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
            cars: [],
            pagination: {
                current_page: 1,
                last_page: 5,
            },
            currentEntries: 5,
            showEntries: [5, 10, 25, 50],
            query: "",
            editMode: false,
            form: new Form({
                car_id: "",
                car_name: "",
                car_status: "",
            }),
        };
    },
    mounted() {
        this.fetchCars();
    },
    watch: {
        currentEntries(number) {
            if (number === 5) {
                this.pagination = 1;
                this.fetchCars();
            } else {
                this.pagination = 1;
                this.fetchCars();
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
            return this.cars.length < 1;
        },
        fetchCars(page_url) {
            // page_url = `../../api/admin/edu-faculty/khoa/${this.currentEntries}?page=${this.pagination.current_page}`;
            // fetch(page_url)
            //     .then((res) => res.json())
            //     .then((res) => {
            //         this.accounts = res.data;
            //         this.pagination = res.meta;
            //     })
            //     .catch((err) => console.log(err));

            this.cars = [
                {
                    car_id: 1,
                    name: "Xe 4 chỗ",
                    status: Math.floor(Math.random() * (2 - 0) + 0),
                },
                {
                    car_id: 2,
                    name: "Xe 7 chỗ",
                    status: Math.floor(Math.random() * (2 - 0) + 0),
                },
                {
                    car_id: 3,
                    name: "Xe 16 chỗ",
                    status: Math.floor(Math.random() * (2 - 0) + 0),
                },
                {
                    car_id: 4,
                    name: "Xe 29 chỗ",
                    status: Math.floor(Math.random() * (2 - 0) + 0),
                },
                {
                    car_id: 5,
                    name: "Xe 45 chỗ",
                    status: Math.floor(Math.random() * (2 - 0) + 0),
                },
            ];
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
    float: right;
}
.btn-right {
    float: right;
}
.select-right {
    float: right;
}
</style>
