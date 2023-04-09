const constants = require("./constants/constants");
const cashInHandler = require("./cash-in/cashInHandler");
const cashOutHandler = require("./cash-out/cashOutHandler");
const fileWriteHandler = require("./helpers/fileWriteHandler");
const fetchDataHandler = require("./api-config/fetchDataHandler");

const storedData = [];

const commissionCalculation = async (inputUsersData) => {
  const cashInConfig = await fetchDataHandler(constants.URL.CASH_IN);
  const cashOutConfigForNaturalPerson = await fetchDataHandler(
    constants.URL.CASH_OUT_NATURAL
  );
  const cashOutConfigForLegalPerson = await fetchDataHandler(
    constants.URL.CASH_OUT_JURIDICAL
  );
  inputUsersData.map(async (userDetails) => {
    let result;
    if (userDetails.type === constants.CASH_IN) {
      result = await cashInHandler(userDetails, cashInConfig);
    } else if (userDetails.type === constants.CASH_OUT) {
      result = await cashOutHandler(
        userDetails,
        cashOutConfigForNaturalPerson,
        cashOutConfigForLegalPerson,
        storedData
      );
    }
    console.log(result.toFixed(2));
  });

  fileWriteHandler([]);
};

module.exports = commissionCalculation;
