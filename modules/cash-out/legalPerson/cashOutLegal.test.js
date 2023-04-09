const cashOutHandlerLegal = require("./cashOutLegal");

test("testing cashOutHandlerLegal() function", async () => {
  const cashOutConfigForLegalPerson = {
    percents: 0.3,
    min: {
      amount: 0.5,
      currency: "EUR",
    },
  };
  let userDetails = {
    date: "2016-01-06",
    user_id: 2,
    user_type: "juridical",
    type: "cash_out",
    operation: { amount: 300.0, currency: "EUR" },
  };

  let result = await cashOutHandlerLegal(
    userDetails,
    cashOutConfigForLegalPerson
  );

  expect(result).toEqual(0.9);
});
