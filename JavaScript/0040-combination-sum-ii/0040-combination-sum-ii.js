/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    let res=[];
    candidates.sort((a,b)=>a-b);
function backtrack(idx,path,currsum){
if(currsum === target){
    res.push([...path]);
    return;
}
if(currsum > target) return;

for(let i=idx;i<candidates.length;i++){
    if(i>idx && candidates[i] === candidates[i-1]) continue;
    path.push(candidates[i]);
    backtrack(i+1,path,currsum+candidates[i]);
    path.pop()
}
}
backtrack(0,[],0)
    return res;
};