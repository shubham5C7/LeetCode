/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let result=[];
function backtrack(idx,path){
if(nums.length === path.length){
    result.push([...path]);
    return;
}
for(let i=0;i<nums.length;i++){
    if(path.includes(nums[i])) continue;
    path.push(nums[i]);
    backtrack(idx+1,path);
    path.pop()
}
}
backtrack(0,[])
    return result;
};