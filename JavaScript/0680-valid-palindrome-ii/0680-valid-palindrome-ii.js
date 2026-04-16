/**
 * @param {string} s
 * @return {boolean}
 */
 const palindrome= function(s,left,right){
    while(left < right){
        if(s[left] !== s[right]){
           return false;
        }
           left++;right--
    }
    return true
 }
var validPalindrome = function(s) {
    let left=0,right=s.length-1;
    while(left < right){
        if(s[left] === s[right]){
            left++;
            right--
        }else{
            return (palindrome(s,left+1,right) || palindrome(s,left,right-1))
        }
    }
    return true
};