<template>
  <div id="secondChild">
    <h2>第二个组件</h2>
     <p>从第一个组件接收的信息{{msg}}</p>
  </div>
</template>
<script>
import bus from '../assets/eventBus'
export default {
  name: 'second-child',
  data () {
    return {
      msg: 'defult'
    }
  },
  methods: {
  },
  mounted () {
    let self = this
    bus.$on('userDefinedEvent', function (msg) {
      self.msg = msg
    })
  }
}
</script>
<style scoped>
  #secondChild{
    margin-top: 20px;
    border:1px solid yellowgreen;
  }
</style>
