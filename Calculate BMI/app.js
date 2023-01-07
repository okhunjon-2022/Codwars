function bmi(weight, height) {
    const a = weight/height**2
    if(a<= 18.5){
        return "Underweight"
    }else if(a<=25.0){
        return "Normal"
    }else if(a<30.0){
        return "Overweight"
    }else{
        return "Obese"
    }
  }


  console.log(bmi(60,1.7));