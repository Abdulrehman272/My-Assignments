// Write a JavaScript program to print all Armstrong numbers between given interval using functions.


function countDigits(num) {
    return num.toString().length;
  }
  
  function isArmstrong(num) {
    const n = countDigits(num);
    let sum = 0;
    let temp = num;
    
    while (temp > 0) {
      const digit = temp % 10;
      sum += Math.pow(digit, n);
      temp = Math.floor(temp / 10);
    }
    
    return sum === num;
  }
  
  function findArmstrongNumbers(start, end) {
    const armstrongNumbers = [];
    
    for (let i = start; i <= end; i++) {
      if (isArmstrong(i)) {
        armstrongNumbers.push(i);
      }
    }
    
    return armstrongNumbers;
  }
  
  const start = 1;
  const end = 1000;
  
  const armstrongNumbers = findArmstrongNumbers(start, end);
  
  console.log(`Armstrong numbers between ${start} and ${end}:`);
  console.log(armstrongNumbers);
  