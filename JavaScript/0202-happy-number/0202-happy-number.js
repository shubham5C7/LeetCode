/**
 * @param {number} n
 * @return {boolean}
 */
 const getNum = function(n){
    let sum=0;
    while(n!=0){
        let digit = n%10;
        sum+=digit*digit;
        n=Math.floor(n/10);
    }
    return sum;
 }
var isHappy = function(n) {
  let slow = n;
  let fast = getNum(n);
  while(fast !== 1 && slow !== fast){
    slow = getNum(slow);
    fast = getNum(getNum(fast))
  }
  return fast === 1;
};