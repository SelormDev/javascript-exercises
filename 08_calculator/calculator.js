const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 > num2 ? num1 - num2 : num2 - num1;
};

const sum = function (array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  return sum;
};

const multiply = function (array) {
  let total = 1;
  array.forEach((element) => {
    total *= element;
  });
  return total;
};

const power = function (base, exponent) {
  return base ** exponent;
};

const factorial = function (num) {
  let factorial = num;
  if (num === 0 || num === 1) return 1;
  for (let i = num - 1; i >= 1; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
