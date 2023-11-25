function areAllCharactersUnique(string) {
  //1. Loop through each item in the string and store it in a Object with same Key and Value
  //2. check if the item already exists in the object - if not we will add it - if yes then its means we are getting duplicates
  //3. Once we found a element which already exists in object - we will return false else True
  const trackingObject = {};
  for (let i = 0; i < string.length; i++) {
    if (trackingObject[string[i]] == undefined) {
      trackingObject[string[i]] = string[i];
    } else {
      return false;
    }
  }
  return true;
}

console.log(areAllCharactersUnique('abcdefg')); // true
console.log(areAllCharactersUnique('abcdefgA')); // true
console.log(areAllCharactersUnique('programming')); // false
console.log(areAllCharactersUnique('')); // true
console.log(areAllCharactersUnique('a')); // true
module.exports = areAllCharactersUnique;
