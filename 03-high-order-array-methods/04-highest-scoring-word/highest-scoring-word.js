function highestScoringWord(inputString) {
  //1. Split the String by spaces so we will get words
  //2. for each word - loop through each letter of that word and get the UNICODE Value add to value and Sotre in a Object where key will be the word and Value will be the total
  //3. Loop through each Object items using Key and collect the highest value and return it
  const splittedWords = inputString.split(' ');
  const trackingObject = {};
  splittedWords.forEach((currentWord) => {
    let sumOfCharacter = 0;
    for (let i = 0; i < currentWord.length; i++) {
      sumOfCharacter += currentWord.charCodeAt(i);
    }
    trackingObject[sumOfCharacter] = currentWord;
  });
  let objKeys = Object.keys(trackingObject);
  //   sort the Keys Array as it contains the highest Value
  objKeys.sort();
  //loop through the Object and get the Maximum Number -
  //doing this because to handle this scenario :
  // If two words score the same, return the
  // word that appears earliest in the original
  // string.

  return trackingObject[objKeys[objKeys.length - 1]];
  //   let currentMaximumWord = '';
  //   let currentMaximumValue = 0;
  //   objKeys.forEach((key) => {
  //     if (trackingObject[key] > currentMaximumValue) {
  //       currentMaximumValue = trackingObject[key];
  //       currentMaximumWord = key;
  //     }
  //   });
  //   return currentMaximumWord;
}
module.exports = highestScoringWord;
