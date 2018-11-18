/*
Write a function called "getLastElementOfProperty".

Given an object and a key, "getLastElementOfProperty" returns the last element of an array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* if the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5
*/

function getLastElementOfProperty(obj, key) {
    var elem;
  if (
    typeof obj[key] != 'undefined' &&
    Array.isArray(obj[key]) &&
    obj[key].length > 0
  ) {
    elem = obj[key][obj[key].length - 1];
  }
  return elem;
}
