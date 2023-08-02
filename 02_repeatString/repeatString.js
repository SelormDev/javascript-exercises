const repeatString = function (word, number) {
  if (number < 0) return `ERROR`;
  let str = "";
  for (let i = 0; i < number; i++) str += word;
  return str;
};

// Do not edit below this line
module.exports = repeatString;
