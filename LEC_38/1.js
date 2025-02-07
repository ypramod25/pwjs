/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe : function (val1) {
            if(val1 === val)return true;
            throw "Not Equal";
        },
        notToBe : function (val1) {
            if(val !== val1)return true;
            throw "Equal";
        }
    }
};