import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import Service from './components/admin/pages/service/ServiceComponent.vue'
import ListService from './components/admin/pages/service/ListServiceComponent.vue'
import UpdateService from './components/admin/pages/service/UpdateServiceComponent.vue'

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
                    path: 'cap-nhat/:idService',
                    name: 'service-update',
                    component: UpdateService
                }
            ]
        }
    ],
    mode: 'history'
})
