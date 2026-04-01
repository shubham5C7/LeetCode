/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n=height.length;
    let left=0,right=n-1,maxarea=0;
    while(left < right){
        maxarea = Math.max(maxarea,(right-left)*Math.min(height[right],height[left]));
        if(height[left] < height[right]){
            left++
        }else{
            right--
        }
    }
    return maxarea
};