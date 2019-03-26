/**
 * Created by devin on 2019/2/20.
 */
define(function () {
    var util ={
        getFormateDate: function (date, type) {
            if (type === 1) {
                return '2019-02-20'
            }
            if (type === 2) {
                return '2019年2月20日'
            }
        }
    }
    return util
})