<template>
  <div class="dialog">
    <wv-button type="primary" @click="showDialog('ios', '窗口标题')">iOS Dialog 有标题</wv-button>
    <wv-button type="warn" @click="showDialog('ios')">iOS Dialog 无标题</wv-button>
    <wv-button type="primary" @click="showDialog('android', '窗口标题')">Android Dialog 有标题</wv-button>
    <wv-button type="warn" @click="showDialog('android')">Android Dialog 无标题</wv-button>
  </div>
</template>

<script>
import { Dialog } from 'we-vue'
export default {
  methods: {
    showDialog (skin, title) {
      Dialog.confirm({
        title: title,
        message: '欢迎使用 we-vue!',
        skin,
        showCancelBtn: true
      })
    }
  }
}
</script>
