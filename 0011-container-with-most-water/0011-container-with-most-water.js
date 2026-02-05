/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max_area=0;
    let left=0,right=height.length-1;
    while(left < right){
        max_area=Math.max(max_area,(right-left)*Math.min(height[right],height[left]))
        if(height[right] < height[left]){
            right--
        }else{
            left++;
        }
    }
    return max_area
};