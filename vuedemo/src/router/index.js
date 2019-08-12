import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Meta from 'vue-meta'
// Vue.use(Meta)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import(/* webpackChunkName: 'ImportFuncDemo' */'../components/HelloWorld')
    },
    {
      path: '/qr',
      name: 'qr',
      component: () => import(/* webpackChunkName: 'ImportFuncDemo' */'../components/qr')
    },
    {
      path: '/qx',
      name: 'qx',
      component: () => import(/* webpackChunkName: 'ImportFuncDemo' */'../components/qx')
      // component: resolve => require(['@/components/HelloWorld'], resolve)
      // component: r => require.ensure([], () => r(require('@/components/qx')), 'demo')
    }
  ]
})
