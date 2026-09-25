/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
let map = new Map()
 for(let num of strs){
  let str = num.split("").sort().join("")

  if(!map.has(str)){
    map.set(str,[])
  }

map.get(str).push(num)

 }
 return Array.from(map.values())
};