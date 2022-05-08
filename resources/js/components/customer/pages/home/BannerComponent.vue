<template>
    <div>
        <div class="banner">
            <div class="owl-carousel owl-banner owl-theme">
                <div class="item">
                    <img
                        class="decrease-brightness"
                        :src="`../public/user/img/dich-vu-thue-xe-tai-vung-tau.png`"
                        alt=""
                    />
                    <div class="caption text-center">
                        <h4 class="amimate-caption-title mb-5">
                            Bà Rịa - Vũng Tàu
                        </h4>
                        <p class="amimate-caption-desc">
                            Biển đẹp và hải sản tươi ngon
                        </p>
                    </div>
                </div>
                <div class="item">
                    <img
                        class="decrease-brightness"
                        :src="`../public/user/img/dich-vu-cho-thue-xe-du-lich-da-lat.png`"
                        alt=""
                    />
                    <div class="caption text-center">
                        <h4 class="amimate-caption-title mb-5">Đà Lạt</h4>
                        <p class="amimate-caption-desc">
                            Không khí lạnh cùng với những tách cà phê nóng !
                        </p>
                    </div>
                </div>
                <div class="item">
                    <img
                        class="decrease-brightness"
                        :src="`../public/user/img/dich-vu-cho-thue-xe-tphcm.png`"
                        alt=""
                    />
                    <div class="caption text-center">
                        <h4 class="amimate-caption-title mb-5">Hồ Chí Minh</h4>
                        <p class="amimate-caption-desc">
                            Địa điểm vui chơi sài thành !
                        </p>
                    </div>
                </div>
                <div class="item">
                    <img
                        class="decrease-brightness"
                        :src="`../public/user/img/dich-vu-du-lich-cha-diep.png`"
                        alt=""
                    />
                    <div class="caption text-center">
                        <h4 class="amimate-caption-title mb-5">Chà Điệp</h4>
                        <p class="amimate-caption-desc">
                            Offering the Best Limo Service in New York.
                            Experience It Now !
                        </p>
                    </div>
                </div>
                <div class="item">
                    <img
                        class="decrease-brightness"
                        :src="`../public/user/img/thue-xe-du-lich-binh-duong.png`"
                        alt=""
                    />
                    <div class="caption text-center mb-5">
                        <h4 class="amimate-caption-title">Bình Dương</h4>
                        <p class="amimate-caption-desc">
                            Offering the Best Limo Service in New York.
                            Experience It Now !
                        </p>
                    </div>
                </div>
            </div>

            <div class="tab-booking">
                <div class="container-fluid p-0">
                    <form
                        action="post"
                        class="text-center booking-form justify-content-end d-flex align-items-center"
                    >
                        <a
                            href="javascript:void(0)"
                            class="form-item-link text-uppercase m-0"
                            @click="book()"
                        >
                            <i class="fa-solid fa-hand-point-right"></i>
                            <span id="button-booking-banner">
                                &nbsp;Đặt xe ngay&nbsp;
                            </span>
                            <i class="fa-solid fa-hand-point-left"></i>
                        </a>
                    </form>
                </div>
            </div>
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
                                <div class="col-md-6">
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
                                </div>
                                <div class="col-md-12">
                                    <label class="text-left" for="phone"
                                        >Ghi chú
                                    </label>
                                    <textarea
                                        name=""
                                        id=""
                                        rows="4"
                                        laceholder="Để lại lời nhắn cho chúng tôi"
                                    ></textarea>
                                </div>
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
        book() {
            $("#loanModal").modal("show");
        },
        close() {
            $("#loanModal").modal("hide");
        },
    },
};
</script>

<style scoped>
#button-booking-banner {
    padding: 0;
}
a:hover {
    color: #fff;
}
.decrease-brightness {
    filter: brightness(30%);
}
</style>
