const findMaxNumber = require('./find-max-number');

// test('Finding the maximum number in an array', () => {
//   expect(findMaxNumber([1, 5, 3, 9, 2])).toBe(9);
//   expect(findMaxNumber([0, -1, -5, 2])).toBe(2);
//   expect(findMaxNumber([10, 10, 10, 10])).toBe(10);
// });
test('Empty array', () => {
  expect(findMaxNumber([])).toBeUndefined(); // Assuming the function returns undefined for an empty array
});

test('Array with one element', () => {
  expect(findMaxNumber([42])).toBe(42); // Testing when there's only one element in the array
});

test('Array with all negative numbers', () => {
  expect(findMaxNumber([-5, -10, -3, -7])).toBe(-3); // Checking for the maximum among negative numbers
});

test('Array with decimal numbers', () => {
  expect(findMaxNumber([2.5, 1.1, 3.7, 2.9])).toBeCloseTo(3.7); // Testing for decimal numbers in the array
});

test('Array with a mix of integers and decimal numbers', () => {
  expect(findMaxNumber([2, 4.5, 7, 3.2])).toBeCloseTo(7); // Ensuring it handles a mix of integers and decimals
});

test('Array with NaN values', () => {
  expect(findMaxNumber([NaN, 5, 8])).toBe(8); // Verifying behavior with NaN values in the array
});

test('Array with undefined/null values', () => {
  expect(findMaxNumber([undefined, null, 0, 3])).toBe(3); // Checking if it ignores undefined and null values
});

test('Array with a large number of elements', () => {
  const largeArray = Array.from({ length: 10000 }, (_, index) => index + 1);
  expect(findMaxNumber(largeArray)).toBe(10000); // Testing performance with a large array
});
