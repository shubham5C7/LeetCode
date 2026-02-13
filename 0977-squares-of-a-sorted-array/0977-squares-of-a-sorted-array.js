/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n= nums.length;
    let res=new Array(n);
    let left=0,right=n-1,pos=n-1;
    while(left <= right){
        if(Math.abs(nums[left]) > Math.abs(nums[right])){
            res[pos] = nums[left] * nums[left]
            left++;
        }else{
                 res[pos] = nums[right] * nums[right]
            right--;
        }
        pos--;
    }
    return res;
};