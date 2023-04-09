const cashOutHandlerNatural = require("./cashOutNatural");
const fileWriteHandler = require("../../helpers/fileWriteHandler");
test("testing cashOutHandlerNatural() function", async () => {
  const cashOutConfigForNaturalPerson = {
    percents: 0.3,
    week_limit: {
      amount: 1000,
      currency: "EUR",
    },
  };
  let userDetails = {
    date: "2016-01-06",
    user_id: 1,
    user_type: "natural",
    type: "cash_out",
    operation: { amount: 30000, currency: "EUR" },
  };
  let result = await cashOutHandlerNatural(
    userDetails,
    cashOutConfigForNaturalPerson
  );

  expect(result).toEqual(87.0);

  fileWriteHandler([]);
});
