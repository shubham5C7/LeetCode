/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function(mat) {
let n=mat.length;

let res=0;
for(let i=0;i<n;i++){
    res+=mat[i][i]+mat[i][n-1-i]
}
    // If n is odd, subtract the middle element once (it was counted twice)
    if (n % 2 !== 0) {
        let mid = Math.floor(n / 2);
        res -= mat[mid][mid];
    }
return res;
};