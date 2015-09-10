function largestOfFour(arr) {
  var largestOfFourArr = [];
  
  for (var i in arr){
    var largestInArray = arr[i][0];
    for(var j in arr[i]){
      if (arr[i][j] > largestInArray){
        largestInArray = arr[i][j];
        largestOfFourArr[i] = largestInArray;
      } else {
        largestOfFourArr[i] = largestInArray;
      }
    }
  }
  return largestOfFourArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

