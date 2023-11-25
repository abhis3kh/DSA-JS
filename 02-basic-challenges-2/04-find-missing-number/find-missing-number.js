function findMissingNumber(numsArray) {
  if (numsArray.length < 1) return 1;
  if (numsArray == undefined) return undefined;
  numsArray = numsArray.sort((a, b) => a - b);

  let highestNumber = numsArray[numsArray.length - 1];

  let allNumbersObj = [];
  for (let i = 1; i <= highestNumber; i++) {
    allNumbersObj.push(i);
  }
  for (let i = 0; i < numsArray.length; i++) {
    if (numsArray[i] !== allNumbersObj[i]) return allNumbersObj[i];
  }
  return 1;
}

module.exports = findMissingNumber;
