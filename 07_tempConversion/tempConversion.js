const convertToCelsius = function (fahrenheit) {
  let ans = ((fahrenheit - 32) * (5 / 9)).toFixed(1);
  return ans === "0" ? 0 : parseFloat(ans);
};

const convertToFahrenheit = function (celsius) {
  let ans = (celsius * (9 / 5) + 32).toFixed(1);
  return ans === "0" ? 0 : parseFloat(ans);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
