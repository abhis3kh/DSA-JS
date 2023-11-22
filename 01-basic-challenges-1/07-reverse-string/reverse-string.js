function reverseString(reverseableString) {
  // 1. Loop through the string and start the loop from end - starts appending the data
  let reversedString = '';
  for (let i = reverseableString.length - 1; i >= 0; i--) {
    reversedString += reverseableString[i];
  }
  return reversedString;
}

module.exports = reverseString;
