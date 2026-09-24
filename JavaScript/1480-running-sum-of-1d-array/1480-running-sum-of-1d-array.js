/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

 function sumOfDigits(left,right,sum,res){
  if(left> right){
    return res
  }
  sum+=nums[left]
  res.push(sum)
 return sumOfDigits(left+1,right,sum,res)
 }
 return sumOfDigits(0,nums.length-1,0,[])
};