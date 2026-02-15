/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let mpp=new Map();
    for(let num of nums){
        mpp.set(num,(mpp.get(num)||0)+1);
    }
    for(let [num,mp] of mpp){
        if(mp===1){
            return num;
        }
    }
};