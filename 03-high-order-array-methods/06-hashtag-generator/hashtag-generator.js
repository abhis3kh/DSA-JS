function generateHashtag(inputString) {
  if (inputString.length < 1) return false;
  const splittedArray = inputString.split(' ');
  const hashTaggedString = splittedArray.reduce((word, appendedText) => {
    return word + appendedText;
  }, '#');
  return hashTaggedString.length > 140 ? false : hashTaggedString;
}
console.log(generateHashtag('JavaScript is awesome'));
module.exports = generateHashtag;
