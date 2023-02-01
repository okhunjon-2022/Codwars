function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  let res = 0
   arrayOfSheep.map((value)=>{
    if (value ===true) {
      return res++
    }
  })
  return res
}
console.log(countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true ]));