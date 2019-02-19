<template>
  <div class="helloWorld">
    <wv-header class="demo-header1" title="wevue" @headerClick="onHeaderClick" :fixed="false" background-color="#2196f3">
      <div class="btn-back" slot="left">
        <i class="iconfont icon-back" @click="$router.push('/')"/>
      </div>
      <div class="btn-menu" slot="right">
        <i class="iconfont icon-menu" @click="$router.push('/')"/>
      </div>
    </wv-header>
  <div style="margin-bottom: 20px;">
    <!--<h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>-->
    <wv-group title="带说明的列表项">
      <wv-cell title="标题文字" value="说明文字" />
    </wv-group>
    <wv-input label="Number" placeholder="请输入..." v-model="count"></wv-input>
    <wv-button type="primary" @click="increment">+</wv-button>
    <wv-button type="primary" @click="decrement"> -</wv-button>
    <wv-group title="带图标、说明的列表项">
      <!--<wv-cell title="标题文字">
        <img :src="imgIcon" slot="icon" class="cell-icon">
        <span slot="ft">说明文字</span>
      </wv-cell>-->
      <wv-cell title="标题文字" value="说明文字" @click="decrement">
        <img :src="imgIcon" slot="icon" class="cell-icon">
      </wv-cell>
    </wv-group>

    <wv-group title="带跳转的列表项">
      <wv-cell title="标题文字" is-link to="/others"></wv-cell>
      <wv-cell title="时间日期" is-link to="/First"></wv-cell>
      <wv-cell title="showActionsheet" is-link to="/showActionsheet"></wv-cell>
      <wv-cell title="Dialog" is-link to="/Dialog"/>
    </wv-group>
    <wv-group title="带图标、说明、跳转的列表项">
      <wv-cell title="picker" value="412524" is-link to="/picker">
        <img :src="imgIcon" alt="" slot="icon" class="cell-icon">
      </wv-cell>
      <wv-cell title="ToastAndTopTips" value="ToastAndTopTips" is-link to="/ToastAndTopTips">
        <img :src="imgIcon" alt="" slot="icon" class="cell-icon">
      </wv-cell>
    </wv-group>

  </div>
    <wv-tabbar fixed>
      <wv-tabbar-item to="/formComponent" is-on>
      <span slot="icon" style="display: inline-block; position:relative">
        <img class="weui-tabbar__icon" :src="imgIcon" slot="icon">
        <wv-badge style="position: absolute;top:-2px; right: -13px;" :is-dot="false">2</wv-badge>
      </span>
        表单组件
      </wv-tabbar-item>
      <wv-tabbar-item to="/baseComponent">
        <img class="weui-tabbar__icon" :src="imgIcon" slot="icon"> 基础组件
      </wv-tabbar-item>
      <wv-tabbar-item to="/formComponent">
      <span slot="icon" style="display: inline-block; position: relative;">
        <img class="weui-tabbar__icon" :src="imgIcon" slot="icon">
        <wv-badge is-dot style="position: absolute;top: 0;right: -6px;">8</wv-badge>
      </span>
        基础组件
      </wv-tabbar-item>
      <wv-tabbar-item to="/formComponent">
        <img class="weui-tabbar__icon" :src="imgIcon" slot="icon"> 基础组件
      </wv-tabbar-item>
    </wv-tabbar>
  </div>
</template>

<script>

import Vue from 'vue'
import Vuex from 'vuex'
import { Group, Cell, Badge, Icon, Dialog } from 'we-vue'
import imgIcon from '../assets/images/icon_tabbar.png'
Vue.use(Vuex)
Vue.component(Badge.name, Badge)
Vue.component(Icon.name, Icon)
Vue.component(Group.name, Group)
Vue.component(Cell.name, Cell)
Vue.component(Dialog.name, Dialog)
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement: state => state.count--
  }
})
export default {
  name: 'HelloWorld',
  data () {
    return {
      count: '',
      msg: 'Welcome to Your Vue.js App',
      imgIcon
    }
  },
  computed: {
    storeCount () {
      return store.state.count || 0
    }
  },
  watch: {
    storeCount (val) {
      this.count = val
    }
  },
  methods: {
    onHeaderClick  () {
      console.log('header clicked')
    },
    increment () {
      store.commit('increment')
      console.log(store.state.count) // -> 1
    },
    decrement () {
      store.commit('decrement')
      console.log(store.state.count) // -> 1
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
