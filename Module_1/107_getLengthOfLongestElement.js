/*
Write a function called "getLengthOfLongestElement".

Given an array, "getLengthOfLongestElement" returns the length of the longest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
*/

function getLengthOfLongestElement(arr) {
  var long = 0;
  var longest = 0;
    for (var k = 0; k < arr.length; k++) {
      if (arr[k].length > longest) {
        long = arr[k];
        longest = arr[k].length;
      }
    }
  return longest;
}
