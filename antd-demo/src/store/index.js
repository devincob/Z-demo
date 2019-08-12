import Vue from 'vue'
import Vuex from 'vuex'
import {StorageStore} from './plugins'
import router from './router'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    router
      ,
    user
  }
  ,
  plugins: [StorageStore]
})
