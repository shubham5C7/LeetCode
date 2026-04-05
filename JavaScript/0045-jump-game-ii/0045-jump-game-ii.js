/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jump=0,currEnd=0,fast=0;
    for(let i=0;i<nums.length-1;i++){
        fast=Math.max(fast,i+nums[i]);
        if(i === currEnd)
        jump++;
        currEnd = fast;
    }
    return jump;
};