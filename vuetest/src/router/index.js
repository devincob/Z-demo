import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

import firstChild from '@/components/firstChild'
import secondChild from '@/components/secondChild'

Vue.use(Router)
Vue.use(Meta)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app',
      component: {firstChild, secondChild}
    }, {
      path: '/index',
      name: 'Index',
      component: resolve => require(['@/components/index'], resolve)
    }
  ]
})
