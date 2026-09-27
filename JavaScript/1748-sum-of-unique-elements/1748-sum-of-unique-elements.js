/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let map = new Map()
    let sum = 0

    for(let num of nums){
        map.set(num,(map.get(num)||0)+1)
    }

    for(let [key,val] of map){
        if(val === 1){
            sum+=key
        }
    }
    return sum
};