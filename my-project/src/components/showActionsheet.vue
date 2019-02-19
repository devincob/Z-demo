<template>
  <div class="page page-with-padding">
    <div class="buttons">
      <wv-button type="default" @click="showActionsheet('ios')">iOS 弹出式菜单</wv-button>
      <wv-button type="default" @click="showActionsheet('android')">Android 弹出式菜单</wv-button>
    </div>
    <wv-actionsheet :type="type" cancel-text="取消" v-model="sheetVisible"
                    title="<h3 style='color: red;'>一个大标题</h3><p>我是二标题</p>" :actions="actions" />
  </div>
</template>

<script type="text/javascript">
export default {
  data () {
    return {
      type: 'ios',
      sheetVisible: false,
      actions: []
    }
  },
  methods: {
    showActionsheet (type) {
      this.type = type
      this.sheetVisible = true
    },
    menuClick (key) {
      console.log(key)
      console.log(`clicked ${key} menu`)
    }
  },
  mounted () {
    this.actions = [
      {
        name: '金刚葫芦娃',
        key: 'menu1',
        method: () => {
          this.menuClick('金刚葫芦娃')
        }
      },
      {
        name: '齐天大猴',
        key: 'menu2',
        method: () => {
          this.menuClick('menu2')
        }
      },
      {
        name: '雷锋同志',
        key: 'menu3',
        method: () => {
          this.menuClick('雷锋同志')
        }
      }
    ]
  }
}
</script>

<style scoped>
  .buttons {
    display: block;
    padding: 0 20px;
    margin: 20px auto;
  }
</style>
