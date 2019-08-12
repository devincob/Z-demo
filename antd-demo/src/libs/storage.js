/**
 * Storage
 * @type {{storage: Function, get: Function, set: Function}}
 * @return {*}
 */

function Storage(name, value, expired) {
  if (!name) return null
  let storage = window.localStorage
  let date = new Date()
  let _watch = name
  name = 'STORAGE_' + String(name).toLocaleUpperCase()
  if (value === null) { // 当值为空时删除
    if (storage.hasOwnProperty(name)) {
      storage.removeItem(name)
    }
    Storage._execWatch(_watch, null)
  } else if (!value) {
    let item = storage.getItem(name)
    if (item) {
      item = JSON.parse(item)
      if (item.expired > 0 && item.expired - date.getTime() < 0) {
        storage.removeItem(name)
        Storage._execWatch(_watch, null)
      } else {
        return item.value
      }
    }
  } else {
    let ret = storage.setItem(name, JSON.stringify({
      value: value,
      expired: expired > 0 ? date.getTime() + expired * 1000 : 0
    }))
    Storage._execWatch(_watch, value.ret)
    return ret
  }
  return null
}

Storage._watchers = {}

Storage._execWatch = function (prop, args) {
  let _watch = Storage._watchers[prop] || []
  _watch.forEach((handler) => {
    if (handler && typeof handler === 'function') {
      handler(args)
    }
  })
}

Storage.watch = function (prop, handler) {
  Storage._watchers[prop] = Storage._watchers[prop] || []
  Storage._watchers[prop].push(handler)
}

Storage.watchOne = function (prop, handler) {
  Storage._watchers[prop] && delete Storage._watchers[prop]
  Storage._watchers[prop] = [handler]
}

Storage.unwatch = function (prop, handler) {
  let _handlers = Storage._watchers[prop] || []
  if (handler) {
    for (let i = 0; i < _handlers.length; i++) {
      if (_handlers[i] === handler) {
        _handlers.slice(i, 1)
      }
    }
    Storage._watchers[prop] = _handlers
  } else {
    Storage._watchers[prop] = []
  }
}

Storage.get = function (name, defaultValue) {
  let value = Storage(name)
  return value || defaultValue
}

/**
 *
 * @param {String} name
 * @param {*} value
 * @param {int} expired 过期时间
 * @returns {*}
 */
Storage.set = function (name, value, expired) {
  if (typeof value === 'undefined') throw new Error('The value must be filled in, may be null!')
  return Storage(name, value || null, expired || 0)
}

export default Storage
