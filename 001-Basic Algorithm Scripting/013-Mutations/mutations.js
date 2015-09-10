function mutation(arr) {
  firstArray = [];
  firstArray[0] = arr[0].toLowerCase();
  firstArray[1] = arr[1].toLowerCase();

  var secondArray = [];
  var numOfLetters = firstArray[1].split('').length;
  for (var i=0; i<numOfLetters; i++) {
    secondArray.push(firstArray[0].indexOf(firstArray[1][i]));
  }
  
  if (secondArray.indexOf(-1) === -1) {
    return true;
  } else {
    return false;
  }
}

mutation(['hello', 'hey']);
mutation(['hello', 'Hello'])