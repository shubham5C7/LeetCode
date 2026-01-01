/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let res=[];
    let left=0,low=0;
    while(left <m && low < n){
        if(nums1[left] < nums2[low]){
            res.push(nums1[left++]);
        }else{
             res.push(nums2[low++]);
        }
    }
     while(left <m){
          res.push(nums1[left++]);
     }
          while(low < n){
            res.push(nums2[low++]);
     }

     for(let i=0;i<res.length;i++){
        nums1[i]=res[i]
     }
};