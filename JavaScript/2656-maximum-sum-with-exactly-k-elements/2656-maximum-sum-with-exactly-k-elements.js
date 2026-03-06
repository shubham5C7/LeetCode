/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let sum=0;
    while(k!==0){
        let maxi =Math.max(...nums);
        sum+=maxi
        let idx = nums.indexOf(maxi);
        nums.splice(idx,1,maxi+1);
        k--;
    }
    return sum
};