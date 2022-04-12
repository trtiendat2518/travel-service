<template>
    <div class="col-md-4">
        <button class="btn btn-dark btn-right" title="Tải xuống tệp Excel">
            <i class="bi bi-box-arrow-in-down"></i>
        </button>
        <div class="form-group">
            <select
                name=""
                id=""
                class="select-right form-select"
                @change="change($event)"
            >
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
                            <h5 class="modal-title white" id="FilterModalTitle">
                                Lọc theo ngày
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
                                    <div class="form-group">
                                        <label for="">Ngày bắt đầu</label>
                                        <input
                                            type="date"
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="">Ngày kết thúc</label>
                                        <input
                                            type="date"
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="">Trạng thái</label>
                                        <select
                                            name=""
                                            id=""
                                            class="form-select"
                                        >
                                            <option value="">
                                                Chọn trạng thái
                                            </option>
                                            <option value="1">
                                                Đang xử lý
                                            </option>
                                            <option value="2">
                                                Đã liên hệ
                                            </option>
                                            <option value="3">
                                                Đã hoàn thành
                                            </option>
                                            <option value="4">Đã bị huỷ</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="submit"
                                class="btn btn-primary me-1 mb-1"
                            >
                                Lọc kết quả
                            </button>
                        </div>
                    </div>

                    <div class="modal-content" v-show="filter_value == 2">
                        <div class="modal-header bg-primary">
                            <h5 class="modal-title white" id="FilterModalTitle">
                                Lọc theo tháng
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
                                    <div class="form-group">
                                        <label for="">Tháng bắt đầu</label>
                                        <input
                                            type="month"
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="">Tháng kết thúc</label>
                                        <input
                                            type="month"
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="">Trạng thái</label>
                                        <select
                                            name=""
                                            id=""
                                            class="form-select"
                                        >
                                            <option value="">
                                                Chọn trạng thái
                                            </option>
                                            <option value="1">
                                                Đang xử lý
                                            </option>
                                            <option value="2">
                                                Đã liên hệ
                                            </option>
                                            <option value="3">
                                                Đã hoàn thành
                                            </option>
                                            <option value="4">Đã bị huỷ</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="submit"
                                class="btn btn-primary me-1 mb-1"
                            >
                                Lọc kết quả
                            </button>
                        </div>
                    </div>

                    <div class="modal-content" v-show="filter_value == 3">
                        <div class="modal-header bg-primary">
                            <h5 class="modal-title white" id="FilterModalTitle">
                                Lọc theo năm
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
                                    <div class="form-group">
                                        <label for="">Năm bắt đầu</label>
                                        <input
                                            type="year"
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="">Năm kết thúc</label>
                                        <input
                                            type="year"
                                            class="form-control"
                                        />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="">Trạng thái</label>
                                        <select
                                            name=""
                                            id=""
                                            class="form-select"
                                        >
                                            <option value="">
                                                Chọn trạng thái
                                            </option>
                                            <option value="1">
                                                Đang xử lý
                                            </option>
                                            <option value="2">
                                                Đã liên hệ
                                            </option>
                                            <option value="3">
                                                Đã hoàn thành
                                            </option>
                                            <option value="4">Đã bị huỷ</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="submit"
                                class="btn btn-primary me-1 mb-1"
                            >
                                Lọc kết quả
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
            filter_value: "",
        };
    },
    methods: {
        close() {
            $("#FilterModal").modal("hide");
        },
        change(e) {
            this.filter_value = e.target.value;
            $("#FilterModal").modal("show");
        },
    },
};
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
