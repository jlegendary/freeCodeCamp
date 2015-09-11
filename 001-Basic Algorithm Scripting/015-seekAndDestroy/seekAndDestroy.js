function destroyer(arr) {

  var removeElement = [];
  for(var i=1; i<arguments.length; i++){
    removeElement.push(arguments[i]);
  }

  var notRemoved = arguments[0].filter(function(element, index){
    var toReturn = true;

    for(var i = 0; i < removeElement.length; i++){
      if (element === removeElement[i]){ 
        toReturn = false;
      }
    }
    return toReturn;

  });
  return notRemoved;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);  