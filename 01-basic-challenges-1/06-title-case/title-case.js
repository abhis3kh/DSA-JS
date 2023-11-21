function titleCase(inputString) {
  // 1. Split by Space to get each word in a array
  //2. Loop thorugh each item
  //2.1 Make the item as Lowercase fully
  //2.2 then Make the first letter Capitial using UpperCase
  //3. Add all the elements in the array into a string - each word will be appending with other with a space in between
  stringArray = inputString.split(' ');
  for (let i = 0; i < stringArray.length; i++) {
    const tempStr = stringArray[i].toLowerCase();
    const modifiedString = tempStr[0].toUpperCase();
    stringArray[i] = modifiedString + tempStr.slice(1, tempStr.length);
  }
  return stringArray.join(' ');
}

module.exports = titleCase;
