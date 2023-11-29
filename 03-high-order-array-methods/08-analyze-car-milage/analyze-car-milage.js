function analyzeCarMileage(arrayOfCarObjects) {
  // Object Property: car's make, model, year, and mileage
  //   Output : Object
  // Calculate the average mileage of all cars.
  // Find the car with the highest mileage.
  // Find the car with the lowest mileage.
  // Calculate the total mileage of all cars combined.
  const totalMileage = arrayOfCarObjects.reduce((totalML, currentCar) => {
    return totalML + currentCar.mileage;
  }, 0);
  const averageMileage = parseFloat(
    (totalMileage / arrayOfCarObjects.length).toFixed(2)
  );
  // -------------------------------
  let highestMileage = 0;
  let highestMileageCar;
  let lowestMileage = 999999999;
  let lowestMileageCar;
  arrayOfCarObjects.forEach((car) => {
    if (car.mileage > highestMileage) {
      highestMileage = car.mileage;
      highestMileageCar = car;
    }
    if (car.mileage < highestMileage) {
      lowestMileage = car.mileage;
      lowestMileageCar = car;
    }
  });
  //   return
  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage,
  };
}
module.exports = analyzeCarMileage;
