function findMissingLetter(lettersArray) {
  //1. Take the first character unicode
  //2. Take the last character unicode
  //3. Loop each time and starts  adding 1 after initial item to check if that item exists or not
  const firstUniCode = lettersArray[0].charCodeAt(0);
  for (let i = 1; i < lettersArray.length; i++) {
    if (firstUniCode + i != lettersArray[i].charCodeAt(0))
      return String.fromCharCode(firstUniCode + i);
  }
  return '';
}

module.exports = findMissingLetter;
