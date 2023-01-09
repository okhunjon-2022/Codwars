function vowelIndices(word){
  //your code here
  let str = 'aeiouy'
  let arr = []
  let res = word.toLowerCase().split("")
  res.forEach((element,index) => {
    if(str.indexOf(element) !==-1){
      arr.push(index + 1)
    }
  });
  

  return arr
 
}
console.log((vowelIndices("apple")));