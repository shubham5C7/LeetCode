/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let map = new Map();

    for(let num of nums){
        map.set(num,(map.get(num) || 0) +1);
    }

        let maxi = 0;
    let maxikey = Infinity;

    for (let [key, val] of map) {
        if (key % 2 === 0) {
            if (val > maxi || (val === maxi && key < maxikey)) {
                maxi = val;
                maxikey = key;
            }
        }
    }

    return maxikey === Infinity ? -1 : maxikey;

};