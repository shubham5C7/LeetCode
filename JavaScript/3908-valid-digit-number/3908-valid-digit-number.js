/**
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var validDigit = function(n, x) {
    let arr = n.toString().split("");
    if(Number(arr[0])=== x){
        return false
    }
   for(let i=1;i<arr.length;i++){
    let num = Number(arr[i])
    if(num ===x){
        return true
    }
   }
   return false
};