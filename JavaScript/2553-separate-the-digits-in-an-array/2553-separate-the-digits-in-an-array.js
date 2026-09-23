/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let res = []

    for(let i=0;i<nums.length;i++){
        let digit = nums[i].toString().split("").map(Number)

        for(let j=0;j<digit.length;j++){
            res.push(digit[j])
        }
    }
    return res
};