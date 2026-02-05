/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let leftmax=0,rightmax=0,water=0;
    let left=0,right=height.length-1;

    while(left < right){
        if(height[left] < height[right]){
            if(height[left] >= leftmax){
                leftmax=height[left];
            }else{
                water += leftmax-height[left]
            }
            left++;
        }else{
            if(height[right] >= rightmax){
                rightmax=height[right];
            }else{
                water +=rightmax-height[right]
            }
            right--;
        }
    }
    return water
};