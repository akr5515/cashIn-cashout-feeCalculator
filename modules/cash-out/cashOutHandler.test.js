const cashOutHandler = require("./cashOutHandler");
const fileWriteHandler = require("../helpers/fileWriteHandler");
const cashOutConfigForLegalPerson = {
  percents: 0.3,
  min: {
    amount: 0.5,
    currency: "EUR",
  },
};
const cashOutConfigForNaturalPerson = {
  percents: 0.3,
  week_limit: {
    amount: 1000,
    currency: "EUR",
  },
};

test("testing cashOutHandler() function for legal person", async () => {
  let userDetails = {
    date: "2016-01-06",
    user_id: 2,
    user_type: "juridical",
    type: "cash_out",
    operation: { amount: 300.0, currency: "EUR" },
  };

  let result = await cashOutHandler(
    userDetails,
    cashOutConfigForNaturalPerson,
    cashOutConfigForLegalPerson
  );

  expect(result).toEqual(0.9);
});

test("testing cashOutHandler() function for natural person", async () => {
  let userDetails = {
    date: "2016-01-06",
    user_id: 1,
    user_type: "natural",
    type: "cash_out",
    operation: { amount: 30000, currency: "EUR" },
  };
  let result = await cashOutHandler(
    userDetails,
    cashOutConfigForNaturalPerson,
    cashOutConfigForLegalPerson
  );

  expect(result).toEqual(87.0);
  fileWriteHandler([]);
});
