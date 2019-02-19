import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import others from '@/components/others'
import First from '@/components/First'
import showActionsheet from '@/components/showActionsheet'
import picker from '@/components/picker'
import Dialog from '@/components/Dialog'
import ToastAndTopTips from '@/components/ToastAndTopTips'
import formComponent from '@/components/formComponent'
import baseComponent from '@/components/baseComponent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/others',
      name: 'others',
      component: others
    }, {
      path: '/first',
      name: 'First',
      component: First
    }, {
      path: '/showActionsheet',
      name: 'showActionsheet',
      component: showActionsheet
    }, {
      path: '/picker',
      name: 'picker',
      component: picker
    }, {
      path: '/dialog',
      name: 'dialog',
      component: Dialog
    }, {
      path: '/toastAndTopTips',
      name: 'toastAndTopTips',
      component: ToastAndTopTips
    }, {
      path: '/formComponent',
      name: 'formComponent',
      component: formComponent
    }, {
      path: '/baseComponent',
      name: 'baseComponent',
      component: baseComponent
    }
  ]
})
