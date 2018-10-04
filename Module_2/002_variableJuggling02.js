// BEGIN ORIGINAL CODE -- DO NOT MODIFIY THIS CODE

var x = [1, 2, 3];
var y = [4, 5, 6];
var z = x;

z[2] = y[0];
z[1] = y[2];
y[1] = z[1];
x[0] = y[0];
x[2] = 1;

// END ORIGINAL CODE

/*
write this down if you have to, don't just run it in the terminal
REMEMBER z has to equal x at the end read more on arrays if you don't understand why this happens
*/

var answer = {
  finalValueOfX: [4,6,1], // FILL THIS IN
  finalValueOfY: [4,6,6], // FILL THIS IN
  finalValueOfZ: [4,6,1], // FILL THIS IN
};
