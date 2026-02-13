/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.trim();
    let string=s.toLowerCase();
    let str=string.replace(/[^a-zA-Z0-9]/g,"");
    let left=0,right=str.length-1;
    while(left < right){
        if(str[left] !== str[right]){
            return false
        }
        left++;
        right--
    }
    return true
};