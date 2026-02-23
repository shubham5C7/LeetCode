/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function(arr) {
    let n=arr.length;
    let maxLen=0;
    for(let i=1;i<n-1;i++){
        if(arr[i-1] < arr[i] && arr[i] > arr[i+1]){
            let l=i;
            let r=i;
            while( l>0 && arr[l-1] < arr[l]){
            l--;
            }
            while(r<n-1 && arr[r] > arr[r+1]){
                r++;
            }
        maxLen= Math.max(maxLen,r-l+1)
        }
    }
    return maxLen
};