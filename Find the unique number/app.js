function findUniq(arr) {
  // do magic
  return arr.filter((value,index,array)=>{
    return array.indexOf(value) === value
  })
}

console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
