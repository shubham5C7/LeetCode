/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    let mini=Infinity;
    let res=[];
    arr.sort((a,b)=>a-b);
    for(let i=0;i<arr.length;i++){
        let diff=arr[i+1]-arr[i]

        if(diff < mini){
            mini=diff;
            res=[[arr[i],arr[i+1]]]
        }else if(diff===mini){
            res.push([arr[i],arr[i+1]])
        }
    }
    return res;
};