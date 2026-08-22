/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function(digits) {
    let res = []

    function backtrack(path){
     if(path.length === 3){
        let [i,j,k] = path;
      let num = digits[i]*100 + digits[j]*10+digits[k]

      if(digits[i] === 0) return;
      if(digits[k] % 2!== 0) return 

      res.push(num)
      return ;

     }
     for(let i=0;i<digits.length;i++){
        if (path.includes(i)) continue;
        path.push(i);

        backtrack(path)
        path.pop()
     }

    }
    backtrack([])
    
    return [...new Set(res)].sort((a, b) => a - b);
};