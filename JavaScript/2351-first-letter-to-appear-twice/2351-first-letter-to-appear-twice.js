/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    let st = new Set();

    for(let ch of s){
        if(st.has(ch)){
            return ch
        }
        st.add(ch)
    }
};