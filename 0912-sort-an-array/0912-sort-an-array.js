/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let min = Math.min(...nums);
    let max = Math.max(...nums);

     let count = new Array(max - min + 1).fill(0);

    for(let num of nums){
           count[num - min]++;
    }

    let res=[];
    for(let i=0;i<count.length;i++){
        while(count[i] > 0){
            res.push(i + min);
            count[i]--;
        }
    }
    return res;
};