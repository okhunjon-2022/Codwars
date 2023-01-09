function stray(numbers) {
  let res = numbers.slice(0, 3);
  let count = 0;
  let odd = res.forEach((element) => {
    if (element % 2 !== 0) {
     return count++;
    }
  });
  
  return count;
}
console.log(stray([17, 17, 3, 17, 17, 17, 17]));
