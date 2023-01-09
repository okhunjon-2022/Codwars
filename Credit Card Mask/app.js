// return masked string
function maskify(cc) {
return cc.slice(-4).padStart(cc.length,'#')
}
console.log(maskify('12564898857874546'));
