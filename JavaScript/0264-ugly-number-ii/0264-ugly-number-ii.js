/**
 * @param {number} n
 * @return {number}
 */
 /* 
|1|2| | | | | | | | |

i2=0,i3=0,i5=0
n2=2,n3=3.n5=5

i=1
 nu = min(2,3,5)  nu=2

 res[1]=nu--> 2

 if(nu === n2){  2===2
    i2=i2+1  ---> i2=1
    n2= res[i2]*2  ->  n2= 2 * 2  => 4
 }
 */
var nthUglyNumber = function(n) {
let res = new Array(n);
res[0] = 1;
let i2=0,i3=0,i5=0;
let n2=2,n3=3,n5=5;

for(let i=1;i<n;i++){
   let nu =Math.min(n2,n3,n5);

    res[i]=nu;
    if(nu === n2){
        i2=i2+1;
        n2=res[i2]*2
    }
    if(nu === n3){
     i3 = i3+1;
     n3 = res[i3]*3
    }
    if(nu === n5){
        i5=i5+1;
        n5=res[i5]*5;
    }
}
return res[n-1]
};