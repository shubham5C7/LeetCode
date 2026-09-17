/**
 * @param {number[]} nums
 * @return {boolean}
 */
var predictTheWinner = function(nums) {
let left = 0,right = nums.length-1;

const play = function(left,right,p1,p2,turn){
if(left > right){
    return p1>=p2
}

if(turn === 1){
  let leftResult = play(left+1,right,p1+nums[left],p2,2)

  let rightResult =  play(left,right-1,p1+nums[right],p2,2)

  return leftResult || rightResult
}else{
     let leftResult =  play(left+1,right,p1,p2+nums[left],1)

   let rightResult = play(left,right-1,p1,p2+nums[right],1)
    return leftResult && rightResult
}
}
return play(left,right,0,0,1);
};
