/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    let count = 0;
    nums.sort((a,b)=>a-b)

    for(let i=nums.length-1;i>=2;i--){
        let left = 0,right = i-1
        while(left < right){
            if(nums[right] + nums[left] > nums[i]){
                count+=right-left
                right--
            }else{
                left++
            }
        }
    }
    return count
};