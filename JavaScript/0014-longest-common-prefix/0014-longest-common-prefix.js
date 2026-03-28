/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
 let n=strs.length;
 strs.sort();
 let ans="";
 let first=strs[0];
 let last=strs[n-1];
 for(let i=0;i<Math.min(first.length,last.length);i++){
    if(first[i]!== last[i]){
        return ans;
    }
    ans+=first[i]
 }
 return ans;
};