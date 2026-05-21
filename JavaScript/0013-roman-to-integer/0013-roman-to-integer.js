/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let sum = 0;
 let map = new Map([
    ["I",1],
    ["V",5],
    ["X",10],
    ["L",50],
    ["C",100],
    ["D",500],
    ["M",1000]
]);

    for(let i=0;i<s.length;i++){
        let curr = map.get(s[i])
        let next = map.get(s[i+1]);

        if(curr && curr < next){
           sum-=curr
        }else{
            sum+=curr
        }
    }
    return sum
};