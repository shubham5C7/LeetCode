/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let n=intervals.length;
    if(n=== 0)   return [];

intervals.sort((a,b)=>a[0]-b[0])

    let res=[];
    res.push(intervals[0]);

    for(let i=1;i<intervals.length;i++){
        let last = res[res.length-1];
        let curr = intervals[i]

        if(curr[0] <= last[1]){
            last[1] = Math.max(curr[1],last[1])
        }else{
            res.push(curr)
        }
    }
    return res;
};