<template>
<div class="toastAndTopTips">
  <wv-button type="default" @click="showSuccess">成功提示</wv-button>
  <wv-button type="default" @click="showError">出错提示</wv-button>
  <wv-button type="default" @click="showText">纯文本提示</wv-button>
  <wv-button type="default" @click="showLoading">加载提示</wv-button>
  <wv-button type="primary" @click="openTips">显示提示 (5S)</wv-button>
  <wv-button type="warn" @click="closeTips">关闭提示</wv-button>
</div>
</template>

<script>
import {Toast, TopTips} from 'we-vue'
export default {
  methods: {
    openTips () {
      TopTips({
        message: '提示信息',
        duration: 5000
      })
    },
    closeTips () {
      TopTips.close()
    },
    showSuccess () {
      Toast.success('操作成功')
    },
    showError () {
      Toast.fail({
        duration: 1000,
        message: '操作失败'
      })
    },
    showText () {
      Toast.text({
        duration: 1000,
        message: 'hello'
      })
    },
    showLoading () {
      Toast.loading('Loaidng')
    }
  }
}
</script>
