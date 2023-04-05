// Write a JavaScript function to check whether an `input` is a date object or not.


function isDate(input) {
    return input instanceof Date && !isNaN(input);
  }
  
  // Example usage:
  console.log(isDate(new Date())); // true
  console.log(isDate('2023-04-05')); // false
  