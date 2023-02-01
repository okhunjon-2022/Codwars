function findOutlier(integers) {
  //your code here
  let odd = integers.filter((e) => e % 2 !== 0);
  let even = integers.filter((e) => e % 2 === 0);
  return odd.length == 1 ? odd[0] : even[0];
}
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
