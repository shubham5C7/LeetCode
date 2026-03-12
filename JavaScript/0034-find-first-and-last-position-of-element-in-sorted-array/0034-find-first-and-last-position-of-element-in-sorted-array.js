/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let n=nums.length;
    let firstIdx=-1;
    let lastIdx=-1;
    for(let i=0;i<n;i++){
  if(nums[i]===target){
    if(firstIdx ===-1) firstIdx=i
    lastIdx=i
  }
    }
   return [firstIdx,lastIdx]
};