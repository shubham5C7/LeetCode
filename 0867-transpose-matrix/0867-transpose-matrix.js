/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
       let n=matrix.length;
    let m=matrix[0].length;
    let res=[];
    for(let j=0;j<m;j++){
        let ans=[];
       for(let i=0;i<n;i++) {
        ans.push(matrix[i][j])
        }
        res.push(ans)
    }
    return res;
};