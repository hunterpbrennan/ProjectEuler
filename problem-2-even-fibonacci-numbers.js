function fiboEvenSum(n) {
  var previousTerm = 1
  var result = 0;
  for (var term = 1; term<n;){
    let temp = term
    term = term + previousTerm
    previousTerm = temp
    if(term%2 == 0){
      result += term
    }
  }
  return result;
}

fiboEvenSum(10);
