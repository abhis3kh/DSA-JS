function generateHashtag(inputString) {
  if (inputString.length < 1) return false;
  const splittedArray = inputString.split(' ');
  const hashTaggedString = splittedArray.reduce((appendedText, word) => {
    console.log(word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase());
    return (
      appendedText +
      (word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase())
    );
  }, '#');
  return hashTaggedString.length > 140 ? false : hashTaggedString;
}
module.exports = generateHashtag;
