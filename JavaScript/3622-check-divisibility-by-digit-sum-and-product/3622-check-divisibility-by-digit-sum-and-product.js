/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let num = n
    let sum = 0,prod = 1;
    while(num!=0){
        let digit = num%10
        sum+=digit
        prod*=digit
        num=Math.floor(num/10)
    }
    return   n % (sum+prod) === 0 ? true : false
};