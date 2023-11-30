function findMissingLetter(letterArray) {
  for (let index = 0; index < letterArray.length; index++) {
    if (
      letterArray[index].charCodeAt(0) + 1 !==
      letterArray[index + 1].charCodeAt(0)
    ) {
      return String.fromCharCode(letterArray[index].charCodeAt(0) + 1);
    }
  }
}
// console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']));
module.exports = findMissingLetter;
