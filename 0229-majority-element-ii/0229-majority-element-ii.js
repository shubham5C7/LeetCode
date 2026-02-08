/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let mpp = new Map();

    for(let num of nums){
        mpp.set(num,(mpp.get(num)||0)+1);
    }
 let res=[]
    for(let [key,val] of mpp){
        if(val > nums.length/3){
        res.push(key)
        }
    }
    return res;
};