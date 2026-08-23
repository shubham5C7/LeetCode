/**
 * @param {string} s
 * @return {string}
 */
var trimTrailingVowels = function(s) {
    let vowels = ["a","e","i","o","u"]
    for(let i=s.length-1;i>=0;i--){
        if(vowels.includes(s[i])){
           s = s.slice(0, -1);
        }else{
            break
        }

    }
    return s
};