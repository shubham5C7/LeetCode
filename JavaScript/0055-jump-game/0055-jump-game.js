/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let idx=0,n=nums.length;
    for(let i=0;i<n;i++){
        if(i>idx){
            return false;
        }
        idx = Math.max(idx,i+nums[i])
    }
    return true
};