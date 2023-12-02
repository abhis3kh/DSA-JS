// function findMissingLetter(letterArray) {
//   //   for (let index = 0; index < letterArray.length; index++) {
//   //     if (
//   //       letterArray[index].charCodeAt(0) + 1 !==
//   //       letterArray[index + 1].charCodeAt(0)
//   //     ) {
//   //       return String.fromCharCode(letterArray[index].charCodeAt(0) + 1);
//   //     }
//   //   }
// })
// module.exports = findMissingLetter;

function findMissingLetter(letterArray) {
  const uniCodedLetters = letterArray.map((letter) => {
    return letter.charCodeAt(0);
  });
  let missingValue = '';
  missingValue = uniCodedLetters.reduce((result, currentCode) => {
    if (currentCode + 1 !== result) {
      missingValue = String.fromCharCode(currentCode + 1);
    }
    return missingValue;
  }, '');
  return missingValue;
}

module.exports = findMissingLetter;
