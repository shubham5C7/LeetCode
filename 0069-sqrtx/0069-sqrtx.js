/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x<2) return x;
    let ans =2* Math.floor(Math.sqrt(Math.floor(x/4)));
    ans++;
    if(ans * ans > x){
        return ans -1;
    }
    return ans;
};