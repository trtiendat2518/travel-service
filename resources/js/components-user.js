import Vue from 'vue'

// Home
Vue.component('banner-component', require('./components/customer/pages/home/BannerComponent.vue').default)
Vue.component('our-service-component', require('./components/customer/pages/home/OurServiceComponent.vue').default)
Vue.component('our-process-component', require('./components/customer/pages/home/OurProcessComponent.vue').default)
Vue.component('car-category-component', require('./components/customer/pages/home/CarCategoryComponent.vue').default)
Vue.component('feedback-component', require('./components/customer/pages/home/FeedbackComponent.vue').default)
Vue.component('booking-now-component', require('./components/customer/pages/home/BookingNowComponent.vue').default)
Vue.component('popular-place-component', require('./components/customer/pages/home/PopularPlaceComponent.vue').default)

// Service
Vue.component('detail-service-component', require('./components/customer/pages/service/DetailServiceComponent.vue').default)

// Post
Vue.component('post-news-component', require('./components/customer/pages/post/PostNewsComponent.vue').default)
Vue.component('detail-post-component', require('./components/customer/pages/post/DetailPostComponent.vue').default)

// Order History
Vue.component('order-history-component', require('./components/customer/pages/order_history/OrderHistoryComponent.vue').default)
