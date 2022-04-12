<template>
    <div>
        <button class="btn btn-color btn-block btn-lg" @click="loan()">
            Đặt thuê xe
        </button>
        <a href="tel:0123456789" class="btn btn-secondary btn-block btn-lg">
            Liên hệ
        </a>

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
                        <div class="modal-header styling-modal-header-update">
                            <h5 class="modal-title" id="loanModalTitle">
                                Đặt thuê xe
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
                                <div class="col-md-6">
                                    <label class="text-left" for="name"
                                        >Họ và tên</label
                                    >
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Nhập đầy đủ họ tên"
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label class="text-left" for="phone"
                                        >Số điện thoại
                                    </label>
                                    <input
                                        type="text"
                                        name="phone"
                                        id="phone"
                                        placeholder="Nhập số điện thoại"
                                    />
                                </div>
                                <div class="col-md-12">
                                    <label class="text-left" for="phone"
                                        >Ghi chú
                                    </label>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                        laceholder="Để lại lời nhắn cho chúng tôi"
                                    ></textarea>
                                </div>
                                <!-- <div class="col-md-6">
                                    <label for="category">Loại xe</label>
                                    <select name="category" id="category">
                                        <option value="">Chọn loại xe</option>
                                        <option value="1">Xe 4 chỗ</option>
                                        <option value="2">Xe 7 chỗ</option>
                                        <option value="3">Xe 16 chỗ</option>
                                        <option value="4">Xe 29 chỗ</option>
                                        <option value="5">Xe 45 chỗ</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="service"
                                        >Dịch vụ thuê xe
                                    </label>
                                    <select name="service" id="service">
                                        <option value="">Chọn dịch vụ</option>
                                        <option value="1">
                                            Đi 1 chiều có tài xế
                                        </option>
                                        <option value="2">
                                            Đi 2 chiều có tài xế
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="address-start"
                                        >Chọn điểm đón</label
                                    >
                                    <select
                                        name="address-start"
                                        id="address-start"
                                    >
                                        <option value="">Chọn điểm đón</option>
                                        <option value="1">Xe 4 chỗ</option>
                                        <option value="2">Xe 7 chỗ</option>
                                        <option value="3">Xe 16 chỗ</option>
                                        <option value="4">Xe 29 chỗ</option>
                                        <option value="5">Xe 45 chỗ</option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="address-end"
                                        >Chọn điểm đến</label
                                    >
                                    <select name="address-end" id="address-end">
                                        <option value="">Chọn điểm đến</option>
                                        <option value="1">
                                            Đi 1 chiều có tài xế
                                        </option>
                                        <option value="2">
                                            Đi 2 chiều có tài xế
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-6">
                                    <label for="time-start">Ngày bắt đầu</label>
                                    <input
                                        type="date"
                                        name="time-start"
                                        id="time-start"
                                    />
                                </div>
                                <div class="col-md-6">
                                    <label for="time-end">Ngày kết thúc </label>
                                    <input
                                        type="date"
                                        name="time-end"
                                        id="time-end"
                                    />
                                </div> -->
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="text-center" type="submit">
                                Tiếp tục
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
    methods: {
        loan() {
            $("#loanModal").modal("show");
        },
        close() {
            $("#loanModal").modal("hide");
        },
    },
};
</script>

<style scoped>
.btn-color {
    background-color: #1e1e1e;
    color: #fff;
}
</style>
