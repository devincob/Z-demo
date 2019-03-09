/**
 * Created by 25286 on 2019/3/9.
 */
(function (window) {
        let zepto = {}
        function Z(dom,selector){
            "use strict";
            let i,len  = dom?dom.len:0
            for (i = 0;i<len;i++){
                this[i] = dom[i]
            }
            this.length = len
            this.selector = selector||''
        }
        zepto.Z = function (dom, selector) {
            return new Z(dom, selector)
        }
        zepto.init  = function (selector) {
            let slice  = Array.prototype.slice
            let dom  = slice.call(document.querySelectorAll(selector))
            console.log(dom)
            return zepto.Z(dom,selector)
        }
        let $  = function (selector) {
            return zepto.init(selector)
        }
        window.$ = $
        $.fn = {
            css:function(key,value){
                "use strict";
                alert('css')
            },
            html:function(key,value){
                "use strict";
                return 'this is html function'
            }
        }
        Z.prototype = $.fn
    }

)(window)