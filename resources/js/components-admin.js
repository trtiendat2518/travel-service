import Vue from 'vue'

Vue.component('pagination-component', require('./components/common/PaginationComponent.vue').default)

Vue.component('dashboard-component', require('./components/admin/DashboardComponent.vue').default)

// Account
Vue.component('account-component', require('./components/admin/pages/account/AccountComponent.vue').default)

// Order
Vue.component('order-component', require('./components/admin/pages/order/OrderComponent.vue').default)

// Car Category
Vue.component('car-component', require('./components/admin/pages/car/CarComponent.vue').default)
Vue.component('create-car-component', require('./components/admin/pages/car/CreateCarComponent.vue').default)
Vue.component('update-car-component', require('./components/admin/pages/car/UpdateCarComponent.vue').default)
Vue.component('list-car-component', require('./components/admin/pages/car/ListCarComponent.vue').default)

// Service
Vue.component('service-component', require('./components/admin/pages/service/ServiceComponent.vue').default)
Vue.component('create-service-component', require('./components/admin/pages/service/CreateServiceComponent.vue').default)
Vue.component('update-service-component', require('./components/admin/pages/service/UpdateServiceComponent.vue').default)
Vue.component('list-service-component', require('./components/admin/pages/service/ListServiceComponent.vue').default)

// Post
Vue.component('post-component', require('./components/admin/pages/post/PostComponent.vue').default)
Vue.component('create-post-component', require('./components/admin/pages/post/CreatePostComponent.vue').default)
Vue.component('update-post-component', require('./components/admin/pages/post/UpdatePostComponent.vue').default)
Vue.component('list-post-component', require('./components/admin/pages/post/ListPostComponent.vue').default)

// Consulting
Vue.component('consulting-component', require('./components/admin/pages/consulting/ConsultingComponent.vue').default)
