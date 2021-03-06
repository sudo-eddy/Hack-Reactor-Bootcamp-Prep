/*
Write a function called "getSmallestElementAtProperty".

Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
*/

function getSmallestElementAtProperty(obj, key) {
  var min;
  if (
  typeof obj[key] !== 'undefined' &&
  Array.isArray(obj[key]) &&
  obj[key].length > 0) {
    min = Math.min(...obj[key]);
  }
  return min;
}
