/**
 * @param {number[]} nums
 * @return {number}
 */
const signFunc=(x)=>{
  if(x > 0) return 1;
  if(x < 0) return -1

  return 0;
}

var arraySign = function(nums) {
       let multi=1;
    for(let num of nums){
        multi*=num
    }
    return signFunc(multi);
};