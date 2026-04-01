/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res=[];

function backtrack(idx,path,currsum){
if(currsum === target){
    res.push([...path]);
    return;
}
if(currsum > target) return;
for(let i=idx;i<candidates.length;i++){
    path.push(candidates[i]);
    backtrack(i,path,currsum+candidates[i]);
    path.pop()
}
}
backtrack(0,[],0)
    return res;
};