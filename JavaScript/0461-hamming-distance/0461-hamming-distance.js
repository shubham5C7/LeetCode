/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
  let n =  x ^ y
  let cnt = 0
  while(n!=0){
   cnt+= n & 1
   n= n>>>1
  }
  return cnt
};