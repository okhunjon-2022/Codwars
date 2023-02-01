var number = function (busStops) {
  // Good Luck!
  let odd = [];
  let even = [];
  let res = busStops.flat(Infinity).filter((value, index) => {
    if (index % 2 === 0) {
      return odd.push(value);
    }
  });
  let num = busStops.flat(Infinity).filter((value, index) => {
    if (index % 2 !== 0) {
      return even.push(value);
    }
  });
  let result = odd.reduce((a, b) => a + b, 0);
  let result1 = even.reduce((a, b) => a + b, 0);

  return result-result1;
};
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
);
