// Write a JavaScript program to check whether a number is prime, Armstrong or perfect number
// using functions.

function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  function isArmstrong(num) {
    let sum = 0;
    let temp = num;
    const power = num.toString().length;
    
    while (temp > 0) {
      const digit = temp % 10;
      sum += Math.pow(digit, power);
      temp = Math.floor(temp / 10);
    }
    
    return sum === num;
  }
  
  function isPerfect(num) {
    let sum = 0;
    
    for (let i = 1; i < num; i++) {
      if (num % i === 0) {
        sum += i;
      }
    }
    
    return sum === num;
  }
  
  let num = 28;
  
  if (isPrime(num)) {
    console.log(`${num} is a prime number`);
  } else if (isArmstrong(num)) {
    console.log(`${num} is an Armstrong number`);
  } else if (isPerfect(num)) {
    console.log(`${num} is a perfect number`);
  } else {
    console.log(`${num} is neither a prime, Armstrong, nor perfect number`);
  }
  