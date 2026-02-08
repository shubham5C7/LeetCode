/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let mpp=new Map();

    for(let num of nums){
        mpp.set(num,(mpp.get(num)||0)+1);
    }
    for(let [key,val] of mpp){
        if(val ===2){
            return true
        }
    }
    return false
};