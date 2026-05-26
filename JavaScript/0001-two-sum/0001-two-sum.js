/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mpp= {};

    for(let i=0;i<nums.length;i++){
        let third = target - nums[i];
        if(third in mpp){
            return [mpp[third],i];
        }
        mpp[nums[i]] = i;
    }
    return nums
};