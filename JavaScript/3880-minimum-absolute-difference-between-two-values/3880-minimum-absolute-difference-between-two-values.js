/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function(nums) {
    
    let minidiff = Infinity
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
         if (nums[i] + nums[j] === 3) {
                let diff = Math.abs(i - j);

                if (diff < minidiff) {
                    minidiff = diff;
                }
            }
         }
        
    }
    return minidiff === Infinity ? -1 : minidiff
};