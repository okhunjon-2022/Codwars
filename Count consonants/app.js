function consonantCount(str) {
    // ...
    let show=str.split('')
    let count = 0
    show.forEach(element => {
        if(element !== "a" && element !=="e" && element !=="i" && element !=="o" && element !=="u"  && element !==" "){
            return count++
        }
    });
    return count
  }
  console.log(consonantCount('hello worlod'));