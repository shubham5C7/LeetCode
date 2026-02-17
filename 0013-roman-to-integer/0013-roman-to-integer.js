/**
 * @param {string} 
 * @return {number}
 */
var romanToInt = function(s) {
    let sum=0;
    let mpp = new Map([
        ["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000]
    ]);
  for(let i=0;i<s.length;i++){
    let curr=mpp.get(s[i]);
    let next=mpp.get(s[i+1]);

    if(next && curr < next){
        sum-=curr
    }else{
        sum+=curr
    }
  }
  return sum
};