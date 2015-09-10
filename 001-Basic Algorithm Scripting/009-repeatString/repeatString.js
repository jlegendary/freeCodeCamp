function repeat(str, num) {
  if (num<=0) {
     return '';
  } else {
    var repeatString = str;
    var numOfRepeat = 1;
    while (numOfRepeat<num) {
      str = str + repeatString;
      numOfRepeat++;
    } 
  }
  return str;
}

repeat('abc', 3);

