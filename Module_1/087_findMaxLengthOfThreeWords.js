/*
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
*/

function findMaxLengthOfThreeWords(word1, word2, word3) {
  var first_max = Math.max (word1.length, word2.length);
  var second_max = Math.max (first_max, word3.length);
  return second_max;

}
