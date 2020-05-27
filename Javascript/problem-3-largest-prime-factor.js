function largestPrimeFactor(number) {
  var largest = 0;
  var factors = [];
  for(let factor = 2; factor<number;)
  {
    if (number%factor ==0)
    {
      number = number/factor
    } else {
      factor+=1
    }
  }
  return number
}

largestPrimeFactor(13195);
