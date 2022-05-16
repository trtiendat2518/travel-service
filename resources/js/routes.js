import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Car from './components/admin/pages/car/CarComponent.vue'
import ListCar from './components/admin/pages/car/ListCarComponent.vue'
import UpdateCar from './components/admin/pages/car/UpdateCarComponent.vue'
import DetailCar from './components/customer/pages/car/DetailCarComponent.vue'

import Service from './components/admin/pages/service/ServiceComponent.vue'
import ListService from './components/admin/pages/service/ListServiceComponent.vue'
import UpdateService from './components/admin/pages/service/UpdateServiceComponent.vue'
import DetailService from './components/customer/pages/service/DetailServiceComponent.vue'

import Post from './components/admin/pages/post/PostComponent.vue'
import ListPost from './components/admin/pages/post/ListPostComponent.vue'
import UpdatePost from './components/admin/pages/post/UpdatePostComponent.vue'
import DetailPost from './components/customer/pages/post/DetailPostComponent.vue'

import DetailHashtag from './components/customer/pages/post/DetailTagsComponent.vue'

export default new VueRouter({
    routes: [
        {
            path: '/admin/quan-ly-dich-vu',
            name: 'service',
            component: Service,
            children: [
                {
                    path: '',
                    name: 'service-index',
                    component: ListService
                },

                {
                    path: 'cap-nhat/:slugService',
                    name: 'service-update',
                    component: UpdateService
                }
            ]
        },

        {
            path: '/dich-vu-thue-xe/:slugService',
            name: 'service-detail',
            component: DetailService
        },

        {
            path: '/admin/quan-ly-loai-xe',
            name: 'car',
            component: Car,
            children: [
                {
                    path: '',
                    name: 'car-index',
                    component: ListCar
                },

                {
                    path: 'cap-nhat/:slugCar',
                    name: 'car-update',
                    component: UpdateCar
                }
            ]
        },

        {
            path: '/loai-xe/:slugCar',
            name: 'car-detail',
            component: DetailCar
        },

        {
            path: '/admin/quan-ly-bai-viet',
            name: 'post',
            component: Post,
            children: [
                {
                    path: '',
                    name: 'post-index',
                    component: ListPost
                },

                {
                    path: 'cap-nhat/:slugPost',
                    name: 'post-update',
                    component: UpdatePost
                }
            ]
        },
        {
            path: '/bai-viet/:slugPost',
            name: 'post-detail',
            component: DetailPost
        },

        {
            path: '/hashtag/:slug',
            name: 'hashtag-detail',
            component: DetailHashtag
        }
    ],
    mode: 'history'
})
