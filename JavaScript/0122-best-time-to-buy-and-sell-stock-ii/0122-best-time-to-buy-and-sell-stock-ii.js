/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxi = 0;
    for(let i=0;i<prices.length;i++){
        if(prices[i]>prices[i-1]){
            maxi+=prices[i]-prices[i-1]
        }
    }
    return maxi
};