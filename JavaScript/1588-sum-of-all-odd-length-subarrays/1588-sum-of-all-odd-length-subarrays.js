/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function(arr) {
    let sum = 0
    for(let start =0;start<arr.length;start++){
        for(let end = start;end<arr.length;end++){
            let length = end-start+1
            if(length & 1){
            let subarray = arr.slice(start,end+1)
               .reduce((acc,sum)=> acc+sum,0)
                   
                   sum+=subarray

            }
        }
    }
    return sum
};