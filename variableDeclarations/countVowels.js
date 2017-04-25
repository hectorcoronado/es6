/////////
// ES5 //
/////////
function count(string) {
  var characters = ['a', 'e', 'i', 'o', 'u'],
      number = 0;

  for (var i = 0; i < string.length; i++) {
    if (characters.includes(string[i])) {
      ++number;
    }
  }

  return number;
}

/////////
// ES6 //
/////////
// 'const' and 'let' make our code more intuitively readable
function count(string) {
  const characters = ['a', 'e', 'i', 'o', 'u']; // this won't change, ever
  let number = 0; // this will change, maybe frequently

  for (var i = 0; i < string.length; i++) {
    if (characters.includes(string[i])) {
      ++number;
    }
  }

  return number;
}
