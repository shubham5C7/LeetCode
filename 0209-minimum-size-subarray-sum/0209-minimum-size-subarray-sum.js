/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left=0,right=0,minlen=Infinity,sum=0;
    while(right < nums.length){
        sum+=nums[right];

        while(sum >= target){
            minlen=Math.min(minlen,right-left+1);
            sum-=nums[left];
            left++;
        }
        right++
    }
    return minlen==Infinity ? 0 :minlen;
};