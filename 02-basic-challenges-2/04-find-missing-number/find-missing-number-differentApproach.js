function findMissingNumber(numsArray) {
  const n = numsArray.length + 1;
  const sumOfAllArrayItems = (n * (n + 1)) / 2;
  let remaingValue = sumOfAllArrayItems;
  for (let i = 0; i < numsArray.length; i++) {
    remaingValue -= numsArray[i];
  }
  return remaingValue;
}
console.log(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));
module.exports = findMissingNumber;
