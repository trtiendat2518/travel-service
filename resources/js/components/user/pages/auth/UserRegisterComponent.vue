<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div class="login-booking">
                    <ul class="login-tab-list">
                        <li rel="tab-2" class="active">Đăng ký</li>
                    </ul>
                    <div class="login-content">
                        <div id="tab-2" class="content-tab">
                            <div class="register-form">
                                <form
                                    action="#"
                                    method="get"
                                    accept-charset="utf-8"
                                >
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="firstname"
                                                >Họ tên</label
                                            >
                                            <input
                                                type="text"
                                                name="firstname"
                                                id="firstname"
                                                placeholder="Họ và tên"
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="lastname"
                                                >Số điện thoại</label
                                            >
                                            <input
                                                type="number"
                                                min="0"
                                                name="phone"
                                                id="phone"
                                                placeholder="123456789"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label for="pass">Mật khẩu</label>
                                            <input
                                                type="text"
                                                name="pass"
                                                id="pass"
                                                placeholder="************"
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="re-pass"
                                                >Nhập lại mật khẩu</label
                                            >
                                            <input
                                                type="password"
                                                name="repass"
                                                id="re-pass"
                                                placeholder="************"
                                            />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <label for="re-pass">
                                                Địa chỉ
                                            </label>
                                            <textarea
                                                name="address"
                                                id="address"
                                                placeholder="..."
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div class="btn-submit">
                                        <div class="row">
                                            <div class="col-md-12 center-form">
                                                <button type="submit">
                                                    Đăng ký
                                                </button>
                                            </div>
                                            <div class="col-md-12 center-form">
                                                <a href="dang-nhap" title=""
                                                    >Đã có tài khoản ?</a
                                                >
                                            </div>
                                            <div class="col-md-12 center-form">
                                                <a href="#" title=""
                                                    >Quên mật khẩu ?</a
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.center-form {
    display: flex;
    align-items: center;
    justify-content: center;
}
.content-tab {
    display: block;
}
a {
    color: black;
}
textarea {
    resize: none;
}
</style>
