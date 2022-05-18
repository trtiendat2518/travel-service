<template>
    <div class="login-content">
        <div id="tab-2" class="content-tab">
            <div class="register-form">
                <form @submit.prevent="update()" @keydown="form.onKeydown($event)" accept-charset="utf-8">
                    <div class="row">
                        <div class="col-md-12">
                            <!-- <label for="firstname"> Ảnh đại diện </label> -->
                            <div class="image-upload center">
                                <label for="file-input">
                                    <img class="avatar-img" v-if="form.avatar" :src="form.avatar" alt="profile" />
                                </label>

                                <input
                                    class="form-control"
                                    type="file"
                                    id="file-input"
                                    name="admin_avatar"
                                    ref="fileupload"
                                    @change="onAvatarChange"
                                />
                            </div>
                            <!-- <input type="file" class="form-control" name="avatar" /> -->
                            <div class="text-danger ml-2" v-if="form.errors.has('avatar')" v-html="form.errors.get('avatar')"></div>
                        </div>
                        <div class="col-md-6">
                            <label for="firstname"> Họ tên </label>
                            <input type="text" name="full_name" v-model="form.full_name" />
                            <div class="text-danger ml-2" v-if="form.errors.has('full_name')" v-html="form.errors.get('full_name')"></div>
                        </div>
                        <div class="col-md-6">
                            <label for="lastname"> Số điện thoại </label>
                            <input type="text" name="phone_number" v-model="form.phone_number" />
                            <div
                                class="text-danger ml-2"
                                v-if="form.errors.has('phone_number')"
                                v-html="form.errors.get('phone_number')"
                            ></div>
                        </div>
                        <div class="col-md-12">
                            <label for="re-pass"> Email </label>
                            <input type="email" name="email" v-model="form.email" />
                            <div class="text-danger ml-2" v-if="form.errors.has('email')" v-html="form.errors.get('email')"></div>
                        </div>
                        <div class="col-md-12">
                            <label for="re-pass"> Địa chỉ </label>
                            <textarea name="address" v-model="form.address"></textarea>
                            <div class="text-danger ml-2" v-if="form.errors.has('address')" v-html="form.errors.get('address')"></div>
                        </div>
                    </div>
                    <div class="btn-submit">
                        <div class="row">
                            <div class="col-md-12 center-form button-edit">
                                <button type="submit">Chỉnh sửa</button>
                            </div>
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
            customer_id: this.$customerId,
            form: new Form({
                id: '',
                full_name: '',
                email: '',
                phone_number: '',
                address: '',
                avatar: ''
            })
        }
    },
    mounted() {
        this.show()
    },
    methods: {
        show(page_url) {
            page_url = `../../../api/customer/info/view-info/${this.customer_id}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.form.fill(res.data[0])
                    if (res.data[0].avatar == 'avatar-mac-dinh.jpg') {
                        this.form.avatar = `../../../public/images/${res.data[0].avatar}`
                    } else {
                        this.form.avatar = `../../../public/images/user/${res.data[0].avatar}`
                    }
                })
                .catch((err) => console.log(err))
        },
        onAvatarChange(e) {
            const file = e.target.files[0]
            this.form.avatar = URL.createObjectURL(file)
        },
        update() {
            this.form.avatar = document.getElementById('file-input').files[0]
            this.form
                .post(`../../../api/customer/info/update-info/${this.customer_id}`)
                .then((res) => {
                    if (res.data == 'errorPhone') {
                        this.$swal({
                            title: 'Số điện thoại không đúng định dạng!',
                            icon: 'error',
                            confirmButtonText: 'OK!',
                            timer: 3500
                        })
                    } else {
                        this.$swal({
                            title: 'Cập nhật thành công!',
                            icon: 'success',
                            confirmButtonText: 'OK!',
                            timer: 3500
                        })
                        this.show()
                    }
                })
                .catch((err) => {
                    this.$snotify.error('Lỗi')
                })
        }
    }
}
</script>

<style scoped>
.button-edit {
    display: flex;
    align-items: center;
    justify-content: center;
}
.content-tab {
    display: block;
}
textarea {
    resize: none;
}
.image-upload > input {
    display: none;
}
.avatar-img {
    height: 20vh;
    border-radius: 100%;
}
</style>
