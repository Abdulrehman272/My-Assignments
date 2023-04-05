// Write a JavaScript program to print all strong numbers between given interval using functions.


function factorial(num) {
    let result = 1;
    
    for (let i = num; i > 1; i--) {
      result *= i;
    }
    
    return result;
  }
  
  function isStrong(num) {
    let sum = 0;
    let n = num;
    
    while (n > 0) {
      const digit = n % 10;
      sum += factorial(digit);
      n = Math.floor(n / 10);
    }
    
    return sum === num;
  }
  
  function findStrongNumbers(start, end) {
    const strongNumbers = [];
    
    for (let i = start; i <= end; i++) {
      if (isStrong(i)) {
        strongNumbers.push(i);
      }
    }
    
    return strongNumbers;
  }
  
  const start = 1;
  const end = 500;
  
  const strongNumbers = findStrongNumbers(start, end);
  
  console.log(`Strong numbers between ${start} and ${end}:`);
  console.log(strongNumbers);
  