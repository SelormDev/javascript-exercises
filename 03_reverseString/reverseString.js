const reverseString = function (strings) {
  let splittedStrings = strings.split("");
  let newString = "";
  for (let i = 0; i < strings.length; i++) {
    newString += splittedStrings[splittedStrings.length - 1];
    splittedStrings.pop();
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;
