function squareDigits(num) {
  let result = num
    .toString()
    .split("")
    .map((value) => value * value)
    .join("");
    return +result
}
console.log(squareDigits(2112));
