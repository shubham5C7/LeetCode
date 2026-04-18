/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if(n<1) return false;
    let primes =[ 2,3,5];
    for(let p of primes){
        while(n % p===0){
            n = Math.floor(n/p);
        }
    }
    return n === 1;
};