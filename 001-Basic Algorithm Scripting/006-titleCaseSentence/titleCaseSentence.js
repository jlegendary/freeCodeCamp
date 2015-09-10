function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(' ');
  
  for (var i in str) {
    str[i] = str[i].charAt(0).toUpperCase()+str[i].substr(1);
  }
  str = str.join(' ');
  return str;
}

titleCase("I'm a little tea pot");

