<template>
    <div>
        <div class="w-choose box" id="booking-now">
            <div class="container">
                <div class="box-title text-center">
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
                                <form @submit.prevent="store()" @keydown="form.onKeydown($event)" accept-charset="utf-8">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label class="text-left" for="name"> Họ và tên </label>
                                            <input type="text" name="full_name" v-model="form.full_name" placeholder="Nhập đầy đủ họ tên" />
                                            <div
                                                class="text-danger mb-3 text-left"
                                                v-if="form.errors.has('full_name')"
                                                v-html="form.errors.get('full_name')"
                                            ></div>
                                        </div>
                                        <div class="col-md-6">
                                            <label for="phone" class="text-left"> Số điện thoại </label>
                                            <input
                                                type="number"
                                                name="phone_number"
                                                v-model="form.phone_number"
                                                placeholder="Nhập số điện thoại"
                                            />
                                            <div
                                                class="text-danger mb-3 text-left"
                                                v-if="form.errors.has('phone_number')"
                                                v-html="form.errors.get('phone_number')"
                                            ></div>
                                        </div>

                                        <div class="col-md-12">
                                            <label for="category" class="text-left"> Ghi chú </label>
                                            <textarea
                                                name="note"
                                                v-model="form.note"
                                                placeholder="Để lại lời nhắn cho chúng tôi"
                                            ></textarea>
                                            <div
                                                class="text-danger text-left mb-3"
                                                v-if="form.errors.has('note')"
                                                v-html="form.errors.get('note')"
                                            ></div>
                                        </div>

                                        <div class="clearfix"></div>
                                        <div class="col-md-12 text-center">
                                            <div>
                                                <button class="text-center view-all" type="submit">Gửi</button>
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
import 'sweetalert2/dist/sweetalert2.min.css'
export default {
    data() {
        return {
            form: new Form({
                id: '',
                full_name: '',
                phone_number: '',
                note: ''
            })
        }
    },
    methods: {
        store() {
            console.log(this.form)
            this.form
                .post('../../api/customer/send-contact/consulting')
                .then((res) => {
                    console.log(res.data)
                    if (res.data == 'errorIp') {
                        this.$swal({
                            title: 'Mỗi ngày bạn chỉ được gửi liên hệ 5 lần!',
                            icon: 'error',
                            confirmButtonText: 'OK!',
                            timer: 3500
                        })
                    } else if (res.data == 'errorPhone') {
                        this.$swal({
                            title: 'Số điện thoại không đúng định dạng!',
                            icon: 'error',
                            confirmButtonText: 'OK!',
                            timer: 3500
                        })
                    } else {
                        if (this.form.successful) {
                            this.$swal({
                                title: 'Gửi liên hệ thành công!',
                                icon: 'success',
                                confirmButtonText: 'OK!',
                                timer: 3500
                            })
                            this.form.reset()
                            this.form.clear()
                        }
                    }
                })
                .catch((err) => {
                    console.log('error')
                })
        }
    }
}
</script>

<style scoped>
textarea {
    resize: none;
}
.view-all:hover {
    background-color: #3a8adc;
}
</style>
