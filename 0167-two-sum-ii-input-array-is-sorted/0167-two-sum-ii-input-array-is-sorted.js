/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let mpp={};
    for(let i=0;i<numbers.length;i++){
        let third =target- numbers[i];
        if(third in  mpp){
            return [mpp[third]+1,i+1];
        }
        mpp[numbers[i]]=i;
    }
};