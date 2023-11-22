function isPalindrome(palindromeString) {
  //removing special and spaces from the string
  let inputString = palindromeString.replace(/[^a-z0-9]/gi, '');
  //
  let startIndex = 0,
    endIndex = inputString.length - 1;
  while (startIndex !== endIndex) {
    // console.log(`${inputString[startIndex]} : ${inputString[endIndex]}`);
    if (
      inputString[startIndex].toLowerCase() !==
      inputString[endIndex].toLowerCase()
    )
      return false;

    startIndex++;
    endIndex--;
  }
  return true;
}
module.exports = isPalindrome;
