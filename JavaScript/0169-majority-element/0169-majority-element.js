/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map()

    for(let num of nums){
        map.set(num,(map.get(num)||0)+1)
    }
    let maxi = 0,maxiKey=0
    for(let [key,val] of map){
    if(maxi < val){
        maxi = val
        maxiKey = key
    }
    }
    return maxiKey
};