function diceGameSimulation(numberOfSimulation) {
  const overAllResult = [];

  for (let i = 0; i < numberOfSimulation; i++) {
    const diceRoll1 = Math.round(Math.random() * 5) + 1;
    const diceRoll2 = Math.round(Math.random() * 5) + 1;
    let result = '';
    const sum = diceRoll1 + diceRoll2;
    if (sum === 7 || sum === 11) result = 'win';
    else if (sum === 2 || sum === 3 || sum === 12) result = 'lose';
    else result = 'roll again';
    overAllResult.push({
      dice1: diceRoll1,
      dice2: diceRoll2,
      sum,
      result,
    });
  }
  return overAllResult;
}
module.exports = diceGameSimulation;
