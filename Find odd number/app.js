function stray(numbers) {
  let odd = [];
  let res = numbers.forEach((element) => {
    if (element % 2 !== 0) {
      odd.push(element);
    }
  });
  let arr=odd.slice(0,3);
  return arr.length
}
console.log(stray([17, 17, 4, 6, 3, 17, 17, 17, 17]));
