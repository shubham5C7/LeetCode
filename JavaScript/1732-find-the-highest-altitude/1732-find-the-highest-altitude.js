/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let prefix = []

    prefix[0] = 0
    for(let i=1;i<=gain.length;i++){
        prefix[i] = prefix[i-1]+gain[i-1]
    }
    let maxi = -Infinity;
    for(let num of prefix){
        if(num > maxi){
            maxi= num
        }
    }
    return maxi
};