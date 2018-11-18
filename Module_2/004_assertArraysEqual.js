function assertArraysEqual (actual, expected, testName) {
  let checkLength = actual.length === expected.length;
  let checkItems = actual.every(function(item, i) {
    return item === expected[i];
  });
  if (checkLength && checkItems) {
    console.log('passed');
  } else {
    console.log('FAILED ['${testName}'] Expected "'${expected}'", but got "'${actual}'"');
  }
}
