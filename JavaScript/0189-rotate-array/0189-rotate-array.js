/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 const reverse=(nums,left,right)=>{
  while(left < right){
    [nums[left],nums[right]] = [nums[right],nums[left]];
    left++;
    right--;
  }
  return nums
 }
var rotate = function(nums, k) {
    let n = nums.length;
    k=k%n;

    reverse(nums,0,n-1);
    reverse(nums,0,k-1);
     reverse(nums,k,n-1);

     return nums;
};