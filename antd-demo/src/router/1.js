// import Vue from 'vue'
import Vue from 'vue/dist/vue'
import Router from 'vue-router'

// import store from '../store'

import HelloWorld from './../components/HelloWorld'
import NotFoundPage from './../components/NotFoundPage'

import routes from './routers'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/', component: HelloWorld, children: [
                ...routes,
                {path: '/*', component: NotFoundPage}
            ]
        },
        {path: '*', component: NotFoundPage}
    ]
})


/*
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
*/
/*router.afterEach(to => {
    try {
        document.body.parentElement.setAttribute('id', 'x-page-' + to.name)
        document.body.setAttribute('id', 'x-page-' + to.name)
    } catch (e){
    }
})*/


export default router
