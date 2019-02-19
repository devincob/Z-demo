<template>
  <div class="hello">
    指定线宽
    <wv-circle :line-width="3" value="12">12 %</wv-circle>
    指定填充色
    <wv-circle :line-width="5" fill-color="yellow" value="12">12 %</wv-circle>
    指定直径
    <wv-circle :line-width="10" stroke-color="red" v-model="sliderValue" :diameter="200">{{ sliderValue }}%</wv-circle>
  </div>
</template>

<script>
import Vue from 'vue'
import {Circle} from 'we-vue'

Vue.component(Circle.name, Circle)

export default {
  name: 'others',
  data () {
    return {}
  },
  methods: {
    fun () {
      let obj = []
      return Object.prototype.toString.call(obj)
      return obj instanceof Array
      return Array.prototype.isPrototypeOf(obj)
      return Array.isArray(obj)
    },
    confirmDayTime (time) {
      let hour = parseInt(time / 60)
      let minute = time % 60
      return `${hour ? hour + '个小时' : ''}${minute}分钟`
    }
  },
  mounted () {
    console.log(this.confirmDayTime(50))
    console.log(this.fun())
  }
}
</script>

<style scoped>

</style>
