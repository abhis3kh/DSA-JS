function sumOfEvenSquares(numsArray) {
  //   return numsArray.reduce((totalSum, num) => {
  //     if (num % 2 === 0) return totalSum + Math.pow(num, 2);

  //     return totalSum;
  //   }, 0);
  // Step 1: Filter the array to get only even numbers
  const filteredArrayOfEvenNumbers = numsArray.filter((num) => num % 2 === 0);

  // Step 2: Square each of the even numbers obtained in Step 1
  const squaredOfEvenNumbers = filteredArrayOfEvenNumbers.map((num) =>
    Math.pow(num, 2)
  );

  // Step 3: Sum up all the squared even numbers obtained in Step 2
  const sumOfSquaredEvenNumbers = squaredOfEvenNumbers.reduce(
    (totalSum, num) => {
      return totalSum + num;
    },
    0
  );

  // Step 4: Return the total sum of squared even numbers
  return sumOfSquaredEvenNumbers;
}
console.log(sumOfEvenSquares([1, 2, 3, 4, 5]));

module.exports = sumOfEvenSquares;
