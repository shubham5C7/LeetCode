/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    let res = [];

    for (let ch of words[0]) {
        let found = true;

        for (let i = 1; i < words.length; i++) {
            let index = words[i].indexOf(ch);

            if (index === -1) {
                found = false;
                break;
            }

            words[i] =
                words[i].slice(0, index) +
                words[i].slice(index + 1);
        }

        if (found) {
            res.push(ch);
        }
    }

    return res;
};