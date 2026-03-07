/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let mpp = new Map();

    for(let ch of s){
        mpp.set(ch,(mpp.get(ch) || 0) + 1);
    }

    for(let ch of t){
        if(!mpp.has(ch) || mpp.get(ch) === 0){
            return ch
        }
        mpp.set(ch,mpp.get(ch) - 1)
    }

};