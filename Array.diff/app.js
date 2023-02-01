function arrayDiff(a, b) {
  return a.filter((v) => {
   return b.indexOf(v)===-1
  });
}

console.log(arrayDiff([1, 2, 3], [1, 2]));
