<template>
  <div class="picker">
    <wv-group title="选择器示例">
      <wv-cell title="单列(对象数组)" is-link :value="fruit" @click.native="fruitPickerShow = true">
        <img :src="imgIcon" alt="" slot="icon" class="cell-icon">
      </wv-cell>
      <wv-cell title="单列" is-link :value="ticket | pickerValueFilter" @click.native="ticketPickerShow = true" />
      <wv-cell title="多列" is-link :value="dayAndTime | pickerValueFilter" @click.native="dayPickerShow = true" />
<!--
      <wv-cell title="联动" is-link :value="address | pickerValueFilter" @click.native="addressPickerShow = true" />
-->
    </wv-group>
    <wv-picker
      :value="fruitPickerShow"
      :slots="fruitColumns"
      @cancel="fruitPickerShow = false"
      @confirm="confirmfruit"
    />
    <wv-picker
      v-model="ticketPickerShow"
      :slots="ticketSlots"
      @confirm="confirmTicket"
    />
    <wv-picker
      v-model="dayPickerShow"
      :slots="daySlots"
      @confirm="confirmDayTime"
    />
  </div>
</template>

<script>
import imgIcon from '../assets/images/icon_tabbar.png'
export default {
  data () {
    return {
      imgIcon,
      dayAndTime: [],
      address: [],
      ticket: ['汽车票'],
      ticketValue: [],
      dayValue: [],
      ticketPickerShow: false,
      dayPickerShow: false,
      fruitPickerShow: false,
      fruit: 'Apple',
      ticketSlots: [
        {
          values: [
            '汽车票',
            '飞机票',
            '火车票',
            '轮船票',
            '其它'
          ],
          defaultIndex: 2
        }
      ],
      daySlots: [
        {
          values: [
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五'
          ],
          defaultIndex: 0
        }, {
          values: [
            '上午',
            '下午'
          ],
          defaultIndex: 0
        }
      ],
      fruitColumns: [
        {
          values: [ '苹果', '香蕉', '橘子', '葡萄' ]
        }
      ]
    }
  },
  mounted () {
  },
  watch: {
    fruitPickerShow (val) {
      console.log(val)
    }
  },
  methods: {
    confirmfruit (picker, value) {
      console.log(value)
      this.fruitPickerShow = false
      this.fruit = picker.getValues()[0]
    },
    confirmTicket (picker) {
      this.ticket = picker.getValues()
    },
    confirmDayTime (picker) {
      this.dayAndTime = picker.getValues()
    }
  },
  filters: {
    pickerValueFilter (val) {
      if (Array.isArray(val)) {
        return val.toString()
      } else {
        return '请选择'
      }
    }
  }
}
</script>
