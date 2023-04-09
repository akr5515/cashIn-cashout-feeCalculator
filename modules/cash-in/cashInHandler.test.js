const cashInHandler = require("./cashInHandler");

test("testing cashInHandler() function", async () => {
  const cashInConfig = {
    percents: 0.03,
    max: {
      amount: 5,
      currency: "EUR",
    },
  };
  let userDetails = {
    date: "2016-01-05",
    user_id: 1,
    user_type: "natural",
    type: "cash_in",
    operation: { amount: 200.0, currency: "EUR" },
  };

  let result = await cashInHandler(userDetails, cashInConfig);
  expect(result).toEqual(0.06);

  userDetails = {
    date: "2016-01-10",
    user_id: 2,
    user_type: "juridical",
    type: "cash_in",
    operation: { amount: 1000000.0, currency: "EUR" },
  };
  result = await cashInHandler(userDetails, cashInConfig);
  expect(result).toEqual(5.0);
});
