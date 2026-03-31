/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let n=nums.length;
    let first=-1;
    let last=-1;
    for(let i=0;i<n;i++){
    if(nums[i] ===target){
        if(first === -1){
            first=i;
        }
            last=i;
    }
    }
    return [first,last];
};