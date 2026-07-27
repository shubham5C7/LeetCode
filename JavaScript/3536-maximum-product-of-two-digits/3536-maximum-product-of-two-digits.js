/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let arrs = n.toString().split("");
    let maxi1=-Infinity,maxi2=-Infinity
    for(let num of arrs){
            let a =Number(num)
        if(a > maxi1){
            maxi2 = maxi1;
            maxi1 = a
        }else if(a > maxi2){
            maxi2 = a
        }
    }
    return maxi1*maxi2
};