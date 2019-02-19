<template>
  <div class="page">
    <wv-group title="基本示例">
      <wv-cell
        title="时间"
        :value="demoTime | datetimeFilter('time')"
        is-link
        @click.native="$refs.timePicker.open()"
      />
    </wv-group>
    <wv-cell title="日期" :value="demoDate | datetimeFilter('date')"
             is-link @click.native="$refs.datePicker.open()"
    ></wv-cell>
    <wv-cell title="时间日期"
     is-link :value="demoDateTime1" @click.native="$refs.dateTimerPicker.open()">
    </wv-cell>
    <wv-datetime-picker
      type="time"
      ref="timePicker"
      v-model="demoTime"
      @confirm="onConfirm"
    />
    <wv-datetime-picker
    type="date"
    ref="datePicker"
    v-model="demoDate"
    @confirm="onConfirm"
    />
    <wv-datetime-picker type="date" ref="dateTimerPicker" v-model="demoDateTime1" @click="onConfirm"/>
  </div>
</template>

<script>
import { Toast } from 'we-vue'
export default {
  data () {
    return {
      demoTime: '12:23',
      demoDate: new Date(),
      demoDateTime1: new Date()
    }
  },
  methods: {
    onConfirm (value, type) {
      let message = ''
      if (value !== null && typeof value === 'object') {
        let year = value.getFullYear()
        let month = value.getMonth() + 1
        let date = value.getDate()
        let hour = value.getHours()
        let minute = value.getMinutes()
        message = `${year}-${month}-${date} ${hour}:${minute}`
      } else {
        message = value
      }
      Toast({
        duration: 3000,
        message: message,
        type: 'text'
      })
    }
  },
  filters: {
    datetimeFilter (value, type) {
      if (value !== null && typeof value === 'object') {
        let year = value.getFullYear()
        let month = value.getMonth() + 1
        let date = value.getDate()
        let hour = value.getHours()
        let minute = value.getMinutes()
        return type === 'date' ? `${year}-${month}-${date}` : `${year}-${month}-${date} ${hour}:${minute}`
      } else {
        return value
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
</style>
