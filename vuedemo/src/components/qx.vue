<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
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
import firstChild from '@/components/firstChild'
import secondChild from '@/components/secondChild'
import FatherWithSon from '@/components/FatherWithSon'
export default {
  name: 'qx',
  components: {firstChild, FatherWithSon, secondChild},
  data () {
    return {
      msg: 'Welcome to qr '
    }
  },
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
