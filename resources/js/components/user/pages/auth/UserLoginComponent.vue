<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6">
                <div class="login-booking">
                    <ul class="login-tab-list">
                        <li rel="tab-1" class="active">Đăng nhập</li>
                    </ul>
                    <div class="login-content">
                        <div id="tab-1" class="content-tab">
                            <div class="login-form">
                                <form
                                    action="#"
                                    method="post"
                                    accept-charset="utf-8"
                                >
                                    <div class="form-email">
                                        <label for="">Số điện thoại</label>
                                        <input
                                            type="number"
                                            name="phone"
                                            id="phone"
                                            placeholder="0123456789"
                                        />
                                    </div>
                                    <div class="form-password">
                                        <label for="">Mật khẩu</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="************"
                                        />
                                    </div>

                                    <div class="clearfix"></div>
                                    <div class="btn-submit">
                                        <div class="row">
                                            <div class="col-md-12 center-form">
                                                <button type="submit">
                                                    Đăng nhập
                                                </button>
                                            </div>
                                            <div class="col-md-12 center-form">
                                                <a href="dang-ky" title=""
                                                    >Chưa có tài khoản ?</a
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
</style>
