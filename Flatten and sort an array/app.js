"use strict";

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.flat().sort((a,b)=>a-b)
}

console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]));