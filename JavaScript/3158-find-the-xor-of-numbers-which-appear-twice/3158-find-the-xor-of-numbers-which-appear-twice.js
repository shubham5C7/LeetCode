/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function(nums) {
    let ans = 0
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i]) !== i){
      ans = ans^nums[i]
        }
    }
    return ans
};