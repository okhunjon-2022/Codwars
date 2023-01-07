function maxTriSum(numbers){
    //your code here
    let result = numbers.filter((value,index,array)=>{
        return array.indexOf(value) === index
    })
    return result.sort((a,b)=>b-a).slice(0,3).reduce((a,b)=>a+b,0)
  }
  console.log(maxTriSum([2,9,13,10,5,2,9,5]));