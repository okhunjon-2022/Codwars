function isSquare(n) {
    if(n % Math.sqrt(n) === 0 || n===0){
        return true
    }else{
       return false
    }
}

console.log(isSquare(0));