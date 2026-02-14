/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let st = new Set(nums);
    let maxLen=0;

    for(let num of st){
        if(!st.has(num-1)){
            let curr =num;
            let currLen =1;
            while(st.has(curr+1)){
                currLen++;
                curr++;
            }
              maxLen = Math.max(maxLen, currLen);
        }
    }
    return maxLen;
};