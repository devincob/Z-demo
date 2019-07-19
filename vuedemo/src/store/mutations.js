/**
 * 步骤四
 * 突变(处理状态改变)
 */
// 审批历史参数
import {APPROVAL_HISTORY_PARAMS, SET_VALUE_PARAMS} from './types'

// 引入 getters
import getters from './getters'

// 定义、初始化数据
const state = {
  approvalHistoryParams: {
    name: 'hello'
  },
  setValue: {
    'name': 'world'
  }
}

// 定义 mutations
const mutations = {
  // 匹配actions通过commit传过来的值,并改变state上的属性的值
  // 审批历史页 请求参数
  [SET_VALUE_PARAMS] (state, name) {
    state.setValue = name
  },
  [APPROVAL_HISTORY_PARAMS] (state, res) {
    state.approvalHistoryParams = res // state数据名data
  }
}
console.log(mutations)
// 导出
export default {
  getters,
  state,
  mutations
}
