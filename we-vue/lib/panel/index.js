!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("vue"));else if("function"==typeof define&&define.amd)define(["vue"],t);else{var n=t("object"==typeof exports?require("vue"):e.Vue);for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}("undefined"!=typeof self?self:this,function(e){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=254)}({0:function(e,t,n){"use strict";n.d(t,"c",function(){return u});var r=n(2),o=n.n(r),i=n(3),s=n(5);n.d(t,"a",function(){return i.a}),n.d(t,"b",function(){return s.a});var u=o.a.prototype.$isServer},1:function(e,t){e.exports=function(e,t,n,r,o,i){var s,u=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,u=e.default);var a="function"==typeof u?u.options:u;t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns,a._compiled=!0),n&&(a.functional=!0),o&&(a._scopeId=o);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},a._ssrRegister=f):r&&(f=r),f){var d=a.functional,l=d?a.render:a.beforeCreate;d?(a._injectStyles=f,a.render=function(e,t){return f.call(t),l(e,t)}):a.beforeCreate=l?[].concat(l,f):[f]}return{esModule:s,exports:u,options:a}}},144:function(e,t,n){"use strict";var r=n(0);t.a=Object(r.a)({name:"wv-panel",props:{title:String}})},2:function(t,n){t.exports=e},254:function(e,t,n){"use strict";function r(e){n(255)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(144),i=n(256),s=n(1),u=r,c=s(o.a,i.a,!1,u,"data-v-5cedf679",null);t.default=c.exports},255:function(e,t){},256:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"weui-panel weui-panel_access"},[e.title?n("div",{staticClass:"weui-panel__hd",domProps:{innerHTML:e._s(e.title)}}):e._e(),e._v(" "),n("div",{staticClass:"weui-panel__bd"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"weui-panel__ft"},[e._t("ft")],2)])},o=[],i={render:r,staticRenderFns:o};t.a=i},3:function(e,t,n){"use strict";var r=n(4);t.a=function(e){return e.mixins=e.mixins||[],e.components=e.components||{},e.install=e.install||r.a,e}},4:function(e,t,n){"use strict";t.a=function(e){e.component(this.name,this)}},5:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var r=function(e){return e.changedTouches[0]||e.touches[0]}}})});