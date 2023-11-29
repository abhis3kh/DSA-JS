function generateHashtag(inputString) {
  if (inputString.length < 1) return false;
  // return false incase string is full of Spaces
  if (inputString.trim().length < 1) return false;
  //   Making sure - no spaces is there
  inputString = inputString.trim();
  const splittedArray = inputString.split(' ');
  const hashTaggedString = splittedArray.reduce((appendedText, word) => {
    return (
      appendedText +
      (word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    );
  }, '#');
  return hashTaggedString.length > 140 ? false : hashTaggedString;
}
module.exports = generateHashtag;
