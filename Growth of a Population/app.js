// function findNextSquare(sq) {
//   // Return the next square if sq is a perfect square, -1 otherwise

//   if (Math.sqrt(sq)%1 ===0) {
//     return (Math.sqrt(sq)+1)*(Math.sqrt(sq)+1)
//   } else {
//     return -1;
//   }
// }
// console.log(findNextSquare(121));

// function narcissistic(value) {
//   // Code me to return true or false
//    let res = value.toString().length

//    return value.toString().split("").map((value)=>value**res).reduce((a,b)=>a+b,0)

// }
// console.log(narcissistic(10));

// function lovefunc(flower1, flower2) {
//   // moment of truth
//   if ((flower1 % 2 !== 0 && flower2 % 2 === 0) || (flower1 % 2 === 0 && flower2 % 2 !== 0)){
//     return true;
//   }else if(flower1% 2 ===0 && flower2 % 2 ===0 || flower1%2 !==0 && flower2 % 2 !==0 ){
//     return false
//   }
// }
// console.log(lovefunc(1, 1));

// function areYouPlayingBanjo(name) {
//   // Implement me
//   if(name[0]==="R" || name[0]=== "r"){
//     return name + " plays banjo"
//   }else {
//     return name + " does not play banjo"
//   }
// }
// console.log(areYouPlayingBanjo("lingo"));

// function countPositivesSumNegatives(input) {
//   // your code here
//   let positive = [];
//   let negative=[]
//   input.forEach((element, index) => {
//     if (element > 0) {
//       positive++;
//     }else if(element<0){
//       negative.push(element)
//     }
//   });
//   let sumNeg=negative.reduce((a,b)=>a+b,0)
//   let result =[]
//   if(input===null){
//     return []
//   }

//   return result.concat(positive,sumNeg);
// }
// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );

// function trim(str, size) {
//   return str.slice(0,size-3).padEnd(14,".")
// }
// // console.log(trim("Creating kata is fun", 14));
// console.log(trim("Creating kata is fun",14));

function whatday(num) {
  if (num === 1) {
    return "Sunday";
  } else if (num === 2) {
    return "Monday";
  } else if (num === 3) {
    return "Tuesday";
  } else if (num === 4) {
    return "Wednesday";
  } else if (num === 5) {
    return "Thursday";
  } else if (num === 6) {
    return "Friday";
  } else if (num === 7) {
    return "Saturday";
  } else {
    return "Wrong, please enter a number between 1 and 7";
  }
}

// console.log(whatday(1));

function formatNumber(number, template) {
  let res = number.toString();
  template.replace("#", 1);
  return template;
}
// console.log(formatNumber(79052479075, "+# (###) ### ##-##")); //=> "+7 (905) 247 90-75"

function amountOfPages(summary) {
  let car = summary.toString().length;
  let res = [];
  for (let i = 1; i <= summary; i++) {
    res.push(i);
  }
  let arr = res.join("").slice(0, summary);
  return +arr.slice(-car);
}
// console.log(amountOfPages(10));

function arg(...a) {
  return a.length;
}
// console.log(arg('A', 'B', 'C'));
function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  let AverageValue =
    classPoints.reduce((a, b) => a + b, 0) / classPoints.length;
  return yourPoints > AverageValue ? true : false;
}
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 55));
function feast(beast, dish) {
  //your function here
  if (beast[0].toLowerCase() === dish[0].toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
// console.log(feast("chickadee", "Chocolate cake"));

function reindeers(presents) {
  // TODO

  let Santa = 2;
  let perReindeer = presents / 30;
  let res = Math.ceil(perReindeer + Santa);
  if (res <= 8) {
    return res;
  }else{
    return `throws an error`
  }
}
console.log(reindeers(180));
