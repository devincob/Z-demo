import { mount, shallow } from '@vue/test-utils'
import Picker from '@/components/picker'
import PickerColumn from '@/components/picker/picker-column.vue'
import { slowVerticalDrag } from '../utils'

const testSingleColumn = [
  {
    values: [1, 2, 3]
  }
]

const testMultiColumn = [
  {
    values: [1, 2, 3]
  },
  {
    values: ['yes', 'no']
  }
]

describe('picker', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create', () => {
    wrapper = mount(Picker, {
      propsData: {
        visible: true,
        columns: []
      }
    })

    expect(wrapper.name()).toBe('wv-picker')
  })

  it('create a single-column picker', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: testSingleColumn
      }
    })

    setTimeout(() => {
      expect(wrapper.findAll(PickerColumn).length).toBe(1)

      expect(wrapper.vm.getColumnValues(0).length).toBe(3)
      expect(wrapper.vm.getValues()).toEqual([1])

      done()
    }, 50)
  })

  it('create a nulti-column picker', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: testMultiColumn
      }
    })

    setTimeout(() => {
      expect(wrapper.findAll(PickerColumn).length).toBe(2)

      expect(wrapper.vm.getColumnValues(0).length).toBe(3)
      expect(wrapper.vm.getColumnValues(1).length).toBe(2)
      expect(wrapper.vm.getValues()).toEqual([1, 'yes'])

      done()
    }, 50)
  })

  it('getColumnValue method', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: testSingleColumn
      }
    })

    setTimeout(() => {
      expect(wrapper.vm.getColumnValue(0)).toEqual(1)

      done()
    }, 50)
  })

  it('getColumnValues method', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: testMultiColumn
      }
    })

    setTimeout(() => {
      expect(wrapper.vm.getColumnValues(0)).toEqual([1, 2, 3])
      expect(wrapper.vm.getColumnValues(1)).toEqual(['yes', 'no'])

      done()
    }, 50)
  })

  it('test setColumnValue method', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: testMultiColumn
      }
    })

    setTimeout(() => {
      wrapper.vm.setColumnValues(0, [1, 2, 3])

      expect(wrapper.vm.getColumnValues(0)).toEqual([1, 2, 3])

      done()
    }, 50)
  })

  it('test getValues method', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: testSingleColumn
      }
    })

    setTimeout(() => {
      expect(wrapper.vm.getValues()).toEqual([1])

      done()
    }, 50)
  })

  it('test setValues method', (done) => {
    const slotValues = [1, 2, 3]

    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: [{
          values: slotValues,
          default: 0
        }]
      }
    })

    // it should throw an error when value length does not math the slot count
    try {
      wrapper.vm.setValues([])
    } catch (e) {
      expect(e.message).toEqual('values length is not equal columns count.')
    }

    setTimeout(() => {
      wrapper.vm.setValues([2])

      expect(wrapper.vm.getValues()).toEqual([2])

      done()
    }, 50)
  })

  it('test getColumnIndex method', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: testMultiColumn
      }
    })

    setTimeout(() => {
      expect(wrapper.vm.getColumnIndex(0)).toBe(0)
      expect(wrapper.vm.getColumnIndex(1)).toBe(0)

      done()
    }, 50)
  })

  it('test setColumnIndex method', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: testMultiColumn
      }
    })

    setTimeout(() => {
      wrapper.vm.setColumnIndex(0, 1)
      wrapper.vm.setColumnIndex(1, 1)

      expect(wrapper.vm.getIndexes()).toEqual([1, 1])

      done()
    }, 50)
  })

  it('test getIndexes method', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: testMultiColumn
      }
    })

    setTimeout(() => {
      expect(wrapper.vm.getIndexes()).toEqual([0, 0])
      done()
    }, 50)
  })

  it('test setIndexes method', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: testMultiColumn
      }
    })

    setTimeout(() => {
      wrapper.vm.setIndexes([1, 1])

      expect(wrapper.vm.getIndexes()).toEqual([1, 1])
      done()
    }, 50)
  })

  it('click cancel button', () => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        'visible.sync': true,
        columns: []
      }
    })

    wrapper.findAll('.weui-picker__action').at(0).trigger('click')
    expect(wrapper.vm.visible).toBe(false)
    expect(wrapper.emitted().cancel).toBeTruthy()
  })

  it('click confirm button', () => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        'visible.sync': true,
        columns: []
      }
    })

    wrapper.findAll('.weui-picker__action').at(1).trigger('click')
    expect(wrapper.vm.visible).toBe(false)
    expect(wrapper.emitted().confirm).toBeTruthy()
  })

  it('when slot value changed, change event should be emitted', () => {
    const slotValues = [1, 2, 3]

    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: [{
          values: slotValues,
          default: 0
        }]
      }
    })

    wrapper.findAll(PickerColumn).at(0).vm.$emit('change', 0)

    expect(wrapper.emitted().change).toBeTruthy()
  })
})

