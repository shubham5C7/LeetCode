/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack=[];
    let map={
        "(":")",
        "{":"}",
        "[":"]"
    }
    for(let ch of s){
        if(map[ch]){
            stack.push(ch);
        }else{
            let top = stack.pop();

            if(map[top] !== ch){
                return false;
            }
        }
    }
    return stack.length===0;
};