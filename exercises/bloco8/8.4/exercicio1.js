const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  const array = arrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
  });
  
  console.log(array);
  return array;
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);