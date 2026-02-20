/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows===1) return s;
    let row= new Array(numRows).fill("");
    let currows=0;
    let dir=-1;

    for(let ch of s){
        row[currows]+=ch;

        if(currows === 0 || currows === numRows-1){
            dir*=-1;
        }
        currows+=dir;
    }
    return row.join("")
};