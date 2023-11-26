function calculateTotalSalesWithTax(productObject, taxRate) {
  //1. Loop through each Array Item - which is a product
  //2. Get the total sum of : each item * quantity
  //3. calculate the percentage of this sum and add to it
  //4. Return it
  const totalSumWithoutTax = productObject.reduce((totalSum, _, index) => {
    return (
      totalSum + productObject[index].price * productObject[index].quantity
    );
  }, 0);
  //   Limiting to 2 decimal points only
  //   return (totalSumWithoutTax + totalSumWithoutTax * (taxRate / 100)).toFixed(2);
  return totalSumWithoutTax + totalSumWithoutTax * (taxRate / 100);
}
console.log(
  calculateTotalSalesWithTax(
    [
      { name: 'Apple', price: 0.5, quantity: 10 },
      { name: 'Banana', price: 0.3, quantity: 20 },
      { name: 'Orange', price: 0.6, quantity: 15 },
    ],
    8
  )
);
module.exports = calculateTotalSalesWithTax;
