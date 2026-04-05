/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let n = nums.length;
    let jump = 0;
    for(let i=0;i<n;i++){
        if(i>jump){
            return false
        }
            jump = Math.max(jump,i+nums[i])
    }
    return true
};