/**
 * @param {number[]} nums
 * @return {number}   984805169
 */
var sumOfSquares = function(nums) {
    let sum = 0,n = nums.length
    for(let i=1;i<=nums.length;i++){
        if(n%i === 0){
            sum+= nums[i-1] * nums[i-1]
        }
    }
    return sum

  
};