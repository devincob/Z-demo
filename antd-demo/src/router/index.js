// import Vue from 'vue'
import Vue from 'vue/dist/vue'
import store from '../store'
import Antd from 'ant-design-vue'

import Router from 'vue-router'
// import HelloWorld from './../components/HelloWorld'
import MainLayout from './../components/MainLayout'
import NotFoundPage from '@/components/NotFoundPage'


// import routes from "./routers";
const routes = [
    {path: '/', name: 'index', component: () => import('@/pages/index')},
    {path: '/HelloWorld', name: 'HelloWorld', component: () => import('./../components/HelloWorld')},
    {path: '/ant-button', name: 'ant-button', component: () => import('./../components/AntButton')},
    {path: '/ant-col', name: 'ant-col', component: () => import('./../components/AntCol')},
    {path: '/lay-out', name: 'lay-out', component: () => import('./../components/LayOut')},
    {path: '/navigation-one', name: 'navigation-one', component: () => import('./../components/NavigationOne')},
    {path: '/drop-down', name: 'drop-down', component: () => import('./../components/DropDown')}
    ]
Vue.use(Router)
Vue.use(Antd)

const router = new Router({
    mode: 'history',
    // routes
    routes: [
        {
            name:'login',
            path: '/login',
            component: () => import('@/pages/login')
        },
        {
            path: '/', component: MainLayout, children: [
                ...routes,
                {path: '/*', component: NotFoundPage}
            ]
        },
        {path: '*', component: NotFoundPage}
    ]
})
router.beforeEach((to, from, next) => {
    // 定义一个可以记录路由路径变化的数组，这里用在vuex，其实也可以用sessionStorage,或者在window.routeChain等变量
    // 不一定要用到vuex
    let routeLength = store.state.router.routeChain.length

    if (routeLength === 0) {
        store.commit('setPageDirection', 'fade')
        if (to.path === from.path && to.path === '/') {
            // 当直接打开根路由的时候
            store.commit('addRouteChain', to)
        } else {
            // 直接打开非根路由的时候其实生成了两个路径，from其实就是根路由
            store.commit('addRouteChain', from)
            store.commit('addRouteChain', to)
        }
    } else if (routeLength === 1) {
        store.commit('setPageDirection', 'vux-pop-in')
        store.commit('addRouteChain', to)
    } else {
        let lastBeforeRoute = store.state.router.routeChain[routeLength - 2]
        if (lastBeforeRoute.path === to.path) {
            store.commit('popRouteChain')
            store.commit('setPageDirection', 'vux-pop-out')
            store.dispatch('setCachePages')
        } else {
            store.commit('addRouteChain', to)
            store.commit('setPageDirection', 'vux-pop-in')
        }
    }
    if (!store.getters.userCheckLogin && to.path.substr(0, 6) !== '/login') {
        next(`/login?redirect=${to.fullPath}`)
        return
    }
    next()
})
router.afterEach(to => {
    document.body.parentElement.setAttribute('id', 'x-page-' + to.name)
    document.body.setAttribute('id', 'x-page-' + to.name)
})
export default router
