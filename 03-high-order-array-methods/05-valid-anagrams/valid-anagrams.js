function validAnagrams(firstString, secondString) {
  if (firstString.length !== secondString.length) return false;

  for (let index = 0; index < firstString.length; index++) {
    if (secondString.indexOf(firstString[index]) < 0) return false;
  }
  return true;
}
console.log(validAnagrams('hello', 'world'));
module.exports = validAnagrams;
