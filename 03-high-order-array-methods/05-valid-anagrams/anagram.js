var isAnagram = function (firstString, secondString) {
  //return true;
  firstStringFrequency = {};
  secondStringFrequency = {};

  for (let i = 0; i < firstString.length; i++) {
    firstStringFrequency[firstString[i]] =
      firstStringFrequency.get(firstString[i], 0) + 1;
  }
  console.log(firstStringFrequency);

  // return s_freq == t_freq
};
isAnagram('anagram', 'gramana');
