<template>
  <div class="baseComponent">
    <div style="margin-bottom: 20px;">
      <wv-swipe :height="130" :auto="4000" :speed="300" :default-index="1">
        <wv-swipe-item style="background-color: #f44336">red</wv-swipe-item>
        <wv-swipe-item style="background-color: #ffc107">yellow</wv-swipe-item>
        <wv-swipe-item style="background-color: #03a9f4">blue</wv-swipe-item>
      </wv-swipe>
      <div class="demo-wrapper">
        <span class="demo-label">这是navBar</span>
        <wv-navbar v-model="navbar2_selected" @change="onChange" active-color="red">
          <wv-navbar-item id="navbar2_item1">选项1</wv-navbar-item>
          <wv-navbar-item id="navbar2_item2">选项2</wv-navbar-item>
          <wv-navbar-item id="navbar2_item3">选项3</wv-navbar-item>
        </wv-navbar>
      </div>
      <div style="margin-top: 20px;">
        <wv-preview class="preview-item" title="订单详情" value="100.00" :dataItems="dataItems" :buttons="buttons"></wv-preview>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Group, Cell, Badge, Icon, Dialog } from 'we-vue'
import imgIcon from '../assets/images/icon_tabbar.png'
Vue.component(Badge.name, Badge)
Vue.component(Icon.name, Icon)
Vue.component(Group.name, Group)
Vue.component(Cell.name, Cell)
Vue.component(Dialog.name, Dialog)
export default {
  data () {
    return {
      dataitems_first: [
        {
          label: '商品',
          value: '电动打蛋机1111111111'
        },
        {
          label: '标题标题',
          value: '名字名字名字'
        },
        {
          label: '标题标题',
          value: '很长很长的名字很长很长的名字很长很长的名字很长很长的名字很长很长的名字'
        }
      ],
      dataitems_third: [
        {
          label: '商品',
          value: '电动打蛋机333333333'
        },
        {
          label: '标题标题',
          value: '名字名字名字'
        },
        {
          label: '标题标题',
          value: '我是一只小小小小鸟'
        }
      ],
      dataItems_second: [
        {
          label: '商品',
          value: '你说什么？'
        },
        {
          label: '标题标题',
          value: '名字名字名字'
        },
        {
          label: '标题标题',
          value: '我是飞机'
        }
      ],
      dataItems: [
        {
          label: '商品',
          value: '电动打蛋机2222222222222'
        },
        {
          label: '标题标题',
          value: '名字名字名字'
        },
        {
          label: '标题标题',
          value: '先有蛋还是先有'
        }
      ],
      buttons: [
        {
          text: '辅助操作',
          type: 'default',
          action: function () {
            console.log('执行辅助操作……')
          }
        },
        {
          text: '操作',
          type: 'primary',
          action: function () {
            console.log('执行主要操作……')
          }
        }
      ],
      navbar2_selected: 'navbar2_item2',
      msg: 'Welcome to Your Vue.js App',
      imgIcon
    }
  },
  methods: {
    onChange (key) {
      console.log(key)
      if (key === 'navbar2_item3') {
        this.dataItems = this.dataitems_third
      } else if (key === 'navbar2_item1') {
        this.dataItems = this.dataitems_first
      } else {
        this.dataItems = this.dataItems_second
        console.log(key)
      }
    },
    onHeaderClick  () {
      console.log('header clicked')
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
