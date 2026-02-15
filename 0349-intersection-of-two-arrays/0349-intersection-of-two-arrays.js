/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let map={};
    let res=[];
    for(let num of nums1){
        map[num]=1;
    }
    for(let num of nums2){
        if(map[num]==1){
            res.push(num);
            map[num]=0;
        }
    }
 return res;
};