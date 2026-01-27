/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
let cnt=0;
let maj=0;
for(let num of nums){
    if(cnt===0){
        maj=num;
        cnt=1;
    }else if( maj === num){
        cnt++;
    }else{
        cnt--
    }
}
return maj;
};