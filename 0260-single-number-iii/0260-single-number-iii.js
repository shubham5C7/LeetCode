/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let res=[];
    let mpp = new Map();
    for(let num of nums){
        mpp.set(num,(mpp.get(num)||0)+1);
    }
    for(let [key,val] of mpp){
     if(val === 1){
        res.push(key)
     }
    }
    return res;
};