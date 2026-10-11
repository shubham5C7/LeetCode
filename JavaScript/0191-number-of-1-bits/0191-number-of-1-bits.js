/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
  const countones = n => n===0 ? 0 : (n&1)+countones(n>>>1)
  return countones(n);

};