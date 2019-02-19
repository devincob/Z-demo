<template>
  <div id="app"><img src="./assets/logo.png">
    <firstChild></firstChild>
    <secondChild></secondChild>
    <div>我是父页面里的button
      <button @click="goTranslate">父向子事件传递的数据</button>
    </div>
    <FatherWithSon ref="FatherToSon" :FatherToSon="FatherToSon" :newList="newList"
                   @reduce-parent="reduceParent" @add-parent="addParent"></FatherWithSon>
    <div>我是父页面里的h2标签
      <h2>子组件发给父组件的数据 <span style="color: #f00">{{SonToFather}}</span></h2>
    </div>
  </div>
</template>
<script>
import firstChild from './components/firstChild'
import secondChild from './components/secondChild'
import FatherWithSon from './components/FatherWithSon'
export default {
  name: 'App',
  components: {firstChild, FatherWithSon, secondChild},
  data () {
    return {
      FatherToSon: '默认传递值',
      SonToFather: 0,
      newList: [
        {name: '你大爷', time: 'yesterday'},
        {name: '你二爷', time: 'today'},
        {name: '你小爷', time: 'tomorrow'}
      ]
    }
  },
  watch: {},
  methods: {
    goTranslate () {
      this.FatherToSon = 'funciton 处理完成后返送的值'
    },
    addParent () {
      this.SonToFather++
    },
    reduceParent () {
      this.SonToFather--
    }
  },
  mounted () {}
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
