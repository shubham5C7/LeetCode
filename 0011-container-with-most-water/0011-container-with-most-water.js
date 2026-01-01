/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0;
    let right = height.length-1;
    let maxarea=0;
    while(left < right){
        let width=right-left;
        let maxheight = Math.min(height[left],height[right])
        maxarea = Math.max(maxarea,width*maxheight);

        if(height[left]<height[right]){
            left++;
        }else{
            right--
        }
    }
    return maxarea;
};