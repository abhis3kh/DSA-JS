function countOccurrences(string, searchCharacter) {
  //   let count = 0;
  //   for (let i = 0; i < string.length; i++) {
  //     if (searchCharacter === string[i]) count++;
  //   }
  //   return count;
  //Spliting based on character we need to found so counting the element we can get the number of character is there. We need to delete -1 to handle array index starts at 0
  return string.split(searchCharacter).length - 1;
}

module.exports = countOccurrences;
