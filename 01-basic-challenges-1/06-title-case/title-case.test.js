// const titleCase = require('./title-case');

// test('Converting string to title case', () => {
//   expect(titleCase('hello world')).toBe('Hello World');
//   expect(titleCase('javascript programming')).toBe('Javascript Programming');
//   expect(titleCase('openai chatbot')).toBe('Openai Chatbot');
// });

const titleCase = require('./title-case');

test('Converting string to title case', () => {
  // Basic test cases
  expect(titleCase('hello world')).toBe('Hello World');
  expect(titleCase('javascript programming')).toBe('Javascript Programming');
  expect(titleCase('openai chatbot')).toBe('Openai Chatbot');

  // Test with an empty string
  expect(titleCase('')).toBe('');

  // Test with a single word
  expect(titleCase('title')).toBe('Title');

  // Test with all uppercase input
  expect(titleCase('ALL CAPS')).toBe('All Caps');

  // Test with all lowercase input
  expect(titleCase('all lowercase words')).toBe('All Lowercase Words');

  // Test with input containing numbers and special characters
  expect(titleCase('weird123 case!@#')).toBe('Weird123 Case!@#');

  // Test with leading and trailing spaces
  expect(titleCase('  leading and trailing  ')).toBe('Leading And Trailing');

  // Test with words containing apostrophes
  expect(titleCase("don't stop me now")).toBe("Don't Stop Me Now");

  // Test with non-English characters
  expect(titleCase('über important ñoño input')).toBe(
    'Über Important Ñoño Input'
  );
});
