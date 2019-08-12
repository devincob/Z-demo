<template>
  <div id="FatherWithSon">
    <h2>父向子默认传递的数据</h2>
    <ul><li v-for="item in newList" :key="item.name">{{item.name}}{{item.time}}来打你</li></ul>
    <p>{{FatherToSon}}</p><h2>子向父传递的数据</h2>
    <div><button @click="addCounter">子向父递增</button><button @click="reduceCounter">子向父递减</button></div>
  </div>
</template>
<script>
export default {
  props: {
    newList: {type: Array, required: true},
    FatherToSon: {type: String, 'default': 0}
  },
  data () {
    return {SonToFather: 0}
  },
  methods: {
    addCounter () {
      this.counter++ // 自定义事件$emit传回根组件，同时调用根组件方法
      this.$emit('add-parent')
    },
    reduceCounter () {
      this.counter-- // 自定义事件$emit传回根组件，同时调用根组件方法
      this.$emit('reduce-parent')
    }
  },
  mounted () {},
  beforeDestroy () {}
}
</script>
<style>
  #FatherWithSon{
    border: 1px solid red;
  }
</style>
