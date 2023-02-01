function persistence(num) {
  //code me
  let res =num.toString().split("")
  return eval(res.join("*"))
}
console.log(persistence(999));

// let res = [1,2,6,5]
// console.log(eval(res.join("+")));
