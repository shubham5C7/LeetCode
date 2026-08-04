/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverse = (s,left,right) =>{
    while(left < right){
        [s[left],s[right]] = [s[right],s[left]]
        left++
        right--
    }
}

var reverseStr = function(s, k) {
    let arr =s.split("")
    let n = arr.length

     
    for(let i=0;i<n;i+=2*k){
        reverse(arr,i,Math.min(i+k-1,n-1))
    }
    return arr.join("")
};