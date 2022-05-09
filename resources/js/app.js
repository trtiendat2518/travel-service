require('./bootstrap')

import Vue from 'vue'
import Form from 'vform'
import notify from './notify.js'
import formatDatetime from './format-datetime.js'
import router from './routes.js'
import VueSweetalert2 from 'vue-sweetalert2'
import componentUser from './components-user.js'
import componentAdmin from './components-admin.js'

window.Form = Form
window.Vue = require('vue').default

Vue.config.productionTip = false
Vue.use(VueSweetalert2)

const app = new Vue({
    el: '#app',
    router
})
