/**
 * @param {string} s
 * @return {string}
 */
 const reverse = function(str){
    str = str.split("")
    let left = 0,right =str.length-1;
    while(left < right){
        [str[left],str[right]] = [str[right],str[left]];
        left++
        right--
    }
    return str.join("")
 }
var reverseWords = function(s) {
    if(s.length === 0) return ""

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    s = s.split(" ")
    let Fcount = 0;
    let FirstWord = s[0];
    for(let i=0;i<FirstWord.length;i++){
        if(vowels.includes(FirstWord[i])){
            Fcount++
        }
    }

    for(let i=1;i<s.length;i++){
        let count=0;
        for(let j=0;j<s[i].length;j++){
              if(vowels.includes(s[i][j])){ 
                count++
              }
        }
        if(Fcount === count){
          s[i] = reverse(s[i])
        }
    }
    return s.join(" ")
};