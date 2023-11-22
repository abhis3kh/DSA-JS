function calculator(num1, numb2, operator) {
  switch (operator) {
    case (operator = '+'):
      return num1 + numb2;
    case (operator = '-'):
      return num1 - numb2;
    case (operator = '*'):
      return num1 * numb2;
    case (operator = '/'):
      return num1 / numb2;
    default:
      return `Invalid Operator Provided. ${operator}`;
  }
}

module.exports = calculator;
