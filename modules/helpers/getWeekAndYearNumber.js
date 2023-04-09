const getWeekAndYearNumber = (date) => {
  const parsedDate = new Date(date);
  const year = parsedDate.getFullYear();
  const oneJan = new Date(parsedDate.getFullYear(), 0, 1);
  // calculating number of days in given year before a given date
  const numberOfDays = Math.floor(
    (parsedDate - oneJan) / (24 * 60 * 60 * 1000)
  );

  // adding 1 since to current date and returns value starting from 0
  const weekNumber = Math.ceil((parsedDate.getDay() + 1 + numberOfDays) / 7);

  return { weekNumber, year };
};

module.exports = getWeekAndYearNumber;
