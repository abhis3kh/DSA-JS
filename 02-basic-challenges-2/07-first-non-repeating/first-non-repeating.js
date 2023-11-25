function findFirstNonRepeatingCharacter(string) {
  //1. Go through the items in the string via Loop
  //2. If we found a match in the object(which will be created to track), we will insert that item with status false (meaning if we found a item more than once)
  //3. If we don't find - we will insert that item with True
  const trackingObject = {};
  for (let i = 0; i < string.length; i++) {
    if (!trackingObject[string[i]]) {
      trackingObject[string[i]] = true;
    } else {
      trackingObject[string[i]] = false;
    }
  }
  //then go through keys of the objects and return the first Key which has True Value
  const objectKeys = Object.keys(trackingObject);
  for (let i = 0; i < objectKeys.length; i++) {
    // we have to check if it has true then
    if (trackingObject[objectKeys[i]]) return objectKeys[i];
  }
  return null;
}
module.exports = findFirstNonRepeatingCharacter;
