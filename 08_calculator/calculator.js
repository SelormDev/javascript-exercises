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

const multiply = function () {};

const power = function () {};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
