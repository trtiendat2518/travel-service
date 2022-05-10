<template>
    <div class="row match-height">
        <vue-snotify></vue-snotify>
        <div class="col-md-12 col-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <form @submit.prevent="update()" @keydown="form.onKeydown($event)" class="form form-vertical">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label for="first-name-vertical">Tên loại xe</label>
                                            <input
                                                type="text"
                                                id="name"
                                                class="form-control"
                                                name="name"
                                                v-model="form.name"
                                                placeholder="Tên loại xe"
                                            />
                                            <div
                                                class="text-danger mb-3"
                                                v-if="form.errors.has('name')"
                                                v-html="form.errors.get('name')"
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label for="avatar">Hình ảnh</label>
                                            <input
                                                type="file"
                                                id="avatar"
                                                class="form-control"
                                                name="avatar"
                                                ref="fileupload"
                                                @change="onAvatarChange"
                                            />
                                            <div
                                                class="text-danger mb-3"
                                                v-if="form.errors.has('avatar')"
                                                v-html="form.errors.get('avatar')"
                                            ></div>
                                            <img
                                                class="styling-img-service center"
                                                v-if="form.avatar"
                                                :src="form.avatar"
                                                alt="car_avatar"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="contact-info-vertical">Nội dung mô tả</label>
                                            <vue-editor v-model="form.content" :editorToolbar="customToolbar"></vue-editor>
                                            <div
                                                class="text-danger mb-3"
                                                v-if="form.errors.has('content')"
                                                v-html="form.errors.get('content')"
                                            ></div>
                                        </div>
                                    </div>

                                    <div class="col-6 d-flex">
                                        <button type="button" class="btn btn-secondary me-1 mb-1" @click="backList()">Quay lại</button>
                                    </div>

                                    <div class="col-12 d-flex justify-content-end">
                                        <button type="submit" class="btn btn-primary me-1 mb-1">Cập nhật</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue-snotify/styles/material.css'
import { VueEditor } from 'vue2-editor'
export default {
    components: {
        VueEditor
    },
    data() {
        return {
            cars: [],
            car_id: this.$route.params.idCar,
            form: new Form({
                id: '',
                name: '',
                avatar: '',
                content: '',
                author: this.$adminId
            }),
            customToolbar: [
                [{ header: [false, 1, 2, 3, 4, 5, 6] }],
                [{ size: ['small', false, 'large', 'huge'] }],
                ['bold', 'italic', 'underline', 'strike'],
                [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
                [{ header: 1 }, { header: 2 }],
                ['blockquote', 'code-block'],
                [{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
                [{ script: 'sub' }, { script: 'super' }],
                [{ indent: '-1' }, { indent: '+1' }],
                [{ color: [] }, { background: [] }],
                ['link', 'image', 'video', 'formula'],
                [{ direction: 'rtl' }]
            ]
        }
    },
    watch: {
        $route(to, from) {
            this.car_id = to.params.idCar
        }
    },
    mounted() {
        this.show()
    },
    methods: {
        show(page_url) {
            page_url = `../../../api/admin/manage-car/car/detail/${this.car_id}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.form.fill(res.data[0])
                    this.form.avatar = `../../../public/images/car/${res.data[0].avatar}`
                })
                .catch((err) => console.log(err))
        },
        update() {
            this.form.avatar = document.getElementById('avatar').files[0]
            this.form
                .post(`../../../api/admin/manage-car/car/upgrade/${this.car_id}`)
                .then((res) => {
                    this.$snotify.success('Cập nhật thành công!')
                    this.show()
                })
                .catch((err) => {
                    this.$snotify.error('Lỗi')
                })
        },
        onAvatarChange(e) {
            const file = e.target.files[0]
            this.form.avatar = URL.createObjectURL(file)
        },
        backList() {
            window.location.href = `../../../admin/quan-ly-loai-xe`
        }
    }
}
</script>

<style scoped>
@import '~vue2-editor/dist/vue2-editor.css';
.styling-img-service {
    display: block;
    width: 70vw;
    height: 40vh;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
}
</style>
