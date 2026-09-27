/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {
    let n = nums.length
    let res = new Array(n)

    res[0] = 0

    for(let i=1;i<nums.length;i++){
        res[i] = res[i-1] + nums[i-1]
    }


    let sufix = 0
    for(let i = n-1;i>=0;i--){
        res[i] = Math.abs(res[i] - sufix)
        sufix+=nums[i]


    }return res
};