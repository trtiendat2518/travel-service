import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Car from './components/admin/pages/car/CarComponent.vue'
import ListCar from './components/admin/pages/car/ListCarComponent.vue'
import UpdateCar from './components/admin/pages/car/UpdateCarComponent.vue'

import Service from './components/admin/pages/service/ServiceComponent.vue'
import ListService from './components/admin/pages/service/ListServiceComponent.vue'
import UpdateService from './components/admin/pages/service/UpdateServiceComponent.vue'

import Post from './components/admin/pages/post/PostComponent.vue'
import ListPost from './components/admin/pages/post/ListPostComponent.vue'
import UpdatePost from './components/admin/pages/post/UpdatePostComponent.vue'

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
        }
    ],
    mode: 'history'
})
