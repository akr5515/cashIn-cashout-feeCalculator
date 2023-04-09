const numberRoundingHelper = require("../../helpers/numberRounding");

const cashOutHandlerLegal = (userDetails, cashOutConfigForLegalPerson) => {
  const cashOutFee =
    (userDetails.operation.amount * cashOutConfigForLegalPerson.percents) / 100;
  const result =
    cashOutFee < cashOutConfigForLegalPerson.min.amount
      ? cashOutConfigForLegalPerson.min.amount
      : cashOutFee;

  const roundedValue = numberRoundingHelper(result);

  return roundedValue;
};

module.exports = cashOutHandlerLegal;
