/**
 * Created by devin on 2019/2/20.
 */
define(['./util.js'], function(util){
    var aUtil ={
        aGetFormatDate:function (date) {
            return util.getFormateDate(date, 2)
        }
    }
    return aUtil
})