<template>
    <div class="card">
        <vue-snotify></vue-snotify>
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
                        <th width="30%">Hình ảnh</th>
                        <th width="30%">Tên dịch vụ</th>
                        <th width="30%">Tác giả</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="service in services" :key="service.id">
                        <td>
                            <img class="image-service" :src="`../public/images/service/${service.avatar}`" alt="" />
                        </td>
                        <td>{{ service.name }}</td>
                        <td>{{ service.full_name }}</td>
                        <td>
                            <router-link
                                tag="button"
                                class="btn btn-primary"
                                :to="{ name: 'service-update', params: { idService: service.id } }"
                            >
                                <i class="bi bi-pencil-square"></i>
                            </router-link>
                            <button class="btn btn-danger" @click="destroy(service.id)">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr v-show="!services.length">
                        <td colspan="4">
                            <div class="alert alert-danger">Không tìm thấy kết quả phù hợp!</div>
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
import 'vue-snotify/styles/material.css'
export default {
    data() {
        return {
            services: [],
            pagination: {
                current_page: 1,
                last_page: 5
            },
            currentEntries: 10,
            showEntries: [5, 10, 25, 50],
            query: '',
            editMode: false,
            form: new Form({
                service_id: '',
                service_name: '',
                service_image: '',
                service_content: '',
                service_status: '',
                service_author: ''
            })
        }
    },
    mounted() {
        this.fetchServices()
    },
    watch: {
        currentEntries(number) {
            if (number === 5) {
                this.pagination = 1
                this.fetchServices()
            } else {
                this.pagination = 1
                this.fetchServices()
            }
        },
        query(keyword) {
            if (keyword === '') {
                this.fetchServices()
            } else {
                this.pagination.current_page = 1
                this.search()
            }
        }
    },
    methods: {
        empty() {
            return this.orders.length < 1
        },
        fetchServices(page_url) {
            page_url = `../../api/admin/manage-service/service/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.services = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        search(page_url) {
            page_url = `../../api/admin/manage-service/service/search/${this.query}/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.services = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        destroy(serviceId) {
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
                                .delete(`../../api/admin/manage-service/service/${serviceId}`)
                                .then((res) => {
                                    this.$snotify.success('Đã xóa!')
                                    this.fetchServices()
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
        show(serviceId) {
            window.location.href = `../admin/quan-ly-dich-vu/cap-nhat/${serviceId}`
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
.image-service {
    width: 10vw;
    height: 10vh;
}
</style>
