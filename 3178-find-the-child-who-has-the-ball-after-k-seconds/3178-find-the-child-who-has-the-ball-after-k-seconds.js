/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    let pos =0;
    let dir =1;
    for(let i=0;i<k;i++){
        if(pos === 0) dir =1;
        if(pos === n-1) dir = -1

        pos+=dir;
    }
    return pos;
};