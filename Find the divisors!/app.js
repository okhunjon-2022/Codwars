function divisors(integer) {
  let disiors = [];
  for (let i = 2; i < integer; i++) {
    if (integer % i  === 0) {
     disiors.push(i);
    }
  }
  if (disiors.length == 0) {
    return `${integer} is prime`;
  } else {
    return disiors;
  }
}
console.log(divisors(4));
