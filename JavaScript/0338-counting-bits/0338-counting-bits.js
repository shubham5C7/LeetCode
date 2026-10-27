/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let res = new Array(n + 1);

    for (let i = 0; i <= n; i++) {
        let num = i;
        let cnt = 0;

        while (num > 0) {
            num = num & (num - 1);
            cnt++;
        }

        res[i] = cnt;
    }

    return res;
};
