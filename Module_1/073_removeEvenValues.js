/*
Write a function called "removeEvenValues".

Given an object, "removeEvenValues" removes any properties whose values are even numbers.

Do this in place and return the original object, do not construct a cloned object that omits the properties.

Example:

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
*/

function removeEvenValues(obj) {
  for (let keyVal in obj) {
    if (obj[keyVal] % 2 === 0) {
      delete obj[keyVal];
    }
  }
  return obj;
}
