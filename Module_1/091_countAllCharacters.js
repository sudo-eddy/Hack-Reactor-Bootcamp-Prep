/*
Write a function called "countAllCharacters".

Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.

Notes:
* If given an empty string, countAllCharacters should return an empty object.

var output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
*/

function countAllCharacters(str) {
  var anyLetter = {};
  if (str !== '') {
    var arr = str.slice();
    for (var i = 0; i < arr.length; i++) {
      if (typeof anyLetter[arr[i]] != 'undefined') {
        anyLetter[arr[i]] += 1;
      } else {
        anyLetter[arr[i]] = 1;
      }
    }
  }
  return anyLetter;
}
