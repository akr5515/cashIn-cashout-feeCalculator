const constants = require("../constants/constants");
const getWeekAndYearNumber = require("../helpers/getWeekAndYearNumber");
const { readFileSync } = require("fs");
const fileWriteHandler = require("../helpers/fileWriteHandler");
const cashOutHandlerNatural = require("./naturalPerson/cashOutNatural");
const cashOutHandlerLegal = require("./legalPerson/cashOutLegal");

var storeData = require("../store/store.json");

const cashOutHandler = (
  userDetails,
  cashOutConfigForNaturalPerson,
  cashOutConfigForLegalPerson
) => {
  let result;
  if (userDetails.user_type === constants.NATURAL_PERSON) {
    result = cashOutHandlerNatural(userDetails, cashOutConfigForNaturalPerson);
  } else if (userDetails.user_type === constants.LEGAL_PERSON) {
    result = cashOutHandlerLegal(userDetails, cashOutConfigForLegalPerson);
  }

  return result;
};

module.exports = cashOutHandler;
