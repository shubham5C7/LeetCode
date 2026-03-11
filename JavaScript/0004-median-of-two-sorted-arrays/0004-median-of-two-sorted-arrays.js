/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let m=nums1.length,n=nums2.length;
    let left=0,low=0;
    let res=[]
    while(left < m && low<n){
        if(nums1[left] < nums2[low]){
        res.push(nums1[left++])
        }else{
            res.push(nums2[low++])
        }
    }
    while(left < m){
         res.push(nums1[left++])
    }
        while(low<n){
        res.push(nums2[low++])
    }
    let z=res.length;

    if(z%2===0){
        return (res[z/2]+res[z/2-1])/2
    }else{
        return res[Math.floor(z/2)];
    }
};