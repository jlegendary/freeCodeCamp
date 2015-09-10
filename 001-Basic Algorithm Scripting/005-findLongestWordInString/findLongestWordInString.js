function findLongestWord(str) {
  str = str.split(' ');
  var longestWord = ' ';
  
  for (var i in str) {
    if (str[i].length>=longestWord.length){
      longestWord = str[i];
    }
  }
  return longestWord.length;
}

findLongestWord('The quick brown fox jumped over the lazy dog');

