/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 const reverse = function(s,left,right){
 while(left < right){
    [s[left],s[right]] = [s[right],s[left]];

 left++
 right--
 }

 }
var reversePrefix = function(s, k) {
    if(s.length === 0) return ""

    s= s.split("");

    reverse(s,0,k-1)

    return s.join(""); 
};