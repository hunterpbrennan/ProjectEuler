function largestPalindromeProduct(n) {
  var palindrome = 0;
  var palindromeList = [];
  for(var factor1=Math.pow(10,n)-1;factor1>Math.pow(10,n-1);factor1--)
  {
    for(var factor2=Math.pow(10,n)-1;factor2>Math.pow(10,n-1);factor2--)
    {
      var palindromeString = (factor1*factor2).toString()
      var isPalindrome = true
      for(var i = 0; i<palindromeString.length/2;i++)
      {
        if(palindromeString[i]!=palindromeString[palindromeString.length-i-1])
        {
          isPalindrome = false
          break
        }
      }
      if (isPalindrome)
      {
        palindromeList.push(factor1*factor2)
      }
    }
  }
  return Math.max(...palindromeList)
}

largestPalindromeProduct(3);
