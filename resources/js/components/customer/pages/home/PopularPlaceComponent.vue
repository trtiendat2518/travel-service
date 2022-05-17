<template>
    <div>
        <div class="our-service box">
            <div class="box-title text-center">
                <h3 class="text-capitalize">Địa điểm phổ biến</h3>
            </div>
            <div class="box-content">
                <div class="container">
                    <div class="cards">
                        <div v-for="post in post_popular" :key="post.id">
                            <a :href="`/bai-viet/${post.slug}`">
                                <article class="post post-styling">
                                    <div class="featured-image">
                                        <img class="post-img" :src="`public/images/post/${post.avatar}`" alt="" />
                                    </div>
                                    <div class="entry-content">
                                        <div class="entry-post-title">
                                            <h4 class="post-title">{{ post.name }}</h4>
                                        </div>
                                    </div>
                                </article>
                            </a>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <div class="btn-submit">
                                <button class="text-center view-all" type="submit" @click="viewAll()">Xem tất cả</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            post_popular: []
        }
    },
    mounted() {
        this.showPostPopular()
    },
    methods: {
        viewAll() {
            window.location.href = '../bai-viet'
        },
        showPostPopular(page_url) {
            page_url = `../../../api/customer/post/popular`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.post_popular = res.data
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
.view-all:hover {
    background-color: #3a8adc;
}
.post-styling {
    border: none !important;
}
.post-img {
    width: 100vw;
    height: 15vh;
}
.cards {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-gap: 1rem;
}

@media (min-width: 300px) {
    .cards {
        grid-template-columns: repeat(2, 3fr);
    }
}

@media (min-width: 600px) {
    .cards {
        grid-template-columns: repeat(4, 3fr);
    }
}

@media only screen and (min-width: 768px) {
    .cards {
        grid-template-columns: repeat(4, 3fr);
    }
}

@media (min-width: 900px) {
    .cards {
        grid-template-columns: repeat(6, 2fr);
    }
}

@media only screen and (min-width: 1200px) {
    .cards {
        grid-template-columns: repeat(6, 2fr);
    }
}
</style>
