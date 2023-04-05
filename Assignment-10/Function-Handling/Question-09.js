// Write a JavaScript program to print all perfect numbers between given interval using function

function findFactors(num) {
    const factors = [];
  
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        factors.push(i);
      }
    }
  
    return factors;
  }
  
  function isPerfect(num) {
    const factors = findFactors(num);
    const sum = factors.reduce((acc, curr) => acc + curr, 0);
    return sum === num;
  }
  
  function findPerfectNumbers(start, end) {
    const perfectNumbers = [];
  
    for (let i = start; i <= end; i++) {
      if (isPerfect(i)) {
        perfectNumbers.push(i);
      }
    }
  
    return perfectNumbers;
  }
  
  const start = 1;
  const end = 1000;
  
  const perfectNumbers = findPerfectNumbers(start, end);
  
  console.log(`Perfect numbers between ${start} and ${end}:`);
  console.log(perfectNumbers);
  