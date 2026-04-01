/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
if(digits.length === 0) return;
    let map ={
    '2':"abc",
    '3':"def",
    '4':"ghi",
    '5':"jkl",
    '6':"mno",
    '7':"pqrs",
    '8':"tuv",
    '9':"wxyz"
};
let res=[];

function backtracking(idx,path){
if(digits.length === path.length){
    res.push(path);
    return;
}
let letters=map[digits[idx]];
for(let ch of letters){
    backtracking(idx+1,path+ch)
}
}
backtracking(0,"")
return res;
};