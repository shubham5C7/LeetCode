/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let mpp= new Map;

    for(let i=0;i<nums.length;i++){
        let third = target - nums[i];
        if(mpp.has(third)){
            return [mpp.get(third),i];
        }
        mpp.set(nums[i],i)
    }
    return nums
};