/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let maxi1 =-Infinity,maxi2 = -Infinity
    for(let num of nums){
        if(num > maxi1){
            maxi2 = maxi1
            maxi1= num
        }else if(num > maxi2){
            maxi2 = num
        }
    }
    return ((maxi1-1)*(maxi2-1) )
};