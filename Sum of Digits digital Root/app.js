function digitalRoot(n) {
  while (n > 9) {
    const newN = n
      .toString()
      .split("")
      .map(((val) => parseInt(val))).reduce((a, b) => a + b);
    n = newN;
  }
  return n;
}
console.log(digitalRoot(259418));
