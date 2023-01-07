function sumOfMinimums(arr) {
  // your code here

  let total = arr.map((value) => {
    return (value.sort((a, b) => a - b).slice(0, 1));
  });

  let sum =total.flat().reduce((a,b)=>a+b,0)
  return (sum);
}
console.log(
  sumOfMinimums([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ])
);
