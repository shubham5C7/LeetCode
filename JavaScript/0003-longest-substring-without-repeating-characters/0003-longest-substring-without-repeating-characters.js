/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let currstr="";
    let maxLen=0;
    for(let str of s){
        if(currstr.includes(str)){
            let idx = currstr.indexOf(str);
            currstr = currstr.slice(idx+1);
        }
        currstr+=str;
        maxLen=Math.max(maxLen,currstr.length);
    }
    return maxLen;
};