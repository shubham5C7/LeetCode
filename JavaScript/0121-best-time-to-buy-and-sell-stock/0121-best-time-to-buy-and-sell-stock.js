/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxi=0
    let minidiff=Infinity;
    for(let i=0;i<prices.length;i++){
        if(minidiff > prices[i]){
            minidiff = prices[i]
        }
        maxi=Math.max(prices[i]-minidiff,maxi)
    }
    return maxi
};