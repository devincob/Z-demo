<template>
  <div class="hello">
    <h1 @click="fetchData">{{ msg }}</h1>
    <h1>{{ value }}</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'qr',
  data () {
    return {
      msg: 'Welcome to qr '
    }
  },
  computed: {
    value () {
      return this.$store.state.setValue
    },
    ...mapGetters([ // ...函数名 使用对象展开运算符将此对象混入到外部对象中
      'approvalHistoryParams'
    ])
  },
  methods: {
    fetchData () {
      console.log(this.approvalHistoryParams)
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
