function getEvenNumbers(numbersArray) {
  let result = [];
  return numbersArray.filter((element) => {
    if (element % 2 === 0) {
      console.log(element);
      result.push(element);
    }
  });
}

console.log(
  getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 19, 18])
);
