// input: names - unsorted array
// output: sorted array
sortme = function( names ){
  return names.sort((a,b)=>a.localeCompare(b))
}
console.log(sortme(['one', 'two', 'three' ]));