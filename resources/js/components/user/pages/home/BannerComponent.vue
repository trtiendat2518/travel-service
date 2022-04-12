<template>
    <div>
        <div class="banner">
            <div class="owl-carousel owl-banner owl-theme">
                <div class="item">
                    <img
                        class="decrease-brightness"
                        :src="`../public/user/img/dich-vu-thue-xe-tai-vung-tau.png`"
                        alt=""
                    />
                    <div class="caption text-center">
                        <h4 class="amimate-caption-title mb-5">
                            Bà Rịa - Vũng Tàu
                        </h4>
                        <p class="amimate-caption-desc">
                            Biển đẹp và hải sản tươi ngon
                        </p>
                    </div>
                </div>
                <div class="item">
                    <img
                        class="decrease-brightness"
                        :src="`../public/user/img/dich-vu-cho-thue-xe-du-lich-da-lat.png`"
                        alt=""
                    />
                    <div class="caption text-center">
                        <h4 class="amimate-caption-title mb-5">Đà Lạt</h4>
                        <p class="amimate-caption-desc">
                            Không khí lạnh cùng với những tách cà phê nóng !
                        </p>
                    </div>
                </div>
                <div class="item">
                    <img
                        class="decrease-brightness"
                        :src="`../public/user/img/dich-vu-cho-thue-xe-tphcm.png`"
                        alt=""
                    />
                    <div class="caption text-center">
                        <h4 class="amimate-caption-title mb-5">Hồ Chí Minh</h4>
                        <p class="amimate-caption-desc">
                            Địa điểm vui chơi sài thành !
                        </p>
                    </div>
                </div>
                <div class="item">
                    <img
                        class="decrease-brightness"
                        :src="`../public/user/img/dich-vu-du-lich-cha-diep.png`"
                        alt=""
                    />
                    <div class="caption text-center">
                        <h4 class="amimate-caption-title mb-5">Chà Điệp</h4>
                        <p class="amimate-caption-desc">
                            Offering the Best Limo Service in New York.
                            Experience It Now !
                        </p>
                    </div>
                </div>
                <div class="item">
                    <img
                        class="decrease-brightness"
                        :src="`../public/user/img/thue-xe-du-lich-binh-duong.png`"
                        alt=""
                    />
                    <div class="caption text-center mb-5">
                        <h4 class="amimate-caption-title">Bình Dương</h4>
                        <p class="amimate-caption-desc">
                            Offering the Best Limo Service in New York.
                            Experience It Now !
                        </p>
                    </div>
                </div>
            </div>

            <div class="tab-booking">
                <div class="container-fluid p-0">
                    <form
                        action="post"
                        class="text-center booking-form justify-content-end d-flex align-items-center"
                    >
                        <a
                            href="#booking-now"
                            class="form-item-link text-uppercase m-0"
                        >
                            <i class="fa-solid fa-hand-point-right"></i>
                            <span id="button-booking-banner">
                                &nbsp;Đặt xe ngay&nbsp;
                            </span>
                            <i class="fa-solid fa-hand-point-left"></i>
                        </a>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#button-booking-banner {
    padding: 0;
}
a:hover {
    color: #fff;
}
.decrease-brightness {
    filter: brightness(30%);
}
</style>
