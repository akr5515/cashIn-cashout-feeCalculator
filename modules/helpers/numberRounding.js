const numberRoundingHelper = (givenNumber) => {
  const numberToStringConverted = givenNumber.toFixed(3);
  const splittingByDecimalPoint = numberToStringConverted.split(".");
  const thirdDecimalPointNumber = parseInt(splittingByDecimalPoint[1]) % 10;
  let firstTwoDecimalNumber = parseInt(
    parseInt(splittingByDecimalPoint[1]) / 10
  );

  // if third decimal point number is greater than zero then adding 1 to two decimal place integer
  if (thirdDecimalPointNumber > 0) {
    firstTwoDecimalNumber = firstTwoDecimalNumber + 1;
    // if the resulted value is like 0.99+0.1 then return 1.00
    if (firstTwoDecimalNumber === 100) {
      const incrementedNumber = parseInt(givenNumber) + 1;
      return parseFloat(incrementedNumber.toFixed(2));
    } else {
      return parseFloat(
        splittingByDecimalPoint[0] + "." + firstTwoDecimalNumber
      );
    }
  } else {
    return parseFloat(givenNumber.toFixed(2));
  }
};
module.exports = numberRoundingHelper;
