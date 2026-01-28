/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n=prices.length;
    let maxi=0;
    let mindiff=Infinity;
    for(let i=0;i<n;i++){
        if(prices[i] < mindiff){
            mindiff=prices[i];
        }
        maxi=Math.max(maxi,prices[i]-mindiff)
    }
    return maxi
};