import Antd from 'ant-design-vue'
import XPage from '../components/XPage'
import ADialog from '../components/ADialog'
import XImage from '../components/XImage'
import Config from '../config'
import './directives'
import {currency, thousands} from '../libs/filters'

export default {
  Config,
  install(Vue, options){

    Vue.prototype['$config'] = Config
    Vue.prototype['$loading'] = function(options = 'loading', duration = 0) {
      const loading = this.$message.loading(options.text || options || 'loading', options.duration || duration)
      loading.close = loading // 兼容以前的写法 loading.close()
      return loading
    }
    // toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=400, height=400, left=0, top=0
    // 各浏览器对 window.open() 的窗口特征 sFeatures 参数支持程度存在差异 http://www.w3help.org/zh-cn/causes/BX1053
    Vue.prototype.$openWindow = function(url, target = '_blank', features = undefined, replace = false) {
      if (typeof features === 'object') {
        if (features.centered && features.height && features.width) {
          features.top = (screen.availHeight - features.height) / 2
          features.left = (screen.availWidth - features.width) / 2
          delete features.centered
        }
        features = Object.keys(features).map(key => {
          let val = features[key]
          if (typeof val === 'boolean') {
            val = val ? 'yes' : 'no'
          }
          return `${key}=${val}`
        }).join(', ')
      }
      return open(url, target, features, replace)
    }

    Vue.use(Antd)
    Vue.component(XPage.name, XPage)
    Vue.component(ADialog.name, ADialog)
    Vue.component(XImage.name, XImage)

    Vue.filter('currency', currency)
    Vue.filter('thousands', thousands)
    Vue.filter('array2String', function (array) {
      return array.length === 1 ? array[0] : array.join(' ')
    })
    Vue.filter('json', function (array) {
      return JSON.stringify(array)
    })

    let modules
    if (options && options.model) {
      let models = options.model
      modules = {}
      for (let k in models) {
        if (!modules['$$' + k]) {
          // let _t = instance.execute
          // instance.execute = function (path, options) {
          //   return _t.apply(instance, [path, options])
          // }
          modules['$$' + k] = new models[k]()
        }
      }
    }

    Vue.filter('json', function (array) {
      return JSON.stringify(array)
    })

    Vue.mixin({
      beforeCreate(){
        if(modules) Object.assign(this, modules)
      },
      created(){
        if (this.$store && this.$store.state){
          this.$user = this.$store.state.user
        }
      },
      mounted() {
        this._timeouts = this._timeouts || []
        this._interval = this._interval || []
      },
      destroyed() {
        this._timeouts && this._timeouts.forEach(function (t) {
          clearTimeout(t)
        })
        this._interval && this._interval.forEach(function (t) {
          clearInterval(t)
        })
      },
      methods: {
        /**
         * setTimeout
         * @param fn
         * @param timeout
         */
        setTimeout(fn, timeout) {
          this._timeouts.push(setTimeout(fn, timeout))
        },

        /**
         * setInterval
         * @param fn
         * @param delay
         */
        setInterval(fn, delay) {
          this._interval.push(setInterval(fn, delay))
        }
      }
    })

    /**
     * 获取图片访问url
     * @param {String} key 图片路径
     * @param {String} [size] 可选 large|middle|small
     * @param taskImage
     * @returns {*|String}
     */
    Vue.prototype.getUploadImageUrl = function (key, size = 'small', taskImage = 'N') {
      let query = ''
      if (!key || key.startsWith('data:')) return key
      if (typeof key === 'function') key = key.call(this)
      if (typeof key === 'string' && key !== '') {
        if (key[0] !== '/') key = '/' + key
        if (size) {
          let dotPos = key.lastIndexOf('.')
          let ext = key.substr(dotPos)
          key = key.substr(0, dotPos) + '_' + size + ext
        }
        query = key
      } else {
        if (taskImage && taskImage === 'Y') {
          return Config.taskErrorImage
        } else {
          return Config.errorImage
        }
      }
      return Config.getStaticUrlPath() + query
    }
  }
}
