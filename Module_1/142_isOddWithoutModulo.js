/*
Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:
* It does so without using the modulo operator (%).
* It should work for negative numbers and zero.

var output = isOddWithoutModulo(17);
console.log(output); // --> t  // your code here
rue
*/
function modulo(num1, num2) {
  if (isNaN(num1)) return NaN;

  var mod = 0;
  if (Math.abs(num1) > 0) {
    var d = Math.floor(Math.abs(num1) / Math.abs(num2));
    mod = Math.abs(num1) - Math.abs(num2) * d;
  }

  if (num1 < 0) mod = -1 * mod;

  return mod;
}
function isOddWithoutModulo(num) {
  if (num === 0) return false;
  if (modulo(Math.abs(num), 2) !== 0) return true;
  return false;
}
