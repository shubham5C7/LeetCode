/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 *//**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
    let arr = [];

    for (let i = left; i <= right; i++) {
        let num = i;
        let temp = num;
        let isValid = true;

        while (temp > 0) {
            let digit = temp % 10;

            if (digit === 0 || num % digit !== 0) {
                isValid = false;
                break;
            }

            temp = Math.floor(temp / 10);
        }

        if (isValid) {
            arr.push(num);
        }
    }

    return arr;
};