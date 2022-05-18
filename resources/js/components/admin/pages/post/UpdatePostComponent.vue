<template>
    <div class="page-heading">
        <vue-snotify></vue-snotify>
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>Cập nhật bài viết</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                            <li class="breadcrumb-item"><a href="/admin/quan-ly-bai-viet">Quản lý bài viết</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Cập nhật bài viết</li>
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
                                                    <label for="first-name-vertical">Tiêu đề</label>
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        class="form-control"
                                                        name="title"
                                                        v-model="form.title"
                                                        placeholder="Tiêu đề bài viết"
                                                    />
                                                    <div
                                                        class="text-danger mb-3"
                                                        v-if="form.errors.has('title')"
                                                        v-html="form.errors.get('title')"
                                                    ></div>
                                                </div>
                                            </div>
                                            <div class="col-12 mb-2">
                                                <div class="form-group">
                                                    <label for="first-name-vertical">Danh mục</label>
                                                    <select
                                                        class="form-select select"
                                                        name="category_id"
                                                        id="category_id"
                                                        v-model="form.category_id"
                                                    >
                                                        <option value="" disabled>Chọn nơi muốn viết</option>
                                                        <option v-for="place in places" :key="place.id" :value="place.id">
                                                            {{ place.name }}
                                                        </option>
                                                    </select>
                                                    <div
                                                        class="text-danger mb-3"
                                                        v-if="form.errors.has('category_id')"
                                                        v-html="form.errors.get('category_id')"
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
                                                    <vue-editor v-model="form.content" :editorToolbar="customToolbar"></vue-editor>
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
import { VueEditor } from 'vue2-editor'
export default {
    components: {
        VueEditor
    },
    data() {
        return {
            posts: [],
            places: [],
            post_slug: this.$route.params.slugPost,
            form: new Form({
                id: '',
                title: '',
                category_id: '',
                avatar: '',
                content: '',
                tags: [],
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
            this.post_slug = to.params.slugPost
        }
    },
    mounted() {
        this.fetchPlaces()
        this.show()
    },
    methods: {
        fetchPlaces(page_url) {
            page_url = `../../../api/admin/manage-order/order/place`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.places = res.data
                })
                .catch((err) => console.log(err))
        },
        show(page_url) {
            page_url = `../../../api/admin/manage-post/post/detail/${this.post_slug}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.form.fill(res.data[0])
                    let tag = res.data[0].tags.split(',')
                    this.form.tags = tag
                    this.form.avatar = `../../../public/images/post/${res.data[0].avatar}`
                })
                .catch((err) => console.log(err))
        },
        update() {
            this.form.avatar = document.getElementById('avatar').files[0]
            this.form
                .post(`../../../api/admin/manage-post/post/upgrade/${this.form.id}`)
                .then((res) => {
                    this.$snotify.success('Cập nhật thành công!')
                    this.post_slug = this.slug(this.form.title)
                    this.$router.push({ name: 'post-update', params: { slugPost: this.post_slug } })
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
            window.location.href = `../../../admin/quan-ly-bai-viet`
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
