import Vue from "vue";

Vue.component(
    "pagination-component",
    require("./components/common/PaginationComponent.vue").default
);

Vue.component(
    "dashboard-component",
    require("./components/admin/DashboardComponent.vue").default
);

// Account
Vue.component(
    "account-component",
    require("./components/admin/pages/account/AccountComponent.vue").default
);

// Order
Vue.component(
    "order-component",
    require("./components/admin/pages/order/OrderComponent.vue").default
);

// Car Category
Vue.component(
    "car-component",
    require("./components/admin/pages/car/CarComponent.vue").default
);

// Service
Vue.component(
    "create-service-component",
    require("./components/admin/pages/service/CreateServiceComponent.vue")
        .default
);
Vue.component(
    "list-service-component",
    require("./components/admin/pages/service/ListServiceComponent.vue").default
);

// Consulting
Vue.component(
    "consulting-component",
    require("./components/admin/pages/consulting/ConsultingComponent.vue")
        .default
);
