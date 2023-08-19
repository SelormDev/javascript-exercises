const leapYears = function (year) {
  const centuryLeapYear = year % 400 === 0;
  const nonCenturyLeapYear = year % 4 === 0 && !(year % 100 === 0);
  return centuryLeapYear || nonCenturyLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
