var storeData = require("../../store/store.json");
const getWeekAndYearNumber = require("../../helpers/getWeekAndYearNumber");
const fileWriteHandler = require("../../helpers/fileWriteHandler");
const numberRoundingHelper = require("../../helpers/numberRounding");

const cashOutHandlerNatural = (userDetails, cashOutConfigForNaturalPerson) => {
  checkIfUserExist = storeData.findIndex(
    (obj) => obj.userId === userDetails.user_id
  );

  let calculatedFee;

  /* if the userdata is existed in storage then should
   compare amount with stored data */

  if (checkIfUserExist >= 0) {
    const storedUserInfo = storeData[checkIfUserExist];
    const storedUserDateInfo = getWeekAndYearNumber(
      storedUserInfo.previousDate
    );
    const currentUserDateInfo = getWeekAndYearNumber(userDetails.date);

    // if transaction was in same week as previous transaction
    if (
      currentUserDateInfo.weekNumber === storedUserDateInfo.weekNumber &&
      currentUserDateInfo.year === storedUserDateInfo.year
    ) {
      const sumStoredAndCurrentAmount =
        storedUserInfo.totalAmount + userDetails.operation.amount;
      const result =
        sumStoredAndCurrentAmount >
        cashOutConfigForNaturalPerson.week_limit.amount
          ? (userDetails.operation.amount *
              cashOutConfigForNaturalPerson.percents) /
            100
          : 0;
      calculatedFee = result;
      // updating total amount for the week
      storeData[checkIfUserExist].totalAmount = sumStoredAndCurrentAmount;
    } else {
      // if transaction was not in same week as previous transaction
      storeData[checkIfUserExist].totalAmount = userDetails.operation.amount;
      const result =
        userDetails.operation.amount >
        cashOutConfigForNaturalPerson.week_limit.amount
          ? (userDetails.operation.amount *
              cashOutConfigForNaturalPerson.percents) /
            100
          : 0;
      calculatedFee = result;
    }
  } else {
    // new transaction for the week for that user
    const tempObj = {
      userId: userDetails.user_id,
      totalAmount: userDetails.operation.amount,
      previousDate: userDetails.date,
    };
    storeData.push(tempObj);

    const cashOutFee =
      ((userDetails.operation.amount -
        cashOutConfigForNaturalPerson.week_limit.amount) *
        cashOutConfigForNaturalPerson.percents) /
      100;
    const result = cashOutFee > 0 ? cashOutFee : 0;

    calculatedFee = result;
  }
  // writing updated storeData into the json file
  fileWriteHandler(storeData);
  const roundedValue = numberRoundingHelper(calculatedFee);
  return roundedValue;
};

module.exports = cashOutHandlerNatural;
