/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
    let res=[];
function backtrack(idx,path,currsum){
if(path.length === k && currsum === n){
    res.push([...path]);
    return;
}
if(currsum > n) return;
for(let i=idx;i<=9;i++){
    path.push(i);
    backtrack(i+1,path,currsum+i);
    path.pop()
}
}
backtrack(1,[],0)
    return res;
};