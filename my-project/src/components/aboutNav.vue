<template>
  <div class="aboutNav">
    <wv-tabbat-item to="/" is-on>
      <span slot="icon" style="display: inline-block; position:relative">
        <img class="weui-tabbar__icon" :src="thumbSmall" slot="icon">
        <wv-badge style="position: absolute;top:-2px; right: -13px;">2</wv-badge>
      </span>
      微信
    </wv-tabbat-item>
  </div>
</template>

<script>
import thumbSmall from '../assets/images/icon_tabbar.png'

export default {
  data () {
    return {
      thumbSmall
    }
  }
}
</script>

<style scoped>

</style>
