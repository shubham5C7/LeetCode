/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let n=intervals.length;
    if(n===1) return intervals;
     intervals.sort((a,b)=>a[0]-b[0])
    let res=[];
    res.push(intervals[0]);

    for(let i=1;i<n;i++){
        let curr=res[res.length-1];
        let next=intervals[i];
        if(curr[1] >= next[0]){
            curr[1] = Math.max(curr[1],next[1]);
        }else{
            res.push(next)
        }
    }
    return res;
};