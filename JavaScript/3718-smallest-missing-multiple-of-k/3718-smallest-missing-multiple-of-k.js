/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let st =new Set(nums)

for(let i=k;i<Infinity;i+=k){
    if(!st.has(i)){
        return i;
    }
}

};