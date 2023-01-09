function findShort(s) {
  let short = [];
  s.split(" ").forEach((element) => {
    return short.push(element);
  });
  return short.sort((a,b)=>a.length-b.length).slice(0,1).join().length
}
console.log(findShort("csccs wefwefwef wer rwe we"));
