const getWeekAndYearNumber = require("./getWeekAndYearNumber");
const numberRoundingHelper = require("./numberRounding");

test("testing getWeekAndYearNumber() function", () => {
  const testDate = "2023-04-09";
  const result = getWeekAndYearNumber(testDate);
  expect(result && typeof result === "object").toBe(true);
  expect(result.weekNumber && typeof result.weekNumber === "number").toBe(true);
  expect(result.weekNumber).toEqual(15);
  expect(result.year && typeof result.year === "number").toBe(true);

  expect(result.year).toEqual(2023);
});

test("testing numberRoundingHelper() function", async () => {
  let testData = 12.123;
  let result = numberRoundingHelper(testData);
  expect(typeof result).toBe("number");
  expect(result).toEqual(12.13);
  testData = 24.3276;
  result = numberRoundingHelper(testData);
  expect(typeof result).toBe("number");
  expect(result).toEqual(24.33);
  testData = 24.9976;
  result = numberRoundingHelper(testData);
  expect(typeof result).toBe("number");
  expect(result).toEqual(25.0);
});
