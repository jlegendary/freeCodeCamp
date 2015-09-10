function end(str, target) {
  var stringLength = str.length;
  var targetLength = target.length;
  var differenceLength = stringLength-targetLength;
  
  if(str.substr(differenceLength) == target){
    return true;
  } else {
    return false;
  }
}

end('Bastian', 'n');

