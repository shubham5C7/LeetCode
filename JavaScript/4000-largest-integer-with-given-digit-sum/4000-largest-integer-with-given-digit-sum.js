/**
 * @param {number} n
 * @param {number} s
 * @return {number}
 */
var largestInteger = function(n, s) {
     for (let i = 10**n - 1; i >= 0; i--) {
        let num = i;
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if (sum === s) {
            return i;
        }
    }
    return -1;
};