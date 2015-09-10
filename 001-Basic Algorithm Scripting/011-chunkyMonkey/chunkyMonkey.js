function chunk(arr, size) {
  var count = 0;
  var splitArr = [];
  var newArr = [];
  
  while(count<arr.length) {
    splitArr = arr.slice(count, count+size);
    newArr.push(splitArr);
    count+=size;
    }
    return newArr;
}

chunk(['a', 'b', 'c', 'd'], 2);

