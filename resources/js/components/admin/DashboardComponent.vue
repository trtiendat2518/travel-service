<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-8">
                            <h4>Thống kê số lượng đơn đặt xe</h4>
                        </div>
                        <div class="col-md-4">
                            <button class="btn btn-primary btn-right" @click="reset()">
                                <i class="bi bi-arrow-repeat"></i>
                            </button>
                            <button class="btn btn-dark btn-right" title="Tải xuống tệp Excel" @click="exportFile()">
                                <i class="bi bi-box-arrow-in-down"></i>
                            </button>
                            <div class="form-group">
                                <select name="" id="" class="select-right form-select" v-model="filter_value">
                                    <option value="" disabled selected>Lọc theo thời gian</option>
                                    <option value="1">Lọc theo ngày</option>
                                    <option value="2">Lọc theo tháng</option>
                                    <option value="3">Lọc theo năm</option>
                                </select>
                            </div>

                            <div
                                class="modal fade"
                                id="FilterModal"
                                tabindex="-1"
                                role="dialog"
                                aria-labelledby="FilterModalTitle"
                                aria-hidden="true"
                            >
                                <div class="modal-dialog" role="document">
                                    <form @submit.prevent="" @keydown="form.onKeydown($event)">
                                        <div class="modal-content" v-show="filter_value == 1">
                                            <div class="modal-header bg-primary">
                                                <h5 class="modal-title white" id="FilterModalTitle">Lọc theo ngày</h5>
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
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <label for="">Ngày bắt đầu</label>
                                                                </div>
                                                                <div class="col-md-8">
                                                                    <date-picker
                                                                        input-class="form-control"
                                                                        v-model="form.from_date"
                                                                        placeholder="Chọn ngày bắt đầu"
                                                                        type="day"
                                                                    ></date-picker>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="text-danger mb-3"
                                                                v-if="form.errors.has('from_date')"
                                                                v-html="form.errors.get('from_date')"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <label for="">Ngày kết thúc</label>
                                                                </div>
                                                                <div class="col-md-8">
                                                                    <date-picker
                                                                        input-class="form-control"
                                                                        v-model="form.to_date"
                                                                        placeholder="Chọn ngày kết thúc"
                                                                        type="day"
                                                                    ></date-picker>
                                                                </div>
                                                            </div>
                                                            <div
                                                                class="text-danger mb-3"
                                                                v-if="form.errors.has('to_date')"
                                                                v-html="form.errors.get('to_date')"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-primary me-1 mb-1" @click="byDay()">
                                                    Lọc kết quả
                                                </button>
                                            </div>
                                        </div>

                                        <div class="modal-content" v-show="filter_value == 2">
                                            <div class="modal-header bg-primary">
                                                <h5 class="modal-title white" id="FilterModalTitle">Lọc theo tháng</h5>
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
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <label for="">Tháng bắt đầu</label>
                                                                </div>
                                                                <div class="col-md-8">
                                                                    <date-picker
                                                                        input-class="form-control"
                                                                        v-model="form.from_month"
                                                                        placeholder="Chọn tháng bắt đầu"
                                                                        type="month"
                                                                    ></date-picker>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <label for="">Tháng kết thúc</label>
                                                                </div>
                                                                <div class="col-md-8">
                                                                    <date-picker
                                                                        input-class="form-control"
                                                                        v-model="form.to_month"
                                                                        placeholder="Chọn tháng kết thúc"
                                                                        type="month"
                                                                    ></date-picker>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-primary me-1 mb-1" @click="byMonth()">
                                                    Lọc kết quả
                                                </button>
                                            </div>
                                        </div>

                                        <div class="modal-content" v-show="filter_value == 3">
                                            <div class="modal-header bg-primary">
                                                <h5 class="modal-title white" id="FilterModalTitle">Lọc theo năm</h5>
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
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <label for="">Năm bắt đầu </label>
                                                                </div>
                                                                <div class="col-md-8">
                                                                    <date-picker
                                                                        input-class="form-control"
                                                                        v-model="form.from_year"
                                                                        placeholder="Chọn năm bắt đầu"
                                                                        type="year"
                                                                    ></date-picker>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <label for="">Năm kết thúc </label>
                                                                </div>
                                                                <div class="col-md-8">
                                                                    <date-picker
                                                                        input-class="form-control"
                                                                        v-model="form.to_year"
                                                                        placeholder="Chọn năm kết thúc"
                                                                        type="year"
                                                                    ></date-picker>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="submit" class="btn btn-primary me-1 mb-1" @click="byYear()">
                                                    Lọc kết quả
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <div v-if="barData.length == 0">
                        <div class="alert alert-danger">Không tìm thấy dữ liệu</div>
                    </div>
                    <div v-else>
                        <bar-chart
                            id="bar"
                            :data="barData"
                            :bar-colors="arrayColors"
                            :xkey="xkey"
                            :ykeys="ykeys"
                            :labels="labels"
                            grid-text-weight="bold"
                        ></bar-chart>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/vi'
