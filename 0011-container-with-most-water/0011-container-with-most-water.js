/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n=height.length;
    let left=0,right=n-1,max_area=0;
    while(left < right){
        max_area=Math.max(max_area,((right-left)*Math.min(height[right],height[left])));
        if(height[right] < height[left]){
            right--
        }else{
            left++
        }
    }
    return max_area
};