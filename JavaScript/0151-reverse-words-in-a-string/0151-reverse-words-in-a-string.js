/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let strs=s.trim().split(/\s+/);
    return strs.reverse().join(" ");
};