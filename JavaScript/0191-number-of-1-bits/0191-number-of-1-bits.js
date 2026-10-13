/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
 const countone = n=> n===0 ? 0 : (n& 1)+countone(n>>>1)
  return countone(n)
};