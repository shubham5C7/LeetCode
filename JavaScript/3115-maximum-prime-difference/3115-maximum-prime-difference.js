/**
 * @param {number[]} nums
 * @return {number}
 */
 const isPrime=function(n){
 if(n<=1) return false
 if(n===2) return true
 if(n%2===0) return false

 for(let i=3;i*i<=n;i+=2){
    if(n%i===0){
        return false
    }
 } 
 return true
 }

var maximumPrimeDifference = function(nums) {
    let first = -1,last = -1
    for(let i=0;i<nums.length;i++){
     if(isPrime(nums[i])){
        if(first === -1){
            first = i
        }
        last = i
     }
    }
    return last - first
};