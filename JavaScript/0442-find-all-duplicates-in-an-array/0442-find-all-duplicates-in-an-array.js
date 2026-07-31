/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let mpp = new Map();
    let ans = []
    for(let num of nums){
        mpp.set(num,(mpp.get(num )|| 0) +1 );
    }
    console.log(mpp)
    for(let [key,val] of mpp){
        if(val >= 2){
            ans.push(key)
        }
    }
    return ans
};