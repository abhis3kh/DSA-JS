const isValidIPv4 = (queryIPV4Address) => {
  // 1. Split it using . notation
  // 2. Check if we get the array length equal to 4 because we can only have 4 octets
  // 3. Loop through each item and compare if that number is within 0 - 255
  // 4. If within range - return true at once the loop ends.
  //5. If we encounter a item which doesn't fit into this scenario - we will throw false and Exit
  const splittedOctets = queryIPV4Address.split('.');
  console.log(splittedOctets);
  if (splittedOctets.length == 4) {
    // splittedOctets.forEach((octet) => {
    //   if (parseInt(octet) < 0 || parseInt(octet) > 255) {
    //     return false;
    //   }
    // });
    for (let i = 0; i < splittedOctets.length; i++) {
      const octet = splittedOctets[i];
      if (parseInt(octet) < 0 || parseInt(octet) > 255) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
};

module.exports = isValidIPv4;
