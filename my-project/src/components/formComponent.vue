<template>
  <div class="formComponent">
    <wv-header class="demo-header1" title="wevue" @headerClick="onHeaderClick" :fixed="false" background-color="#2196f3">
      <div class="btn-back" slot="left">
        <i class="iconfont icon-back" @click="$router.push('/')"/>
      </div>
      <div class="btn-menu" slot="right">
        <i class="iconfont icon-menu" @click="$router.push('/')"/>
      </div>
    </wv-header>
    <div style="margin-bottom: 50px;">
      <wv-button type="primary">页面主要操作 Normal</wv-button>
      <wv-button type="default" is-loading>页面次要操作 Normal</wv-button>
      <wv-button type="warn"  :plain="true">警告类操作 Normal</wv-button>
      <wv-button type="primary" disabled :mini="true">迷你button</wv-button>
      <!--CheckList-->
      <wv-checklist title="基本示例" :options="options" v-model="checkListItems" :max="2"></wv-checklist>
      <wv-group>
        <wv-textarea placeholder="请输入文本" :rows="3" v-model="content" :show-counter="true" :max-length="10"></wv-textarea>
      </wv-group>
      <wv-group>
        <wv-radio title="单选radio" :value="234" v-model="valueNumber1" :options="options" @change="onChange"></wv-radio>
        <wv-input label="label" :value="234" placeholder="type类型是数字" type="number" v-model="valueNumber1"></wv-input>
        <wv-input label="请输入 abc" :value="234" placeholder="请输入 abc" v-model="valueNumber1" pattern="^abc$" :validate-mode="{onFocus: false}"></wv-input>
      </wv-group>
      <wv-group>
        <wv-cell title="自定义输入框宽度">
          <wv-number-spinner slot="ft" :min="0" :max="10" :step="3" @change="onChange" v-model="valueNumber"></wv-number-spinner>
        </wv-cell>
      </wv-group>
      <wv-switch title="开关" v-model="switchValue"/>
      <wv-preview class="preview-item" title="订单详情" value="100.00" :dataItems="dataItems" :buttons="buttons"></wv-preview>
    </div>
    <wv-tabbar fixed>
      <wv-tabbar-item to="/formComponent" is-on>
      <span slot="icon" style="display: inline-block; position:relative">
        <img class="weui-tabbar__icon" :src="imgIcon" slot="icon">
        <wv-badge style="position: absolute;top:-2px; right: -13px;" :is-dot="false">2</wv-badge>
      </span>
        表单组件
      </wv-tabbar-item>
      <wv-tabbar-item to="/tabbar">
        <img class="weui-tabbar__icon" :src="imgIcon" slot="icon"> 基础组件
      </wv-tabbar-item>
      <wv-tabbar-item to="/">
      <span slot="icon" style="display: inline-block; position: relative;">
        <img class="weui-tabbar__icon" :src="imgIcon" slot="icon">
        <wv-badge is-dot style="position: absolute;top: 0;right: -6px;">8</wv-badge>
      </span>
        基础组件
      </wv-tabbar-item>
      <wv-tabbar-item to="/profile">
        <img class="weui-tabbar__icon" :src="imgIcon" slot="icon"> 布局
      </wv-tabbar-item>
    </wv-tabbar>
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
  name: 'HelloWorld',
  data () {
    return {
      switchValue: true,
      dataItems: [
        {
          label: '商品',
          value: '电动打蛋机'
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
      content: 'hello',
      valueNumber: 2,
      valueNumber1: '111',
      checkListItems: ['value1', 'value3'],
      options: [
        {
          label: '雷锋',
          value: 'value1'
        },
        {
          label: '雷峰塔',
          value: 'value2'
        },
        {
          label: '珠穆朗玛峰',
          value: 'value3'
        },
        {
          label: '金刚葫芦娃',
          value: 'value4',
          disabled: true
        }
      ],
      msg: 'Welcome to Your Vue.js App',
      imgIcon
    }
  },
  methods: {
    onChange (val) {
      console.log(val)
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
