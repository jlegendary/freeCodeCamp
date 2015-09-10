function bouncer(arr) {  
  var removeFalsyValues = arr.filter(falsyValues);
     return removeFalsyValues;

  function falsyValues(value){
    return Boolean(value);
  }
}


bouncer([7, 'ate', '', false, 9]);  