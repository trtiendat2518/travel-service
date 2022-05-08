<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <a href="/bai-viet/chi-tiet">
                    <article class="post">
                        <div class="featured-image">
                            <img
                                :src="`public/user/img/dich-vu-cho-thue-xe-tphcm.png`"
                                alt=""
                            />
                        </div>
                        <div class="entry-content">
                            <div class="entry-post-title">
                                <h4 class="post-title">Hồ Chí Minh</h4>
                            </div>
                        </div>
                    </article>
                </a>
            </div>
            <div class="col-lg-4 col-sm-6">
                <article class="post">
                    <div class="featured-image">
                        <img
                            :src="`public/user/img/dich-vu-cho-thue-xe-du-lich-da-lat.png`"
                            alt=""
                        />
                    </div>
                    <div class="entry-content">
                        <div class="entry-post-title">
                            <h4 class="post-title">Đà Lạt</h4>
                        </div>
                    </div>
                </article>
            </div>
            <div class="col-lg-4 col-sm-6">
                <article class="post">
                    <div class="featured-image">
                        <img
                            :src="`public/user/img/dich-vu-thue-xe-tai-vung-tau.png`"
                            alt=""
                        />
                    </div>
                    <div class="entry-content">
                        <div class="entry-post-title">
                            <h4 class="post-title">Vũng Tàu</h4>
                        </div>
                    </div>
                </article>
            </div>
            <div class="col-lg-4 col-sm-6">
                <article class="post">
                    <div class="featured-image">
                        <img
                            :src="`public/user/img/thue-xe-du-lich-binh-duong.png`"
                            alt=""
                        />
                    </div>
                    <div class="entry-content">
                        <div class="entry-post-title">
                            <h4 class="post-title">Bình Dương</h4>
                        </div>
                    </div>
                </article>
            </div>
            <div class="col-lg-4 col-sm-6">
                <article class="post">
                    <div class="featured-image">
                        <img
                            :src="`public/user/img/dich-vu-cho-thue-xe-tphcm.png`"
                            alt=""
                        />
                    </div>
                    <div class="entry-content">
                        <div class="entry-post-title">
                            <h4 class="post-title">Hà Nội</h4>
                        </div>
                    </div>
                </article>
            </div>
            <div class="col-lg-4 col-sm-6">
                <article class="post">
                    <div class="featured-image">
                        <img
                            :src="`public/user/img/dich-vu-cho-thue-xe-tphcm.png`"
                            alt=""
                        />
                    </div>
                    <div class="entry-content">
                        <div class="entry-post-title">
                            <h4 class="post-title">Nha Trang</h4>
                        </div>
                    </div>
                </article>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="pagination-area">
                    <ul>
                        <li class="prev">
                            <a href="#" class="waves-effect" title="">
                                <img src="public/user/img/prev.png" alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="#" class="waves-effect" title="">1</a>
                        </li>
                        <li class="active">
                            <a href="#" class="waves-effect" title="">2</a>
                        </li>
                        <li><a href="#" class="waves-effect" title="">3</a></li>
                        <li>
                            <a href="#" class="waves-effect" title="">...</a>
                        </li>
                        <li>
                            <a href="#" class="waves-effect" title="">22</a>
                        </li>
                        <li class="next">
                            <a href="#" class="waves-effect" title="">
                                <img src="public/user/img/next.png" alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
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
</style>
