const convertToCelsius = function(input_temp) {
  let convertedNum = (input_temp - 32) * (5/9);
  return Math.round(convertedNum * 10) / 10;
};

const convertToFahrenheit = function(input_temp) {
  let convertedNum = (input_temp * (9/5)) + 32;
  return Math.round(convertedNum * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
