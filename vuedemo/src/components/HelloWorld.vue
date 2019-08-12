<template>
  <div class="hello">
    <h1 @click="fn">{{ msg }}</h1>
    <h2>{{fullName}}</h2>
    <ul>
      <li>
        <router-link to="/qr">Go to qr</router-link>
        <router-link to="/qx">Go to qx</router-link>
      </li>
      <br>
      <h2>....................................</h2>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      form: {
        workItemId: '123456',
        flowInstId: '654321',
        itemStatus: 'W',
        type: 'N',
        name: '10001'
      },
      msg: 'Welcome to You'
    }
  },
  computed: {
    /*
      当页面中有某些数据 依赖 其他数据  进行变动的时候，可以使用计算属性。
      需要注意的是，就算在 data中没有直接声明 出要计算的变量，也可以直接在computed中写入。
      计算属性默认只有getter，可以在需要的时候自己设定setter：
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
    使用场景：computed擅于处理：一个数据受多个数据影响
    即在这多个依赖数据中，任何一个改变都会导致 受影响的数据的改变
    */
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: {
  /*
  data中没有相应的属性的话，是不能watch
  watch:类似于监听机制+事件机制：
  一个数据影响多个数据。
  适合监控场景，某【一个】变量改变时需要做什么操作；
  在数据变化的同时进行异步操作或者是比较大的开销，
  watch为一个对象，键是需要观察的表达式，
  值是对应回调函数。值也可以是方法名，或者包含选项的对象。
  */
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  },
  methods: {
    fn () {
      let params = {
        workItemId: this.form.workItemId,
        flowInstId: this.form.flowInstId,
        itemStatus: this.form.itemStatus,
        type: this.form.type,
        name: this.form.name
      }
      // 保存参数
      this.$store.dispatch('approvalConfirmParams', params) // 通过这个方法名，指派调度这个方法
      this.$store.dispatch('setValue', params)
      // dispatch：含有异步操作，例如向后台提交数据，写法： this.$store.dispatch('mutations方法名',值)
      // commit：同步操作，写法：this.$store.commit('mutations方法名',值)
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
