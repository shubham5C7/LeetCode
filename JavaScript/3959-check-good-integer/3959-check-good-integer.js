/**
 * @param {number} n
 * @return {boolean}
 */
var checkGoodInteger = function(n) {
  let sum=0,sqrSum=0;
  while(n>0){
     let dig = n % 10;
     sum += dig
     sqrSum+= dig*dig;
      n=Math.floor(n/10)
  }  
  return sqrSum - sum >= 50 ? true : false
};