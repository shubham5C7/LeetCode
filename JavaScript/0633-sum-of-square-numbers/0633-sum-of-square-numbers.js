/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for(let i=0;i<=Math.sqrt(c);i++){
        let a = i
        let b =  Math.sqrt(c-a*a)
        if(Number.isInteger(b) ){
            return true
        }
    }
    return false
};