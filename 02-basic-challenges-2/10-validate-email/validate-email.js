function validateEmail(inputString) {
  let isEmail = false;
  //1. First check if @ exists
  //2. Once we got the @ - gets the string after @ to validate if it has . in it.
  //3. Check if '.' exists in the sliced string after @ - If yes assign true or don't update
  //4. return the value
  let indexOfAtTheRateSymbol = inputString.indexOf('@');
  if (indexOfAtTheRateSymbol > 0) {
    //There is a @ in that string
    const slicedTextAfterAtTheRate = inputString.slice(indexOfAtTheRateSymbol);
    if (slicedTextAfterAtTheRate.indexOf('.') > 0) isEmail = true;
  }
  return isEmail;
}

module.exports = validateEmail;
