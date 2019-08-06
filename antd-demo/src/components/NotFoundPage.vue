<template>
  <x-page breadcrumb="auto" title="页面未找到">
    <div style="width: 100%;text-align: center;">您访问的页面: {{$route.fullPath}} 未找到。</div>
  </x-page>
</template>

<script>
export default {
  name: 'not-found-page',
  methods: {
    onPageShow(){
    }
  }
}
</script>
