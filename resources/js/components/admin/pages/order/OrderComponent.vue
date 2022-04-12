<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-12">Danh sách các đơn đặt xe</div>
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
                <div class="col-md-4">
                    <select class="select form-select" id="select-right">
                        <option value="">Chọn trạng thái cần lọc</option>
                        <option value="0">Đang xử lý</option>
                        <option value="1">Đã liên hệ</option>
                        <option value="2">Đã hoàn thành</option>
                        <option value="3">Đã bị huỷ</option>
                    </select>
                </div>
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
                        <th>Mã đơn thuê xe</th>
                        <th>Họ và tên</th>
                        <th>Số điện thoại</th>
                        <th>Ghi chú</th>
                        <th>Trạng thái</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in orders" :key="order.order_id">
                        <td>{{ order.code }}</td>
                        <td>{{ order.name }}</td>
                        <td>{{ order.phone }}</td>
                        <td>{{ order.note }}</td>
                        <td>
                            <select
                                class="form-select"
                                v-model="order.status"
                                :class="[
                                    {
                                        'btn-outline-secondary':
                                            order.status == 0,
                                    },
                                    {
                                        'btn-outline-primary':
                                            order.status == 1,
                                    },
                                    {
                                        'btn-outline-success':
                                            order.status == 2,
                                    },
                                    {
                                        'btn-outline-danger': order.status == 3,
                                    },
                                ]"
                            >
                                <option value="0">Đang chờ xử lý</option>
                                <option value="1">Đã liên hệ</option>
                                <option value="2">Đã hoàn thành</option>
                                <option value="3">Đã huỷ</option>
                            </select>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            orders: [],
            pagination: {
                current_page: 1,
                last_page: 5,
            },
            currentEntries: 5,
            showEntries: [5, 10, 25, 50],
            query: "",
            editMode: false,
            form: new Form({
                order_id: "",
                order_customer_name: "",
                order_customer_phone: "",
                order_place_from: "",
                order_place_to: "",
                order_time_go: "",
                order_time_back: "",
                order_status: "",
            }),
        };
    },
    mounted() {
        this.fetchOrders();
    },
    watch: {
        currentEntries(number) {
            if (number === 5) {
                this.pagination = 1;
                this.fetchOrders();
            } else {
                this.pagination = 1;
                this.fetchOrders();
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
        fetchOrders(page_url) {
            // page_url = `../../api/admin/edu-faculty/khoa/${this.currentEntries}?page=${this.pagination.current_page}`;
            // fetch(page_url)
            //     .then((res) => res.json())
            //     .then((res) => {
            //         this.accounts = res.data;
            //         this.pagination = res.meta;
            //     })
            //     .catch((err) => console.log(err));

            this.orders = [
                {
                    order_id: 1,
                    code: "MVD000001",
                    name: "Ho va Ten 1",
                    phone:
                        "09" +
                        Math.floor(
                            Math.random() * (98765432 - 12345678) + 12345678
                        ),
                    note: "Cần tư vấn đi nơi nào vui vẻ đổi tâm trạng",
                    status: Math.floor(Math.random() * (4 - 0) + 0),
                },
                {
                    order_id: 2,
                    code: "MVD000002",
                    name: "Ho va Ten 2",
                    phone:
                        "09" +
                        Math.floor(
                            Math.random() * (98765432 - 12345678) + 12345678
                        ),
                    note: "Nơi nào có biển thoáng và sạch",
                    status: Math.floor(Math.random() * (4 - 0) + 0),
                },
                {
                    order_id: 3,
                    code: "MVD000003",
                    name: "Ho va Ten 3",
                    phone:
                        "09" +
                        Math.floor(
                            Math.random() * (98765432 - 12345678) + 12345678
                        ),
                    note: "Cần tư vấn đi nơi nào đó",
                    status: Math.floor(Math.random() * (4 - 0) + 0),
                },
                {
                    order_id: 4,
                    code: "MVD000004",
                    name: "Ho va Ten 4",
                    phone:
                        "09" +
                        Math.floor(
                            Math.random() * (98765432 - 12345678) + 12345678
                        ),
                    note: "Không",
                    status: Math.floor(Math.random() * (4 - 0) + 0),
                },
                {
                    order_id: 5,
                    code: "MVD000005",
                    name: "Ho va Ten 5",
                    phone:
                        "09" +
                        Math.floor(
                            Math.random() * (98765432 - 12345678) + 12345678
                        ),
                    note: "Tư vấn",
                    status: Math.floor(Math.random() * (4 - 0) + 0),
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
