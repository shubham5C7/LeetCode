/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    let res=[];
    for(let row of matrix){
        res.push(...row);
    }
    res.sort((a,b)=>a-b);

    return res[k-1]
};