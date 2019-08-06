import Vue from 'vue/dist/vue'
import router from './router'

// import Vue from 'vue' // 3.10版本不能这么引入
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'



/* eslint-disable no-new */

Vue.config.productionTip = false

Vue.use(Antd)

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})

