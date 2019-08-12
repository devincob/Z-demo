/**
 * 步骤三
 * 管理事件(行为)
 */
// 引入 状态(类型),用于提交到mutations
import * as types from './types'

// 导出
export default {
  // 保存 请求参数 approvalHistoryParams为上面的"action名"
  approvalConfirmParams: ({commit}, res) => {
    // 此处是触发mutation的 STORE_MOVIE_ID为"mutation名"
    commit(types.APPROVAL_HISTORY_PARAMS, res)
  },
  setValue: ({commit}, res) => {
    // 此处是触发mutation的 STORE_MOVIE_ID为"mutation名"
    commit(types.SET_VALUE_PARAMS, res)
  }
}
