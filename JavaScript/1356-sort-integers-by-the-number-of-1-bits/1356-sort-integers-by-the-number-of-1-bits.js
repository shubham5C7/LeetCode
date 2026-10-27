/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    return arr.sort((a,b)=>{
        let countA = a.toString(2).split("0").join("").length;
        let countB = b.toString(2).split("0").join("").length;

        if(countA === countB){
            return a-b
        }

    return countA - countB
    })
};