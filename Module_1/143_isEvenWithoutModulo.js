/*
Write a function called "isEvenWithoutModulo".

Given a number, "isEvenWithoutModulo" returns whether it is even.

Notes:
* It does so without using the modulo operator (%).
* It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true
*/

function isEvenWithoutModulo(num) {
  if (isNaN(num1)) return NaN;

  var mod = 0;
  if (Math.abs(num1) > 0) {
    var d = Math.floor(Math.abs(num1) / Math.abs(num2));
    mod = Math.abs(num1) - Math.abs(num2) * d;
  }

  if (num1 < 0) mod = -1 * mod;

  return mod;
}

function isEvenWithoutModulo(num) {
  if (num === 0) return true;
  if (modulo(Math.abs(num), 2) === 0) return true;
  return false;
}
