function multiplesOf3and5(number) {
  var result = 0;
  for (var i = 0; i<number; i++) {
    if((i%3==0 )||(i%5==0)){
      result += i;
    }
  }
  return result;
}

multiplesOf3and5(1000);