describe('picker-column', () => {
  let wrapper
  afterEach(() => {
    wrapper && wrapper.destroy()
  })

  it('create', () => {
    wrapper = mount(PickerColumn, {
      propsData: {}
    })

    expect(wrapper.name()).toBe('wv-picker-column')
  })

  it('create using object-array values', () => {
    const options = [
      {
        label: 'label1',
        value: 'value1'
      },
      {
        label: 'label2',
        value: 'value2'
      },
      {
        label: 'label3',
        value: 'value3'
      }
    ]

    wrapper = mount(PickerColumn, {
      propsData: {
        options: options,
        valueKey: 'value'
      }
    })

    expect(wrapper.findAll('.weui-picker__item').length).toBe(3)
  })

  it('render a divider slot', () => {
    wrapper = shallow(PickerColumn, {
      propsData: {
        divider: true,
        content: '-'
      }
    })

    expect(wrapper.text()).toBe('-')
  })

  it('drag slot', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: testSingleColumn
      }
    })

    const columnWrapper = wrapper.find(PickerColumn)

    setTimeout(() => {
      slowVerticalDrag(columnWrapper, 0, -34)
      expect(columnWrapper.vm.currentIndex).toBe(1)

      slowVerticalDrag(columnWrapper, 0, -34)
      expect(columnWrapper.vm.currentIndex).toBe(2)

      // this will out of range
      slowVerticalDrag(columnWrapper, 0, -34)
      expect(columnWrapper.vm.currentIndex).toBe(2)

      slowVerticalDrag(columnWrapper, 0, 34)
      expect(columnWrapper.vm.currentIndex).toBe(1)

      // this will out of range
      slowVerticalDrag(columnWrapper, 0, 100)
      expect(columnWrapper.vm.currentIndex).toBe(0)

      done()
    }, 50)
  })

  it('click slot to change the current-value', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: [
          {
            values: [1, 2, 3],
            defaultIndex: 0
          }
        ]
      }
    })

    const columnWrapper = wrapper.find(PickerColumn)

    setTimeout(() => {
      const indicator = wrapper.find('.weui-picker__indicator').element

      const indicatorRect = indicator.getBoundingClientRect()

      columnWrapper.trigger('click', { clientX: 0, clientY: indicatorRect.top + 35 })

      expect(columnWrapper.vm.currentIndex).toBe(1)
      done()
    }, 50)
  })

  it('divider pickerSlot', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: [
          {
            divider: true
          }
        ]
      }
    })

    const pickerColumnWrapper = wrapper.find(PickerColumn)

    setTimeout(() => {
      pickerColumnWrapper.setData({
        currentIndex: 1
      })

      // divider should not emit change event when currentIndex changed
      expect(pickerColumnWrapper.emitted().change).toBeFalsy()
      done()
    }, 50)
  })

  it('index should be adjust to a suitable value when it is exceeded ot disabled', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: [
          {
            values: [
              {
                text: 1
              },
              {
                text: 2
              },
              {
                text: 3,
                disabled: true
              }
            ],
            defaultIndex: 0
          }
        ]
      }
    })

    const pickerColumnWrapper = wrapper.find(PickerColumn)

    setTimeout(() => {
      pickerColumnWrapper.vm.setIndex(4)

      // divider should not emit change event when currentIndex changed
      expect(pickerColumnWrapper.vm.currentIndex).toBe(1)
      done()
    }, 50)
  })

  it('watch defaultIndex', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: [
          {
            values: [1, 2, 3],
            defaultIndex: 0
          }
        ]
      }
    })

    const pickerColumnWrapper = wrapper.find(PickerColumn)

    setTimeout(() => {
      pickerColumnWrapper.setProps({
        defaultIndex: 1
      })

      expect(pickerColumnWrapper.vm.currentIndex).toBe(1)
      done()
    }, 50)
  })

  it('test setValue method', (done) => {
    wrapper = mount(Picker, {
      attachToDocument: true,
      propsData: {
        visible: true,
        columns: [
          {
            values: [1, 2, 3],
            defaultIndex: 0
          }
        ]
      }
    })

    const pickerColumnWrapper = wrapper.find(PickerColumn)

    setTimeout(() => {
      pickerColumnWrapper.vm.setValue(3)

      expect(pickerColumnWrapper.vm.currentValue).toBe(3)
      expect(pickerColumnWrapper.vm.currentIndex).toBe(2)
      done()
    }, 50)
  })
})
