import Vue from "vue";

// Home
Vue.component(
    "banner-component",
    require("./components/user/pages/home/BannerComponent.vue").default
);
Vue.component(
    "our-service-component",
    require("./components/user/pages/home/OurServiceComponent.vue").default
);
Vue.component(
    "car-category-component",
    require("./components/user/pages/home/CarCategoryComponent.vue").default
);
Vue.component(
    "feedback-component",
    require("./components/user/pages/home/FeedbackComponent.vue").default
);
Vue.component(
    "booking-now-component",
    require("./components/user/pages/home/BookingNowComponent.vue").default
);

// Service
Vue.component(
    "booking-service-component",
    require("./components/user/pages/service/BookingServiceComponent.vue")
        .default
);

// Post
Vue.component(
    "post-news-component",
    require("./components/user/pages/post/PostNewsComponent.vue").default
);
