<template>
    <div>
        <div class="w-choose box" id="booking-now">
            <div class="container">
                <div class="box-title text-center">
                    <h2>Thuê Xe Ngay</h2>
                    <h3 class="title">Thuê Xe Ngay</h3>
                    <p class="mt-4 mb-4">
                        Bạn điền đẩy đủ thông tin dưới đây và nhấn thuê xe, sau
                        đó chúng tôi sẽ liên hệ với bạn.
                    </p>
                </div>
            </div>
            <section class="card-area">
                <div class="container">
                    <div class="row">
                        <div class="col-md-2"></div>
                        <div class="col-md-8">
                            <div class="form-card">
                                <form accept-charset="utf-8">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="name">Họ và tên</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Nhập đầy đủ họ tên"
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="phone"
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
                                            <label for="category"
                                                >Loại xe</label
                                            >
                                            <select
                                                name="category"
                                                id="category"
                                            >
                                                <option value="">
                                                    Chọn loại xe
                                                </option>
                                                <option value="1">
                                                    Xe 4 chỗ
                                                </option>
                                                <option value="2">
                                                    Xe 7 chỗ
                                                </option>
                                                <option value="3">
                                                    Xe 16 chỗ
                                                </option>
                                                <option value="4">
                                                    Xe 29 chỗ
                                                </option>
                                                <option value="5">
                                                    Xe 45 chỗ
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="service"
                                                >Dịch vụ thuê xe
                                            </label>
                                            <select name="service" id="service">
                                                <option value="">
                                                    Chọn dịch vụ
                                                </option>
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
                                                <option value="">
                                                    Chọn điểm đón
                                                </option>
                                                <option value="1">
                                                    Xe 4 chỗ
                                                </option>
                                                <option value="2">
                                                    Xe 7 chỗ
                                                </option>
                                                <option value="3">
                                                    Xe 16 chỗ
                                                </option>
                                                <option value="4">
                                                    Xe 29 chỗ
                                                </option>
                                                <option value="5">
                                                    Xe 45 chỗ
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="address-end"
                                                >Chọn điểm đến</label
                                            >
                                            <select
                                                name="address-end"
                                                id="address-end"
                                            >
                                                <option value="">
                                                    Chọn điểm đến
                                                </option>
                                                <option value="1">
                                                    Đi 1 chiều có tài xế
                                                </option>
                                                <option value="2">
                                                    Đi 2 chiều có tài xế
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="time-start"
                                                >Ngày bắt đầu</label
                                            >
                                            <input
                                                type="date"
                                                name="time-start"
                                                id="time-start"
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="time-end"
                                                >Ngày kết thúc
                                            </label>
                                            <input
                                                type="date"
                                                name="time-end"
                                                id="time-end"
                                            />
                                        </div>
                                        <div class="clearfix"></div>
                                        <div class="col-md-12 text-center">
                                            <div class="btn-submit">
                                                <button
                                                    class="text-center"
                                                    type="submit"
                                                >
                                                    Tiếp tục
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="col-md-2"></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
