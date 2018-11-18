/*
Write a function called "findShortestOfOfThreeWords".

Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfOfThreeWords(word1, word2, word3) {
  var shortest = arguments[0];
  for (let k = 0; k < arguments.length; k++) {
    if (shortest.length > arguments[k].length) {
     shortest = arguments[k];
    }
  }
  return shortest;
}
