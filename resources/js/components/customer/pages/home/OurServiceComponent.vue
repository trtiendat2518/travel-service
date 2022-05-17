<template>
    <div>
        <div class="our-service box">
            <div class="box-title text-center">
                <h3 class="text-capitalize">Dịch Vụ Thuê Xe</h3>
            </div>
            <div class="box-content">
                <div class="container">
                    <div class="cards">
                        <div class="card" v-for="service in services" :key="service.id">
                            <a :href="`/dich-vu-thue-xe/${service.slug}`">
                                <div class="our-service-item">
                                    <img
                                        class="our-service-img decrease-brightness"
                                        :src="`../public/images/service/${service.avatar}`"
                                        alt=""
                                    />
                                    <p class="our-service-caption">{{ service.name }}</p>
                                </div></a
                            >
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
            services: []
        }
    },
    mounted() {
        this.fetchServices()
    },
    methods: {
        fetchServices(page_url) {
            page_url = `../../api/admin/manage-service/service/eight-services`
            fetch(page_url)
                .then((res) => res.json())
                .then((res) => {
                    this.services = res.data
                })
                .catch((err) => console.log(err))
        }
    }
}
</script>

<style scoped>
.decrease-brightness {
    filter: brightness(30%);
}
p {
    font-size: 18px;
}
.our-service-img {
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
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 900px) {
    .cards {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media only screen and (min-width: 1200px) {
    .cards {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>
