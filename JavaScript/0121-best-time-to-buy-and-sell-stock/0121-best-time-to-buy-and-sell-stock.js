/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n=prices.length;
    let maxi=0;
    let minidiff = Infinity;
    for(let i=0;i<n;i++){
       if(prices[i] < minidiff){
       minidiff=prices[i]
       }
       maxi=Math.max(maxi,prices[i]-minidiff)
    }
    return maxi
};