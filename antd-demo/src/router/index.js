// import Vue from 'vue'
import Vue from 'vue/dist/vue'

import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/HelloWorld', name: 'HelloWorld', component: () => import('./../components/HelloWorld')},
        {path: '/ant-button', name: 'ant-button', component: () => import('./../components/AntButton')},
        {path: '/ant-col', name: 'ant-col', component: () => import('./../components/AntCol')},
        {path: '/lay-out', name: 'lay-out', component: () => import('./../components/LayOut')},
        {path: '/navigation-one', name: 'navigation-one', component: () => import('./../components/NavigationOne')},
        {path: '/drop-down', name: 'drop-down', component: () => import('./../components/DropDown')}
    ]
})
