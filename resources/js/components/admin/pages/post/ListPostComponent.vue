<template>
    <div class="page-heading">
        <vue-snotify></vue-snotify>
        <div class="page-title">
            <div class="row">
                <div class="col-12 col-md-6 order-md-1 order-last">
                    <h3>Quản lý bài viết</h3>
                </div>
                <div class="col-12 col-md-6 order-md-2 order-first">
                    <nav aria-label="breadcrumb" class="breadcrumb-header float-start float-lg-end">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Quản lý bài viết</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
        <section class="section">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-12">Danh sách các bài viết</div>
                    </div>
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="between:flex bottom:margin-3 ml-2">
                                <div class="center:flex-items">
                                    <span class="right:marign-1">Hiển thị</span>
                                    <select class="select form-select" id="form-select" v-model="currentEntries">
                                        <option v-for="entry in showEntries" :key="entry" :value="entry">
                                            {{ entry }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4"></div>
                        <div class="col-md-5">
                            <input class="form-control form-search" v-model="query" placeholder="Tìm kiếm..." type="text" />
                        </div>
                    </div>
                    <table class="table table-striped" id="table1">
                        <thead>
                            <tr>
                                <th width="20%">Hình ảnh</th>
                                <th width="50%">Tiêu đề</th>
                                <th width="10%">Tác giả</th>
                                <th>Thao tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="post in posts" :key="post.id">
                                <td>
                                    <img class="image-car" :src="`../public/images/post/${post.avatar}`" alt="" />
                                </td>
                                <td>{{ post.title }}</td>
                                <td>{{ post.author_name }}</td>
                                <td>
                                    <button class="btn btn-dark" v-if="post.status == 0" @click="change(post.id)">
                                        <i class="bi bi-eye"></i>
                                    </button>
                                    <button class="btn btn-secondary" v-else-if="post.status == 1" @click="change(post.id)">
                                        <i class="bi bi-eye-slash"></i>
                                    </button>
                                    <router-link
                                        tag="button"
                                        class="btn btn-primary"
                                        :to="{ name: 'post-update', params: { slugPost: slug(post.title) } }"
                                    >
                                        <i class="bi bi-pencil-square"></i>
                                    </router-link>
                                    <button class="btn btn-danger" @click="destroy(post.id)">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                </td>
                            </tr>
                            <tr v-show="!posts.length">
                                <td colspan="4">
                                    <div class="alert alert-danger">Không tìm thấy kết quả phù hợp!</div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <pagination-component
                        v-if="pagination.last_page > 1"
                        :pagination="pagination"
                        :offset="5"
                        @paginate="query === '' ? fetchPosts() : search()"
                    >
                    </pagination-component>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import 'vue-snotify/styles/material.css'
export default {
    data() {
        return {
            posts: [],
            pagination: {
                current_page: 1,
                last_page: 5
            },
            currentEntries: 10,
            showEntries: [5, 10, 25, 50],
            query: '',
            editMode: false,
            form: new Form({
                id: '',
                title: '',
                category_id: '',
                content: '',
                status: '',
                author: '',
                avatar: ''
            })
        }
    },
    mounted() {
        this.fetchPosts()
    },
    watch: {
        currentEntries(number) {
            if (number === 10) {
                this.pagination = 1
                this.fetchPosts()
            } else {
                this.pagination = 1
                this.fetchPosts()
            }
        },
        query(keyword) {
            if (keyword === '') {
                this.fetchPosts()
            } else {
                this.pagination.current_page = 1
                this.search()
            }
        }
    },
    methods: {
        empty() {
            return this.posts.length < 1
        },
        fetchPosts(page_url) {
            page_url = `../../api/admin/manage-post/post/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.posts = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        search(page_url) {
            page_url = `../../api/admin/manage-post/post/search/${this.query}/${this.currentEntries}?page=${this.pagination.current_page}`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.posts = res.data
                    this.pagination = res.meta
                })
                .catch((err) => console.log(err))
        },
        change(carId) {
            axios
                .patch(`../../api/admin/manage-post/post/change/${carId}`)
                .then((res) => {
                    this.fetchPosts()
                    this.$snotify.success('Cập nhật trạng thái thành công!')
                })
                .catch((err) => console.log(err))
        },
        destroy(postId) {
            this.$snotify.clear()
            this.$snotify.confirm('Xác nhận xóa', {
                timeout: 5000,
                showProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                buttons: [
                    {
                        text: 'Xóa',
                        action: (toast) => {
                            this.$snotify.remove(toast.id)
                            axios
                                .delete(`../../api/admin/manage-post/post/${postId}`)
                                .then((res) => {
                                    this.$snotify.success('Đã xóa!')
                                    let checkData = this.posts.length - 1
                                    if (checkData == 0) {
                                        this.pagination.current_page = this.pagination.current_page - 1
                                    }
                                    this.fetchPosts()
                                })
                                .catch((err) => console.log(err))
                        },
                        bold: false
                    },
                    {
                        text: 'Đóng',
                        action: (toast) => {
                            this.$snotify.remove(toast.id)
                        },
                        bold: true
                    }
                ]
            })
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
#form-select {
    width: 25%;
    display: inline;
}
.form-search {
    float: right;
}
.btn-right {
    float: right;
}
.select-right {
    float: right;
}
.required {
    color: red;
}
.styling-img-car {
    display: block;
    width: 30vw;
    height: 40vh;
    margin-top: 15px;
    margin-left: auto;
    margin-right: auto;
}
.image-car {
    width: 10vw;
    height: 10vh;
}
</style>
