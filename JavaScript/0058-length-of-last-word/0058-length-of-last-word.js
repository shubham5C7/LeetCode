/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let nums=s.trim().split(" ");
   return nums[nums.length-1].length;
};