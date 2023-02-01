function summation(num) {
  let res = []
  for (let i = 1; i <= num; i++) {
    res.push(i)
    
  }

  return res.reduce((a,b)=>a+b,0)
}
console.log(summation(10));