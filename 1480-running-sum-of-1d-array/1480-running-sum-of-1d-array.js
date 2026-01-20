/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let n=nums.length;
    let sum=0;
    let ans=[]
    for(let i=0;i<n;i++){
        sum+=nums[i];
        ans.push(sum)
    }
    return ans;
};