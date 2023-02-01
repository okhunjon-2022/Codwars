function countPositivesSumNegatives(input) {
  // your code here
  let notNull = 0;
  let minus = [];
  let resIndex = notNull;
  input.filter((value, index) => {
    if (value > 0) {
      notNull++;
    } else if (value < 0) {
      return minus.push(value);
    }
  });
  return [notNull,minus.reduce((a,b)=>a+b,0)];
}
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
