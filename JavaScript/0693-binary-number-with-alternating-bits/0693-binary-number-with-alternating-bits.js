/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    if(n<0) return false
    while(n!=0){
        let cnt= n & 1
        n = n>>>1
        if((n & 1) === cnt){
            return false
        }

    }
    return true
};