/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let dp = new Array(n+1).fill(-1);

    function helper(i){
     if(n === 0) return 0;
     if(n===1) return 1;

     dp[0]=0;
     dp[1]=1;

     if(dp[i] !== -1){
        return dp[i]
     }
    dp[i] = helper(i-1)+helper(i-2);
    return dp[i]

    }
    return helper(n)
};