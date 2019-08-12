/**
 * 时间格式
 * @param date {Date} 时间
 * @param format [String] 格式，默认为yyyy-MM-dd hh:mm:ss
 * @return {String}
 */
export function dateFormat(date, format) {
  if (isString(date)) {
    date = dateCreate(date)
  } else if (!isDate(date)) {
    return date
  }
  const week = ['日', '一', '二', '三', '四', '五', '六']
  let cfg = {
    yyyy: date.getFullYear(), // 年 : 4位
    yy: date.getFullYear().toString().substring(2), // 年 : 2位
    M: date.getMonth() + 1, // 月 : 如果1位的时候不补0
    MM: zeroPad(date.getMonth() + 1, 2), // 月 : 如果1位的时候补0
    d: date.getDate(), // 日 : 如果1位的时候不补0
    dd: zeroPad(date.getDate(), 2), // 日 : 如果1位的时候补0
    hh: zeroPad(date.getHours(), 2), // 时
    mm: zeroPad(date.getMinutes(), 2), // 分
    ss: zeroPad(date.getSeconds(), 2), // 秒
    h: date.getHours(),
    m: date.getMinutes(),
    s: date.getSeconds(),
    W: date.getDay(),
    www: week[date.getDay()],
    WWW: '星期' + week[date.getDay()]
  }
  format || (format = 'yyyy-MM-dd hh:mm:ss')
  return format.replace(/([a-z])(\1)*/ig, function (m) {
    return cfg[m] || ''
  })
}

/**
 * 创建一个日期
 * @param dateStr
 * @returns {Date}
 */
export function dateCreate(dateStr) {
  dateStr = dateStr.replace(/-/g, '/')
  return new Date(dateStr)
}

/**
 * 两个时间小时的差
 * @param startTime
 * @param endTime
 * @returns {string}
 */
export function timeDiff(startTime, endTime) {
  if (!startTime || !endTime) {
    return ''
  }
  let s = dateCreate(startTime)
  let e = dateCreate(endTime)
  return `${(parseInt(e - s) / 1000 / 60 / 60).toFixed(2)}小时`
}

/**
 * 零填充
 * @param num
 * @param len 填充长度
 * @returns {String}
 */
function zeroPad(num, len) {
  num += ''
  len -= num.length
  for (let i = 0; i < len; i++) num = '0' + num
  return num
}

function isString(val) {
  return typeof val === 'string'
}

function isDate(val) {
  return toString.call(val) === '[object Date]'
}
