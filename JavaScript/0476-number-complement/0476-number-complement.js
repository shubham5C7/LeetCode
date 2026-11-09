/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
let bits = num.toString(2).length;

let res =  (~num) & ((1 << bits)-1)
return res
};