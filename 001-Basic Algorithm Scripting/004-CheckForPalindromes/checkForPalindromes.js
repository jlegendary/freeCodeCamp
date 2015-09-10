function palindrome(str) {
  var lowercaseString = str.toLowerCase().replace(/\W|\s/g,'');
  var checkAgainstStr = lowercaseString.split('').reverse().join('');
  
  if (lowercaseString == checkAgainstStr) {
     console.log("Palindrome");
     return true;
  } else {
     console.log("Not palindrome");
     return false;
  }
}

palindrome("eye");

