<template>
    <div class="page-heading">
        <vue-snotify></vue-snotify>
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>{{ this.form.name }}</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                            <li class="breadcrumb-item"><a href="/admin/quan-ly-dich-vu">Quản lý dịch vụ</a></li>
                            <li class="breadcrumb-item active" aria-current="page">{{ this.form.name }}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>

        <!-- Basic Vertical form layout section start -->
        <section id="basic-vertical-layouts">
            <div class="row match-height">
                <div class="col-md-12 col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <form @submit.prevent="update()" @keydown="form.onKeydown($event)" class="form form-vertical">
                                    <div class="form-body">
                                        <div class="row">
                                            <div class="col-12 mb-2">
                                                <div class="form-group">
                                                    <label for="first-name-vertical">Tên dịch vụ</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        class="form-control"
                                                        name="name"
                                                        v-model="form.name"
                                                        placeholder="Tên dịch vụ thuê xe"
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
                                                    <input-tag v-model="form.tags" placeholder="Gắn thẻ cho dịch vụ"></input-tag>
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

                                            <div class="col-6 d-flex">
                                                <button type="button" class="btn btn-secondary me-1 mb-1" @click="backList()">
                                                    Quay lại
                                                </button>
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
        </section>
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
            services: [],
            service_slug: this.$route.params.slugService,
            form: new Form({
                id: '',
                name: '',
                avatar: '',
                content: '',
                slug: '',
                tags: [],
                author: this.$adminId
            }),
            config: {
                filebrowserImageUploadUrl: '../../../public/admin/js/ckeditor/upload-images-service.php',
                filebrowserImageBrowseUrl: '../../../public/images',
                filebrowserUploadMethod: 'form',
                editorplaceholder: 'Mô tả chi tiết...',
                language: 'vi',
                height: 300
            }
        }
    },
    watch: {
        $route(to, from) {
            this.service_slug = to.params.slugService
        }
    },
    mounted() {
        this.show()
    },
    methods: {
        show(page_url) {
            page_url = `../../../api/admin/manage-service/service/detail/${this.service_slug}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.form.fill(res.data[0])
                    let tag = res.data[0].tags.split(',')
                    this.form.tags = tag
                    this.form.avatar = `../../../public/images/service/${res.data[0].avatar}`
                })
                .catch((err) => console.log(err))
        },
        update() {
            this.form.avatar = document.getElementById('avatar').files[0]
            this.form
                .post(`../../../api/admin/manage-service/service/upgrade/${this.form.id}`)
                .then((res) => {
                    if (this.form.successful) {
                        this.$snotify.success('Cập nhật thành công!')
                        this.service_slug = this.slug(this.form.name)
                        this.$router.push({ name: 'service-update', params: { slugService: this.service_slug } })
                        this.show()
                    }
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
            window.location.href = `../../../admin/quan-ly-dich-vu`
        },
        slug(name) {
            var slug = ''
            // Change to lower case
            var nameLower = name.toLowerCase()
            // Letter "e"
            slug = nameLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e')
            // Letter "a"
            slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a')
            // Letter "o"
            slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o')
            // Letter "u"
            slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u')
            // Letter "d"
            slug = slug.replace(/đ/gi, 'd')
            // Trim the last whitespace
            slug = slug.replace(/\s*$/g, '')
            // Change whitespace to "-"
            slug = slug.replace(/\s+/g, '-')

            return slug
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
