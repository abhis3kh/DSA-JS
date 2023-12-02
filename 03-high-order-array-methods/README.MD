# High Order Array

## 1. ForEach - This method is use to loop through an Array just like for Loop but return statement works different.

### In Normal for loop if you do a return - it breaks the function and return on a functional level but in forEach - if you do a return - it skips that particular item from iterating.

## 2. Reduce - This method helps to calculate the items as it takes a accumulator & current row item.

const inputArray=[2,3,4,5,6]
inputArray.reduce((totalSum,currentElement)=>{
return total+currentElement;
})

## Above function adds all the array items and store the value in totalSum and reduce will return the value.
