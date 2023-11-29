// function validatePassword(passwordString) {
//   // 1. Length > 8
//   // 2. Must contain one upperCase
//   // 3. Must Contain lowerCase
//   // 4. One digit
//   // if passes - true else false
//   const splittedChar = passwordString.split('');
//   const isUpperCase = splittedChar.some((chracter) => {
//     return (chracter) => 97 || char <= 122;
//   });
//   const isLowerCase = splittedChar.some((char) => {
//     return (char) => 65 || char <= 90;
//   });
//   const isDigit = splittedChar.some((char) => {
//     return (char) => 48 || char <= 57;
//   });
//   console.log(isDigit, isLowerCase, isUpperCase);
//   return Boolean(
//     isUpperCase & isLowerCase & isDigit & (passwordString.length >= 8)
//   );
// }
function validatePassword(passwordString) {
  // 1. Length > 8
  // 2. Must contain one upperCase
  // 3. Must Contain lowerCase
  // 4. One digit
  // if passes - true else false

  const isUpperCase = [...passwordString].some(
    (character) => character >= 'A' && character <= 'Z'
  );

  const isLowerCase = [...passwordString].some(
    (character) => character >= 'a' && character <= 'z'
  );

  const isDigit = [...passwordString].some(
    (character) => character >= '0' && character <= '9'
  );

  return Boolean(
    isUpperCase && isLowerCase && isDigit && passwordString.length >= 8
  );
}

module.exports = validatePassword;
