<template>
    <div>
        <div class="w-choose box" id="booking-now">
            <div class="container">
                <div class="box-title text-center">
                    <h2>Liên Hệ Tư Vấn</h2>
                    <h3 class="title">Liên Hệ Tư Vấn</h3>
                    <p class="mt-4 mb-4">Bạn điền đẩy đủ thông tin dưới đây và nhấn gửi, sau đó chúng tôi sẽ liên hệ với bạn.</p>
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
                                            <label class="text-left" for="name"> Họ và tên </label>
                                            <input type="text" name="name" id="name" placeholder="Nhập đầy đủ họ tên" />
                                        </div>
                                        <div class="col-md-6">
                                            <label for="phone" class="text-left"> Số điện thoại </label>
                                            <input type="text" name="phone" id="phone" placeholder="Nhập số điện thoại" />
                                        </div>

                                        <div class="col-md-12">
                                            <label for="category" class="text-left"> Ghi chú </label>
                                            <textarea
                                                name=""
                                                id=""
                                                cols="30"
                                                rows="10"
                                                placeholder="Để lại lời nhắn cho chúng tôi"
                                            ></textarea>
                                        </div>

                                        <div class="clearfix"></div>
                                        <div class="col-md-12 text-center">
                                            <div class="btn-submit">
                                                <button class="text-center" type="submit">Gửi</button>
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
export default {}
</script>

<style></style>
