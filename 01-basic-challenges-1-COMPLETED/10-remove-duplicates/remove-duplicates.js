function removeDuplicates(duplicatedString) {
  const uniqueString = new Set();
  for (let i = 0; i < duplicatedString.length; i++) {
    uniqueString.add(duplicatedString[i]);
  }
  //spreading the set value in a Array
  return [...uniqueString];
}

module.exports = removeDuplicates;
