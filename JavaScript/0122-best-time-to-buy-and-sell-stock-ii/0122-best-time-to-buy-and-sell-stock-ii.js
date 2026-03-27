/**
 * @param {number[]} prices
 * @return {number}
 */
var 

maxProfit = function(prices) {
   let n=prices.length;
   let maxiProfite =0 ;
   for(let i=1;i<n;i++){
if(prices[i] > prices[i-1]){
    maxiProfite +=prices[i] - prices[i-1]
}
   }
   return maxiProfite
};