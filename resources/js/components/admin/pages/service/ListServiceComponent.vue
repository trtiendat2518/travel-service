<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-12">Danh sách các dịch vụ thuê xe</div>
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
                        <th width="20%">Hình ảnh</th>
                        <th width="40%">Tên dịch vụ</th>
                        <th width="20%">Tác giả</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="service in services" :key="service.service_id">
                        <td>
                            <img
                                class="image-service"
                                :src="`../public/user/img/${service.image}.png`"
                                alt=""
                            />
                        </td>
                        <td>{{ service.name }}</td>
                        <td>{{ service.author }}</td>
                        <td>
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
                @paginate="query === '' ? fetchServices() : search()"
            >
            </pagination-component>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [],
            pagination: {
                current_page: 1,
                last_page: 5,
            },
            currentEntries: 5,
            showEntries: [5, 10, 25, 50],
            query: "",
            editMode: false,
            form: new Form({
                service_id: "",
                service_name: "",
                service_image: "",
                service_content: "",
                service_status: "",
                service_author: "",
            }),
        };
    },
    mounted() {
        this.fetchServices();
    },
    watch: {
        currentEntries(number) {
            if (number === 5) {
                this.pagination = 1;
                this.fetchServices();
            } else {
                this.pagination = 1;
                this.fetchServices();
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
            return this.orders.length < 1;
        },
        fetchServices(page_url) {
            // page_url = `../../api/admin/edu-faculty/khoa/${this.currentEntries}?page=${this.pagination.current_page}`;
            // fetch(page_url)
            //     .then((res) => res.json())
            //     .then((res) => {
            //         this.accounts = res.data;
            //         this.pagination = res.meta;
            //     })
            //     .catch((err) => console.log(err));

            this.services = [
                {
                    service_id: 1,
                    name: "Đi 1 chiều",
                    author: "Trần Văn A",
                    image: "xe-di-1-chieu",
                    status: Math.floor(Math.random() * (2 - 0) + 0),
                },
                {
                    service_id: 2,
                    name: "Đi 2 chiều",
                    author: "Trần Văn B",
                    image: "xe-di-2-chieu",
                    status: Math.floor(Math.random() * (2 - 0) + 0),
                },
                {
                    service_id: 3,
                    name: "Đưa đón sân bay",
                    author: "Trần Văn C",
                    image: "xe-dua-don-san-bay",
                    status: Math.floor(Math.random() * (2 - 0) + 0),
                },
                {
                    service_id: 4,
                    name: "Đi về quê",
                    author: "Trần Văn D",
                    image: "xe-ve-que",
                    status: Math.floor(Math.random() * (2 - 0) + 0),
                },
                {
                    service_id: 5,
                    name: "Đi công tác",
                    author: "Trần Văn E",
                    image: "xe-di-cong-tac",
                    status: Math.floor(Math.random() * (2 - 0) + 0),
                },
                {
                    service_id: 6,
                    name: "Đến bệnh viện",
                    author: "Trần Văn G",
                    image: "xe-di-cap-cuu",
                    status: Math.floor(Math.random() * (2 - 0) + 0),
                },
            ];
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
.image-service {
    width: 10vw;
}
</style>
