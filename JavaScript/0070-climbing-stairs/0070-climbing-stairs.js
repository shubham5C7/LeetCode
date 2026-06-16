/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let dp = new Array(n+1).fill(-1);

    function helper(i){
    if(i === n) return 1;
    if(i>n) return 0;

    if(dp[i] !== -1) return dp[i]

    let pick = helper(i+1);
    let notpick = helper(i+2);

      dp[i] = pick + notpick

return dp[i]
    }
    return helper(0)
};