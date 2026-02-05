/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let left=0,right=nums1.length;
    let low=0,high=nums2.length;
    let  res=[];

    while(left < right && low<high){
        if(nums1[left] < nums2[low]){
            res.push(nums1[left++])
        }else{
        res.push(nums2[low++])
        }
    }
       while(left < right){
         res.push(nums1[left++])
    }
    while(low < high){
         res.push(nums2[low++])
    }
    let z=res.length;
    let median;

    if(z%2!==0){
        median= res[Math.floor(z/2)];
    }else{
        median=(res[z/2]+res[z/2-1])/2.0
    }
    return median
};