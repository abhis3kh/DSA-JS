function formatPhoneNumber(numsArray) {
  return `(${numsArray.slice(0, 3).join('')}) ${numsArray
    .slice(3, 6)
    .join('')}-${numsArray.slice(6, 10).join('')}`;

  //   return `(${numsArray[0]}${numsArray[1]}${numsArray[2]}) ${numsArray[3]}${numsArray[4]}${numsArray[5]}-${numsArray[6]}${numsArray[7]}${numsArray[8]}${numsArray[9]}`;
}
module.exports = formatPhoneNumber;
