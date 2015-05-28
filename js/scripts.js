function countWords(string) {
  var array = string.split(" ");
  var hash = {};
  var retArray = []
  var retString = "";
  array.forEach(function(word, index) {
    if (word in hash) {
      hash[word] += 1;
    }
    else {
      hash[word] = 1;
    }
  });
  for (var value in hash) {
    retArray.push([hash[value], value])
    //retString += value + " " + hash[value] + " ";
  };
  retArray.sort().reverse();
  //return retArray;
  retArray.forEach(function(element, index) {
    retString += element[1] + " " + element[0] + ", ";
  })
  debugger
  return retString;
}
