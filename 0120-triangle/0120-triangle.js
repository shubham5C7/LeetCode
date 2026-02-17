/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let n = triangle.length;
    // Start from second-last row
    for (let r = n - 2; r >= 0; r--) {
        for (let c = 0; c < triangle[r].length; c++) {
            // Make sure to always access valid indices in the row below
            triangle[r][c] = triangle[r][c] + Math.min(
                triangle[r + 1][c],
                triangle[r + 1][c + 1]
            );
        }
    }
    return triangle[0][0];
};