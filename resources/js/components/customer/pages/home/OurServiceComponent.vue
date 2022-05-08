<template>
    <div>
        <div class="our-service box">
            <div class="box-title text-center">
                <h2 class="text-capitalize">Dịch Vụ Thuê Xe</h2>
                <h3 class="text-capitalize">Dịch Vụ Thuê Xe</h3>
            </div>
            <div class="box-content">
                <div class="container">
                    <div class="row">
                        <div
                            class="col-md-3 d-flex flex-column justify-content-between mt-4"
                        >
                            <a href="/dich-vu-thue-xe">
                                <div class="our-service-item">
                                    <img
                                        class="our-service-img decrease-brightness"
                                        :src="`../public/user/img/xe-dua-don-san-bay.png`"
                                        alt=""
                                    />
                                    <p class="our-service-caption">
                                        Đưa đón sân bay
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div
                            class="col-md-3 d-flex flex-column justify-content-between mt-4"
                        >
                            <div class="our-service-item">
                                <img
                                    class="our-service-img decrease-brightness"
                                    :src="`../public/user/img/xe-di-cap-cuu.png`"
                                    alt=""
                                />
                                <p class="our-service-caption">Xe đi cấp cứu</p>
                            </div>
                        </div>
                        <div
                            class="col-md-3 d-flex flex-column justify-content-between mt-4"
                        >
                            <div class="our-service-item">
                                <img
                                    class="our-service-img decrease-brightness"
                                    :src="`../public/user/img/xe-di-cong-tac.png`"
                                    alt=""
                                />
                                <p class="our-service-caption">
                                    Xe đi công tác
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-md-3 d-flex flex-column justify-content-between mt-4"
                        >
                            <div class="our-service-item">
                                <img
                                    class="our-service-img decrease-brightness"
                                    :src="`../public/user/img/xe-ve-que.png`"
                                    alt=""
                                />
                                <p class="our-service-caption">Xe đi về quê</p>
                            </div>
                        </div>
                        <div
                            class="col-md-3 d-flex flex-column justify-content-between mt-4"
                        >
                            <div class="our-service-item">
                                <img
                                    class="our-service-img decrease-brightness"
                                    :src="`../public/user/img/xe-di-1-chieu.png`"
                                    alt=""
                                />
                                <p class="our-service-caption">Xe đi 1 chiều</p>
                            </div>
                        </div>
                        <div
                            class="col-md-3 d-flex flex-column justify-content-between mt-4"
                        >
                            <div class="our-service-item">
                                <img
                                    class="our-service-img decrease-brightness"
                                    :src="`../public/user/img/xe-di-2-chieu.png`"
                                    alt=""
                                />
                                <p class="our-service-caption">Xe đi 2 chiều</p>
                            </div>
                        </div>
                        <div
                            class="col-md-3 d-flex flex-column justify-content-between mt-4"
                        >
                            <div class="our-service-item">
                                <img
                                    class="our-service-img decrease-brightness"
                                    :src="`../public/user/img/xe-di-2-chieu.png`"
                                    alt=""
                                />
                                <p class="our-service-caption">
                                    Xe hoa cưới hỏi
                                </p>
                            </div>
                        </div>
                        <div
                            class="col-md-3 d-flex flex-column justify-content-between mt-4"
                        >
                            <div class="our-service-item">
                                <img
                                    class="our-service-img decrease-brightness"
                                    :src="`../public/user/img/xe-di-2-chieu.png`"
                                    alt=""
                                />
                                <p class="our-service-caption">Xe đi sự kiện</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.decrease-brightness {
    filter: brightness(30%);
}
p {
    font-size: 18px;
}
</style>
