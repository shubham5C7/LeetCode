/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let mat=new Array(n).fill(0).map(()=>new Array(n).fill(0));

    let left=0,right=n-1;
    let top=0,bottom=n-1;
    let num=1;

    while(left<=right && top<=bottom){
        for(let i=left;i<=right;i++){
            mat[top][i]=num++;
        }
        top++;

        for(let i=top;i<=bottom;i++){
            mat[i][right]=num++;
        }
        right--;

        if(top <= bottom){
            for(let i=right;i>=left;i--){
                mat[bottom][i]=num++;
            }
            bottom--;
        }
        if(left<=right){
            for(let i=bottom;i>=top;i--){
            mat[i][left]=num++
            }
            left++;
        }
    }
    return mat
};