import { BarChart } from 'vue-morris'
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
export default {
    components: {
        BarChart,
        DatePicker
    },
    data() {
        return {
            filter_value: '',
            form: new Form({
                from_date: '',
                to_date: '',

                from_month: '',
                to_month: '',

                from_year: '',
                to_year: ''
            }),
            barData: [],
            xkey: 'day',
            arrayColors: ['#999999', '#435ebe', '#6AA84F', '#990000'],
            ykeys: ['order_standby', 'order_contacted', 'order_done', 'order_cancel'],
            labels: ['Chờ xử lý', 'Đã liên hệ', 'Đã hoàn thành', 'Bị huỷ']
        }
    },
    watch: {
        filter_value(value) {
            if (value != '') {
                this.change()
            }
        }
    },
    mounted() {
        this.show()
    },
    methods: {
        show(page_url) {
            page_url = `../../api/admin/dashboard-statistic/show`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.barData = res.data
                })
                .catch((err) => console.log(err))
        },
        close() {
            this.filter_value = ''
            $('#FilterModal').modal('hide')
        },
        // change(e) {
        //     this.filter_value = e.target.value
        //     $('#FilterModal').modal('show')
        // },
        change() {
            this.form.reset()
            this.form.clear()
            $('#FilterModal').modal('show')
        },
        byDay() {
            this.form
                .post(`../../api/admin/dashboard-statistic/by-day`)
                .then((res) => {
                    if (this.form.successful) {
                        this.barData = res.data.data
                        $('#FilterModal').modal('hide')
                    }
                })
                .catch((err) => {
                    this.$snotify.error('Lỗi')
                })
        },
        byMonth() {
            let from_month = new Date(this.form.from_month)
            let from_get_month = from_month.getMonth() + 1
            this.form.from_month = from_get_month + '-' + from_month.getFullYear()

            let to_month = new Date(this.form.to_month)
            let to_get_month = to_month.getMonth() + 1
            this.form.to_month = to_get_month + '-' + to_month.getFullYear()

            this.form
                .post(`../../api/admin/dashboard-statistic/by-month`)
                .then((res) => {
                    if (this.form.successful) {
                        this.barData = res.data.data
                        $('#FilterModal').modal('hide')
                    }
                })
                .catch((err) => {
                    this.$snotify.error('Lỗi')
                })
        },
        byYear() {
            let from_year = new Date(this.form.from_year)
            this.form.from_year = from_year.getFullYear()
            let to_year = new Date(this.form.to_year)
            this.form.to_year = to_year.getFullYear()
            this.form
                .post(`../../api/admin/dashboard-statistic/by-year`)
                .then((res) => {
                    if (this.form.successful) {
                        this.barData = res.data.data
                        $('#FilterModal').modal('hide')
                    }
                })
                .catch((err) => {
                    this.$snotify.error('Lỗi')
                })
        },
        reset() {
            this.filter_value = ''
            this.show()
        },
        exportShow() {
            window.location.href = `../../api/admin/dashboard-statistic/export-one-month`
        },
        exportByDay() {
            window.location.href = `../../api/admin/dashboard-statistic/export-by-day/${this.form.from_date}/${this.form.to_date}`
        },
        exportByMonth() {
            window.location.href = `../../api/admin/dashboard-statistic/export-by-month/${this.form.from_month}/${this.form.to_month}`
        },
        exportByYear() {
            window.location.href = `../../api/admin/dashboard-statistic/export-by-year/${this.form.from_year}/${this.form.to_year}`
        },
        exportFile() {
            if (this.filter_value == 1) {
                this.exportByDay()
            } else if (this.filter_value == 2) {
                this.exportByMonth()
            } else if (this.filter_value == 3) {
                this.exportByYear()
            } else {
                this.exportShow()
            }
        }
    }
}
</script>

<style scoped>
.btn-right {
    float: right;
    margin-right: 10px;
}
.select-right {
    float: right;
    margin-right: 10px;
    width: initial;
}
</style>
