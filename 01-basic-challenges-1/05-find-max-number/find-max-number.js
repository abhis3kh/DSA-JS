function findMaxNumber(numbersArray) {
  if (numbersArray.length < 2) return numbersArray[0];
  if (numbersArray.length < 1) return undefined;
  let highestNumber = 0;
  //   for (let i = 0; i < numbersArray.length; i++) {
  //     if (highestNumber < numbersArray[i]) {
  //       highestNumber = numbersArray[i];
  //     }
  //   }
  //   return highestNumber;
  //   Two Pointer Solution
  let startIndex = 0,
    lastIndex = numbersArray.length - 1;
  while (startIndex !== lastIndex) {
    //if start is higher than last - assign start to highest and vice versa
    if (numbersArray[startIndex] > numbersArray[lastIndex]) {
      highestNumber = numbersArray[startIndex];
      lastIndex--;
    } else {
      highestNumber = numbersArray[lastIndex];
      startIndex++;
    }
  }
  return highestNumber;
}

module.exports = findMaxNumber;
