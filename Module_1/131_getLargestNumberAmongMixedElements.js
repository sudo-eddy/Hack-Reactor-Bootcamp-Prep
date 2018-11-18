/*
Write a function called "getLargestNumberAmongMixedElements".

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

function getLargestNumberAmongMixedElements(arr) {
  var largest = 0;
  if (arr.length > 0) {
    arr.forEach(function(each){
      if (typeof each === 'number') {
        if (largest) {
          if (each > largest) largest = each;
        } else {
          largest = each;
        }
      }
    })
  }
  return largest;
}
