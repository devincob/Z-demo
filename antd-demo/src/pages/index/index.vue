<template>
  <x-page breadcrumb="auto"
          title="工作台"
          :footer="false"
          :contentStyle="{maxWidth: 1200}">
    <h3 class="col-title">今日数据</h3>
    <a-row class="card-row" :gutter="12">
      <a-col :sm="12" :md="8" :xl="4">
        <a-card  class="data-card" :loading="loading">
          <div class="card-title">预约中订单</div>
          <a href="#">{{3333|thousands}}</a>
        </a-card>
      </a-col>
      <a-col :sm="12" :md="8" :xl="4">
        <a-card  class="data-card" :loading="loading">
          <div class="card-title">待上班订单</div>
          <a href="#">{{3333|thousands}}</a>
        </a-card>
      </a-col>
      <a-col :sm="12" :md="8" :xl="4">
        <a-card  class="data-card" :loading="loading">
          <div class="card-title">上班订单</div>
          <a href="#">{{3333|currency('', 0)}}</a>
        </a-card>
      </a-col>
      <a-col :sm="12" :md="8" :xl="4">
        <a-card  class="data-card" :loading="loading">
          <div class="card-title">待支付订单</div>
          <a href="#">{{3333|currency('', 0)}}</a>
        </a-card>
      </a-col>
      <a-col :sm="12" :md="8" :xl="4">
        <a-card  class="data-card" :loading="loading">
          <div class="card-title">已取消订单</div>
          <a href="#">{{3333|currency('', 0)}}</a>
        </a-card>
      </a-col>
      <a-col :sm="12" :md="8" :xl="4">
        <a-card  class="data-card" :loading="loading">
          <div class="card-title">全部订单</div>
          <a href="#">{{3333|currency('', 0)}}</a>
        </a-card>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :sm="24" :xl="12">
        <h3 class="col-title">昨日订单</h3>
        <a-row :gutter="12" class="card-row">
          <a-col :sm="12" :md="8" :xl="8">
            <a-card  class="data-card" :loading="loading">
              <div class="card-title">待支付订单</div>
              <a href="#">{{3333|currency('', 0)}}</a>
            </a-card>
          </a-col>
          <a-col :sm="12" :md="8" :xl="8">
            <a-card  class="data-card" :loading="loading">
              <div class="card-title">已取消订单</div>
              <a href="#">{{3333|currency('', 0)}}</a>
            </a-card>
          </a-col>
          <a-col :sm="12" :md="8" :xl="8">
            <a-card  class="data-card" :loading="loading">
              <div class="card-title">全部订单</div>
              <a href="#">{{3333|currency('', 0)}}</a>
            </a-card>
          </a-col>
        </a-row>
      </a-col>
      <a-col :sm="24" :xl="12">
        <h3 class="col-title">明日订单</h3>
        <a-row :gutter="12" class="card-row">
          <a-col :sm="12" :md="8" :xl="8">
            <a-card  class="data-card" :loading="loading">
              <div class="card-title">待支付订单</div>
              <a href="#">{{3333|currency('', 0)}}</a>
            </a-card>
          </a-col>
          <a-col :sm="12" :md="8" :xl="8">
            <a-card  class="data-card" :loading="loading">
              <div class="card-title">已取消订单</div>
              <a href="#">{{3333|currency('', 0)}}</a>
            </a-card>
          </a-col>
          <a-col :sm="12" :md="8" :xl="8">
            <a-card  class="data-card" :loading="loading">
              <div class="card-title">全部订单</div>
              <a href="#">{{33|currency('', 0)}}</a>
            </a-card>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </x-page>
</template>

<script>
  export default {
    name: "index",
    data(){
      return {
        loading: true
      }
    },
    methods: {
    },
    mounted() {
      this.setTimeout(() => this.loading = false, 333)
    }
  }
</script>

<style lang="less" scoped>
  .data-card-list {
    display: flex;
  }
  .data-card:not(:first-child) {
    margin-left: 10px;
  }
  .data-card {
    a {
      font-size: 34px;
    }
  }
  .data-card > .ant-card-body {
    padding: 20px 24px 8px !important;
  }
  .col-title {
    border-left: 5px #1e80f0 solid;
    padding-left: 5px;
  }
  .card-title {
    color: rgba(0,0,0,.45);
    font-size: 14px;
    line-height: 22px;
  }
  .card-footer {
    border-top: 1px solid #e8e8e8;
    padding-top: 9px;
    margin-top: 8px;
  }
  .card-row > div{
    margin-bottom: 12px
  }
</style>
