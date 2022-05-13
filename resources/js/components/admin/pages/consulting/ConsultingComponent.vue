<template>
    <div class="card">
        <vue-snotify></vue-snotify>
        <div class="card-header">
            <div class="row">
                <div class="col-md-12">Danh sách liên hệ tư vấn</div>
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
                        <option value="0">Đang xử lý</option>
                        <option value="1">Đã liên hệ</option>
                        <option value="2">Đã huỷ</option>
                    </select>
                </div>
                <div class="col-md-5">
                    <input class="form-control form-search" placeholder="Tìm kiếm..." v-model="query" type="text" />
                </div>
            </div>
            <table class="table table-striped" id="table1">
                <thead>
                    <tr>
                        <th>Họ và tên</th>
                        <th>Số điện thoại</th>
                        <th>Ngày gửi</th>
                        <th>Trạng thái</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="contact in contacts" :key="contact.id">
                        <td>
                            <a href="javascript:void(0)" @click="detail(contact)">
                                {{ contact.full_name }}
                            </a>
                        </td>
                        <td>{{ contact.phone_number }}</td>
                        <td>{{ contact.created_at | formatFullTime }}</td>
                        <td>
                            <select
                                class="form-select"
                                v-model="contact.status"
                                @change="change($event, contact)"
                                :class="[
                                    {
                                        'btn-outline-secondary': contact.status == 0
                                    },
                                    {
                                        'btn-outline-primary': contact.status == 1
                                    },
                                    {
                                        'btn-outline-danger': contact.status == 2
                                    }
                                ]"
                            >
                                <option value="0" :hidden="contact.status != 0">Đang chờ xử lý</option>
                                <option value="1" :hidden="contact.status == 2">Đã liên hệ</option>
                                <option value="2" :hidden="contact.status == 1">Đã huỷ</option>
                            </select>
                        </td>
                        <td>
                            <button class="btn btn-danger" @click="destroy(contact.id)">
                                <i class="bi bi-trash"></i>
                            </button>
                        </td>
                    </tr>
                    <tr v-show="!contacts.length">
                        <td colspan="6">
                            <div class="alert alert-danger">Không tìm thấy kết quả phù hợp!</div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <pagination-component
                v-if="pagination.last_page > 1"
                :pagination="pagination"
                :offset="5"
                @paginate="query === '' ? fetchContacts() : search()"
            >
            </pagination-component>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="DetailModal" tabindex="-1" role="dialog" aria-labelledby="DetailModalTitle" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-primary">
                        <h5 class="modal-title white" id="DetailModalTitle">Chi tiết liên hệ</h5>
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
                                        Ngày gửi: <strong> {{ form.created_at | formatFullTime }}</strong>
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
            contacts: [],
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
                phone_number: '',
                status: '',
                note: '',
                created_at: ''
            })
        }
    },
    mounted() {
        this.fetchContacts()
    },
    watch: {
        currentEntries(number) {
            if (number === 10) {
                this.pagination = 1
                this.fetchContacts()
            } else {
                this.pagination = 1
                this.fetchContacts()
            }
        },
        query(keyword) {
            if (keyword === '') {
                this.fetchContacts()
            } else {
                this.value = ''
                this.pagination.current_page = 1
                this.search()
            }
        },
        value(value) {
            if (value === '') {
                this.fetchContacts()
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
        fetchContacts(page_url) {
            page_url = `../../api/admin/manage-contact/contact/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.contacts = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        search(page_url) {
            page_url = `../../api/admin/manage-contact/contact/search/${this.query}/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.contacts = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        filter(page_url) {
            page_url = `../../api/admin/manage-contact/contact/filter/${this.value}/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.contacts = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        destroy(contactId) {
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
                                .delete(`../../api/admin/manage-contact/contact/${contactId}`)
                                .then((res) => {
                                    this.$snotify.success('Đã xóa!')
                                    let checkData = this.contacts.length - 1
                                    if (checkData == 0) {
                                        this.pagination.current_page = this.pagination.current_page - 1
                                    }
                                    this.fetchContacts()
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
        change(event, contact) {
            this.form.status = event.target.value
            this.form
                .put(`../../api/admin/manage-contact/contact/${contact.id}`)
                .then((res) => {
                    this.fetchContacts()
                    this.$snotify.success('Đã thay đổi trạng thái')
                })
                .catch((err) => console.log(err))
        },
        detail(contact) {
            this.form.reset()
            this.form.clear()
            this.form.fill(contact)
            $('#DetailModal').modal('show')
        },
        close() {
            $('#DetailModal').modal('hide')
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
</style>
