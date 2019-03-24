/**
 * Created by 25286 on 2019/3/9.
 */
(function(window){
    "use strict";
    let jQuery = function (selector) {
        return new jQuery.fn.init(selector)
    }
    jQuery.fn = {
        css:function(key,value){
            alert('css')
        },
        html:function(key,value){
            return 'this is html function'
        }
    }
    let init = jQuery.fn.init=  function (selector) {
        let slice = Array.prototype.slice
        let dom  = slice.call(document.querySelectorAll(selector))
        console.log(dom)
        let i,len = dom?dom.len:0
        for (i = 0;i<len;i++){
            this[i] = dom[i]
        }
        this.length = len
        this.selector = selector||''
    }
    init.prototype = jQuery.fn
    window.$= jQuery
    }

)(window)