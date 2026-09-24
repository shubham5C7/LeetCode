/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    const countEven=function(left,right,count){
    if(left>right) return count
    let n = nums[left].toString().split("")
     
     
     if(n.length %2===0){
        count++
     }

   return countEven(left+1,right,count)
    }
    return countEven(0,nums.length-1,0)
};