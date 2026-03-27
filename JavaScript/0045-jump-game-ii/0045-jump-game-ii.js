/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jump=0;
    let fastest=0;
    let currEnd=0;
    for(let i=0;i<nums.length-1;i++){
        fastest=Math.max(fastest,i+nums[i]);

        if(i===currEnd){
            jump++;
            currEnd=fastest;
        }
    }
    return jump
};