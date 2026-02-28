/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
/* 
[1,3,5,7]
[10,11,16,20]
[23,30,34,60]
n= 3
m = 4

row=0, col=3  target =13
if(0<3 && 4 >= 0){
    if(mat[row][col]=== target  )
    7 === 13 -> false
    7 > 13  --> false 
    row++ row =1

    1<3 && 3>=0{
        20 > 10 col--  col=2
    }
}
*/

var searchMatrix = function(matrix, target) {
  let rows = matrix.length;
    let cols = matrix[0].length;

    let row=0,col=cols-1;
    while(row< rows && col>=0){
     if(matrix[row][col] === target) return true;
     else if(matrix[row][col] > target) col--;
     else row++
    }
    return false;
};