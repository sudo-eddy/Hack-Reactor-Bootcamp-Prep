/*
Write a function called "findSmallestNumberAmongMixedElements".

Given an array of mixed elements, "findSmallestNumberAmongMixedElements" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
*/

function findSmallestNumberAmongMixedElements(arr) {
  var smallest = 0;
  if (arr.length > 0) {
    arr.forEach(function(each) {
    if (typeof each === 'number') {
      if (smallest) {
        if (each < smallest) smallest = each;
      } else {
        smallest = each;
      }
    }
  });
  }
  return smallest;
}
