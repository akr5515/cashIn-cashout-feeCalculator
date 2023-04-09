const numberRoundingHelper = require("../helpers/numberRounding");
const cashInHandler = async (userDetails, cashInConfig) => {
  const calculatedCashInFee =
    (userDetails.operation.amount * cashInConfig.percents) / 100;

  const result =
    calculatedCashInFee > cashInConfig.max.amount
      ? cashInConfig.max.amount
      : calculatedCashInFee;
  const roundedValue = numberRoundingHelper(result);

  return roundedValue;
};

module.exports = cashInHandler;
