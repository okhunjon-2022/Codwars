const reverseSeq = n => {
    return n.sort((a,b)=>a-b).slice(-1)
  };



  console.log(reverseSeq([10,12,15,6,20,65]));