<template>
    <div class="row match-height">
        <vue-snotify></vue-snotify>
        <div class="col-md-12 col-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <form @submit.prevent="store()" @keydown="form.onKeydown($event)" class="form form-vertical">
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label for="first-name-vertical">Tên loại xe</label>
                                            <input
                                                type="text"
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
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label for="first-name-vertical">Gắn thẻ</label>
                                            <input-tag v-model="form.tags" placeholder="Gắn thẻ bài viết"></input-tag>
                                            <div
                                                class="text-danger mb-3"
                                                v-if="form.errors.has('tags')"
                                                v-html="form.errors.get('tags')"
                                            ></div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="contact-info-vertical">Nội dung mô tả</label>
                                            <vue-ckeditor v-model="form.content" :config="config"></vue-ckeditor>
                                            <div
                                                class="text-danger mb-3"
                                                v-if="form.errors.has('content')"
                                                v-html="form.errors.get('content')"
                                            ></div>
                                        </div>
                                    </div>

                                    <div class="col-12 d-flex justify-content-end">
                                        <button type="submit" class="btn btn-primary me-1 mb-1">Tạo mới</button>
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
import VueCkeditor from 'vue-ckeditor2'
export default {
    components: {
        VueCkeditor
    },
    data() {
        return {
            form: new Form({
                id: '',
                name: '',
                avatar: '',
                content: '',
                tags: [],
                author: this.$adminId
            }),
            config: {
                filebrowserImageUploadUrl: '../public/admin/js/ckeditor/upload-images-car.php',
                filebrowserImageBrowseUrl: '../public/images',
                filebrowserUploadMethod: 'form',
                editorplaceholder: 'Mô tả chi tiết...',
                language: 'vi',
                height: 300
            }
        }
    },
    methods: {
        store() {
            this.form.avatar = document.getElementById('avatar').files[0]
            this.form
                .post('../../api/admin/manage-car/car')
                .then((res) => {
                    if (this.form.successful) {
                        this.$snotify.success('Thêm mới thành công!')
                        this.form.reset()
                        this.form.clear()
                        this.$refs.fileupload.value = ''
                    }
                })
                .catch((err) => {
                    this.$snotify.error('Lỗi')
                })
        },
        onAvatarChange(e) {
            const file = e.target.files[0]
            this.form.avatar = URL.createObjectURL(file)
        }
    }
}
</script>

<style scoped>
@import '~vue2-editor/dist/vue2-editor.css';

/* Import the Quill styles you want */
@import '~quill/dist/quill.core.css';
@import '~quill/dist/quill.bubble.css';
@import '~quill/dist/quill.snow.css';
.styling-img-service {
    display: block;
    width: 70vw;
    height: 40vh;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
}
</style>
