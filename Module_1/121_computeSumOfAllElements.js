/*
Write a function called "computeSumOfAllElements".

Given an array of numbers, "computeSumOfAllElements" returns the sum of all the elements in the given array.

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
*/

function computeSumOfAllElements(arr) {
  if (arr.length > 0) {
    return arr.reduce(function (a, b) {
      return a + b;
    });
  } else return 0;

}
