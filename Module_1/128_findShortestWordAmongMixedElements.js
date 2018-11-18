/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/

function findShortestWordAmongMixedElements(arr) {
var shortest = '';
if (arr.length > 0) {
  arr.forEach(function(each) {
    if (typeof each === 'string') {
      if (shortest) {
        if (each.length < shortest.length) shortest = each;
      } else {
        shortest = each;
      }
    }
  })
}
return shortest;
}
