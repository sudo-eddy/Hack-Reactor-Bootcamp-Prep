/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {
  var shortest = 0;
  if (arr.length > 0) {
    shortest = arr[0].length;
    arr.forEach(function(each) {
      if (each.length < shortest) shortest = each.length;
    });
  }
  return shortest;


}
