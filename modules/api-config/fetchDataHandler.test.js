const fetchDataHandler = require("./fetchDataHandler");
const constants = require("../constants/constants");

test("testing cash-in api response", async () => {
  const responseData = await fetchDataHandler(constants.URL.CASH_IN);
  expect(responseData && typeof responseData === "object").toBe(true);
  expect(
    responseData.percents && typeof responseData.percents === "number"
  ).toBe(true);
  expect(responseData.max && typeof responseData.max === "object").toBe(true);
  expect(
    responseData.max.amount && typeof responseData.max.amount === "number"
  ).toBe(true);
  expect(responseData.max.amount).not.toEqual(0);
  expect(
    responseData.max.currency && typeof responseData.max.currency === "string"
  ).toBe(true);
});

test("testing cash-out api response for Natural person", async () => {
  const responseData = await fetchDataHandler(constants.URL.CASH_OUT_NATURAL);
  expect(responseData && typeof responseData === "object").toBe(true);
  expect(
    responseData.percents && typeof responseData.percents === "number"
  ).toBe(true);
  expect(
    responseData.week_limit && typeof responseData.week_limit === "object"
  ).toBe(true);
  expect(
    responseData.week_limit.amount &&
      typeof responseData.week_limit.amount === "number"
  ).toBe(true);
  expect(responseData.week_limit.amount).toEqual(1000);
  expect(
    responseData.week_limit.currency &&
      typeof responseData.week_limit.currency === "string"
  ).toBe(true);
});

test("testing cash-out api response for Legal person", async () => {
  const responseData = await fetchDataHandler(constants.URL.CASH_OUT_JURIDICAL);
  expect(responseData && typeof responseData === "object").toBe(true);
  expect(
    responseData.percents && typeof responseData.percents === "number"
  ).toBe(true);
  expect(responseData.min && typeof responseData.min === "object").toBe(true);
  expect(
    responseData.min.amount && typeof responseData.min.amount === "number"
  ).toBe(true);
  expect(
    responseData.min.currency && typeof responseData.min.currency === "string"
  ).toBe(true);
});
