<template>
  <div id="firstChild">
    <h2>第一个组件</h2>
    <button @click="sendMsg">向第二个组件传值</button>
  </div>
</template>

<script>
import bus from '../assets/eventBus'
export default {
  name: 'first-child',
  data () {
    return {}
  },
  computed: {},
  methods: {
    sendMsg () {
      bus.$emit('userDefinedEvent', 'this.messge from firstchild')
    }
  }
}
</script>

<style scoped>
#firstChild{
  border:1px solid deepskyblue;
}
</style>
