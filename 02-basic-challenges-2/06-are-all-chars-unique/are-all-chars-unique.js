function areAllCharactersUnique(string) {
  //1. Split the string into array
  //2. Convert the array into Set
  //3. Compare the size of array and set
  //4. if equal - return true else false
  //5. Handle the casing
  if (string.length < 1) return true;
  //   string = string.toLowerCase();
  const splittedString = string.split('');
  const uniqueSetOfStringLetters = new Set(splittedString);
  return splittedString.length == uniqueSetOfStringLetters.size ? true : false;
}

module.exports = areAllCharactersUnique;
