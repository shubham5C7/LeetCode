/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arrs = nums.map((num,idx)=>[num,idx]);

    let n= arrs.length;
    arrs.sort((a,b)=>a[0]-b[0]);
    let left = 0,right = n-1;
    while(left <right){
    let sum = arrs[left][0]+arrs[right][0];
     if(sum === target){
        return [arrs[left][1],arrs[right][1]];
     }  
     else if(sum < target){
        left++
     }else{
        right --
     }
    }
};