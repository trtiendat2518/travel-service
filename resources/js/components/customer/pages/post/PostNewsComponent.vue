<template>
    <div class="container">
        <div class="cards">
            <div v-for="post in posts" :key="post.id">
                <a :href="`/bai-viet/${post.slug}`">
                    <article class="post">
                        <div class="featured-image">
                            <img class="post-img" :src="`public/images/post/${post.avatar}`" alt="" />
                        </div>
                        <div class="entry-content">
                            <div class="entry-post-title">
                                <h4 class="post-title">{{ post.place_name }}</h4>
                            </div>
                        </div>
                    </article>
                </a>
            </div>
        </div>
        <pagination-component
            class="pagination-area"
            v-if="pagination.last_page > 1"
            :pagination="pagination"
            :offset="5"
            @paginate="fetchPosts()"
        >
        </pagination-component>
    </div>
</template>

<script>
export default {
    data() {
        return {
            posts: [],
            pagination: {
                current_page: 1,
                last_page: 5
            },
            currentEntries: 15,
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
        }
    }
}
</script>

<style scoped>
h4 {
    color: black !important;
}
a {
    color: black;
}
.decrease-brightness {
    filter: brightness(30%);
}
.post-img {
    width: 100vw;
    height: 20vh;
}
.cards {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
}
@media (min-width: 300px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 600px) {
    .cards {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media only screen and (min-width: 768px) {
    .cards {
        grid-template-columns: repeat(4, 1fr);
    }
}

@media (min-width: 900px) {
    .cards {
        grid-template-columns: repeat(5, 2fr);
    }
}

@media only screen and (min-width: 1200px) {
    .cards {
        grid-template-columns: repeat(5, 2fr);
    }
}
</style>
