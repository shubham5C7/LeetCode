/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let bits = n.toString(2).padStart(32, "0");
    let rev = bits.split("").reverse().join("")
    return parseInt(rev,2) >>> 0
};