function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function greeting(name) {
    return "Hello " + name;
  }
  
  function isAdult(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  function getMaxNumbers(numbers) {
    let maxNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
  
    return maxNumber;
  }
  
  function getMultiplyFn() {
    return function(number) {
      return number * 5;
    };
  }
  
  module.exports = {
    add: add,
    subtract: subtract,
    greeting: greeting,
    isAdult: isAdult,
    getMaxNumbers: getMaxNumbers,
  getMultiplyFn: getMultiplyFn}
  ;