/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let str = s.split("");
    let mpp= new Map();

    for(let ch of str){
        mpp.set(ch,(mpp.get(ch) || 0)+1);
    }

    let arr = [...mpp.entries()];

    arr.sort((a,b)=>b[1]-a[1]);

     let res = ""
     for(let [key,val] of arr){
         for(let i=0;i<val;i++){
            res+=key
         }
     }
     return res
};