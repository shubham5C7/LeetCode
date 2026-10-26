/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let res = []
    for(let i=0;i<n;i++){
    res[i] = start+2*i
    }
    let cnt = 0
    for(let num of res){
    cnt^=num
    }
    return cnt
};