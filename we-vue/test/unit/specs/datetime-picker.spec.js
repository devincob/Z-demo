import { mount } from '@vue/test-utils'
import DatetimePicker from '@/components/datetime-picker'
import { slowVerticalDrag } from '../utils'

const testTime = '9:00'
const testDate = new Date('2018/01/01 19:00')

describe('datetime-picker', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create a datetime picker', () => {
    let date = new Date()

    wrapper = mount(DatetimePicker, {
      propsData: {
        type: 'datetime',
        value: date
      }
    })

    expect(wrapper.name()).toBe('wv-datetime-picker')
  })

  it('create date picker', () => {
    wrapper = mount(DatetimePicker, {
      propsData: {
        type: 'date'
      }
    })
  })

  it('create time picker', () => {
    wrapper = mount(DatetimePicker, {
      propsData: {
        type: 'time'
      }
    })
  })

  it('test open and close method', () => {
    wrapper = mount(DatetimePicker, {
      propsData: {}
    })

    wrapper.vm.$nextTick(() => {
      wrapper.vm.open()
      expect(wrapper.vm.currentVisible).toBe(true)

      wrapper.vm.close()
      expect(wrapper.vm.currentVisible).toBe(false)
    })
  })

  it('test isLeapyear method', () => {
    wrapper = mount(DatetimePicker, {
      propsData: {}
    })

    expect(wrapper.vm.isLeapYear(2012)).toBe(true)
    expect(wrapper.vm.isLeapYear(2000)).toBe(true)
    expect(wrapper.vm.isLeapYear(2001)).toBe(false)
  })

  it('test isShortMonth method', () => {
    wrapper = mount(DatetimePicker, {
      propsData: {}
    })

    expect(wrapper.vm.isShortMonth(4)).toBe(true)
    expect(wrapper.vm.isShortMonth(1)).toBe(false)
  })

  it('test getMonthEndDay method', () => {
    wrapper = mount(DatetimePicker, {
      propsData: {}
    })

    expect(wrapper.vm.getMonthEndDay(2018, 1)).toBe(31)
    expect(wrapper.vm.getMonthEndDay(2016, 1)).toBe(31)
    expect(wrapper.vm.getMonthEndDay(2016, 4)).toBe(30)

    expect(wrapper.vm.getMonthEndDay(2016, 2)).toBe(29)
    expect(wrapper.vm.getMonthEndDay(2018, 2)).toBe(28)
  })

  it('test getTrueValue method', () => {
    wrapper = mount(DatetimePicker, {
      propsData: {}
    })

    expect(wrapper.vm.getTrueValue()).toBe(undefined)
    expect(wrapper.vm.getTrueValue('1')).toBe(1)
    expect(wrapper.vm.getTrueValue('01')).toBe(1)
    expect(wrapper.vm.getTrueValue('2月')).toBe(2)
    expect(wrapper.vm.getTrueValue('2018年')).toBe(2018)
    expect(wrapper.vm.getTrueValue('A2018年')).toBe(2018)
  })

  it('test onConfirm', (done) => {
    wrapper = mount(DatetimePicker, {
      propsData: {}
    })

    setTimeout(() => {
      wrapper.findAll('.weui-picker__action').at(1).trigger('click')

      expect(wrapper.vm.visible).toBe(false)
      expect(wrapper.emitted().confirm).toBeTruthy()
      done()
    }, 500)
  })

  it('test onCancel', (done) => {
    wrapper = mount(DatetimePicker, {
      propsData: {}
    })

    setTimeout(() => {
      wrapper.findAll('.weui-picker__action').at(0).trigger('click')

      expect(wrapper.vm.visible).toBe(false)
      expect(wrapper.emitted().cancel).toBeTruthy()
      done()
    }, 500)
  })

  it('drag time picker', (done) => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        type: 'time',
        value: '12:00'
      }
    })

    setTimeout(() => {
      const hour = wrapper.findAll('.weui-picker__group').at(0)
      const minute = wrapper.findAll('.weui-picker__group').at(1)

      slowVerticalDrag(hour, 0, -34)
      expect(wrapper.vm.currentValue).toEqual('13:00')

      slowVerticalDrag(minute, 0, -34)
      expect(wrapper.vm.currentValue).toEqual('13:01')

      slowVerticalDrag(hour, 0, -34 * 5)
      expect(wrapper.vm.currentValue).toEqual('19:01')

      // hour will be 23
      slowVerticalDrag(hour, 0, -34 * 10)
      expect(wrapper.vm.currentValue).toEqual('23:01')

      // hour will be 0
      slowVerticalDrag(hour, 0, 34 * 24)
      slowVerticalDrag(minute, 0, 34 * 10)
      expect(wrapper.vm.currentValue).toEqual('0:00')

      done()
    }, 50)
  })

  it('drag datetime picker', (done) => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'datetime',
        value: testDate
      }
    })

    setTimeout(() => {
      expect(wrapper.vm.currentValue).toEqual(testDate)

      const year = wrapper.findAll('.weui-picker__group').at(0)
      const month = wrapper.findAll('.weui-picker__group').at(1)
      const date = wrapper.findAll('.weui-picker__group').at(2)
      const hour = wrapper.findAll('.weui-picker__group').at(3)
      const minute = wrapper.findAll('.weui-picker__group').at(4)

      slowVerticalDrag(year, 0, -34)
      slowVerticalDrag(month, 0, -34)
      slowVerticalDrag(date, 0, -34)
      slowVerticalDrag(hour, 0, -34)
      slowVerticalDrag(minute, 0, -34)

      expect(wrapper.vm.currentValue.getFullYear()).toEqual(2019)
      expect(wrapper.vm.currentValue.getMonth() + 1).toEqual(2)
      expect(wrapper.vm.currentValue.getDate()).toEqual(2)
      expect(wrapper.vm.currentValue.getHours()).toEqual(20)
      expect(wrapper.vm.currentValue.getMinutes()).toEqual(1)

      done()
    }, 500)
  })

  it('drag date picker', (done) => {
    wrapper = mount(DatetimePicker, {
      attachToDocument: true,
      propsData: {
        type: 'date',
        value: testDate
      }
    })

    setTimeout(() => {
      expect(wrapper.vm.currentValue).toEqual(testDate)

      const year = wrapper.findAll('.weui-picker__group').at(0)
      const month = wrapper.findAll('.weui-picker__group').at(1)
      const date = wrapper.findAll('.weui-picker__group').at(2)

      slowVerticalDrag(year, 0, -34)
      slowVerticalDrag(month, 0, -34)
      slowVerticalDrag(date, 0, -34)

      expect(wrapper.vm.currentValue.getFullYear()).toEqual(2019)
      expect(wrapper.vm.currentValue.getMonth() + 1).toEqual(2)
      expect(wrapper.vm.currentValue.getDate()).toEqual(2)

      done()
    }, 500)
  })

  it('watch value change', (done) => {
    wrapper = mount(DatetimePicker, {
      propsData: {}
    })

    const newValue = new Date()

    setTimeout(() => {
      wrapper.setProps({
        value: newValue
      })

      expect(wrapper.vm.currentValue).toEqual(newValue)
      done()
    }, 500)
  })
})
