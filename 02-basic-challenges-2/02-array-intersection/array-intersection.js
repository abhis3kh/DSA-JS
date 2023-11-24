function arrayIntersection(array1, array2) {
  // Using Set to efficiently store unique elements from the first array
  const firstArraySet = new Set(array1);

  // Using Set to efficiently store unique elements from the second array
  const secondArraySet = new Set(array2);

  // Creating an array to store common elements between arrays
  const commonElementsArray = [];

  // Loop through the elements of the first array (stored in a set)
  firstArraySet.forEach((element) => {
    // Check if the element exists in the second array (stored in a set)
    if (secondArraySet.has(element)) {
      // If it exists in both arrays, add it to the common elements array
      commonElementsArray.push(element);
    }
  });

  // Return the array containing common elements
  return commonElementsArray;
}

module.exports = arrayIntersection;
