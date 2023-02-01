function getSum(a, b) {
  //Good luck!
  let res = [];
  for (let i = a; i <= b; i++) {
    res.push(i);
    console.log(i);
   
  }
  return res.reduce((a,b)=>a+b,0)
}
console.log(getSum(-5, 2));
