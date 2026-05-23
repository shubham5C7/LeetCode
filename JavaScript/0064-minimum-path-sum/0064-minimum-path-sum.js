/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
        let m = grid.length;
    let n = grid[0].length;

    for(let j=1;j<n;j++){
        grid[0][j] += grid[0][j-1];
    }

    for(let i=1;i<m;i++){
           grid[i][0] += grid[i-1][0];
    }
  for(let j=1;j<n;j++){
       for(let i=1;i<m;i++){
        grid[i][j] += Math.min(grid[i][j-1],grid[i-1][j])
       }
  }
  return grid[m-1][n-1]
};