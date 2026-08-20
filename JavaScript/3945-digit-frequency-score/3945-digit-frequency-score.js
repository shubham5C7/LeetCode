/**
 * @param {number} n
 * @return {number}
 */
var digitFrequencyScore = function(n) {
 let map = new Map();

 while(n!=0){
    let digit = n%10
    map.set(digit,(map.get(digit) || 0)+1);
    n=Math.floor(n/10)
 }
 let sum = 0
 for(let [key,val] of map){
    sum+= (key *val)
 }
 return sum
};