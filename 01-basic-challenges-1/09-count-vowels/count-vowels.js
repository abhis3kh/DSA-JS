function countVowels(inputString) {
  //make the case uppercase to avoid casing issue
  inputString = inputString.toUpperCase();
  //for checking the list
  const vowels = {
    A: 'A',
    E: 'E',
    I: 'I',
    O: 'O',
    U: 'U',
  };
  let vowelsCount = 0;
  for (let i = 0; i < inputString.length; i++) {
    if (vowels[inputString[i]] != undefined) vowelsCount++;
  }
  return vowelsCount;
}

module.exports = countVowels;
