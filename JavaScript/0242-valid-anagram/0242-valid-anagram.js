/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let str = s.split("").sort().join("");
    let line=t.split("").sort().join("");
    return str===line;
};