/**
 * Created by wdj on 2017/3/23.
 * currency.js
 */
const digitsRE = /(\d{3})(?=\d)/g

/**
 * 货币格式化
 * @param value
 * @param currency 货币符号
 * @param decimals 保留小数点位数
 * @returns {string}
 */
export function currency(value, currency = '¥', decimals = 2) {
  value = parseFloat(value)
  if (!isFinite(value) || (!value && value !== 0)) return ''
  let stringified = Math.abs(value).toFixed(decimals)
  let _int = decimals
    ? stringified.slice(0, -1 - decimals)
    : stringified
  let i = _int.length % 3
  let head = i > 0
    ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
    : ''
  let _float = decimals
    ? stringified.slice(-1 - decimals)
    : ''
  let sign = value < 0 ? '-' : ''
  return sign + currency + head +
    _int.slice(i).replace(digitsRE, '$1,') +
    _float
}

// 数字添加 千分位
// vue template 使用 {{3333|thousands}} or {{3333|thousands(2)}}
/**
 * 数字添加 千分位
 * @param value
 * @param decimals 保留小数点位数
 * @returns {string}
 */
export function thousands(value, decimals = 0) {
  return currency(value, '', decimals)
}
