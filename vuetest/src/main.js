import Vue from 'vue'
import App from './App'
import router from './router'
import VueMeta from 'vue-meta'

Vue.config.productionTip = false

Vue.use(router)
Vue.use(VueMeta)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
