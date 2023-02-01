function smartSum(...a){
return a.flat(Infinity).reduce((a,b)=>a+b,0)

}
console.log(smartSum(1,2,[[3,4],5],6));