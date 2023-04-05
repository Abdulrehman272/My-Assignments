// Write a JavaScript program to find all prime numbers between given interval using functions.

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
  
  function findPrimes(start, end) {
    const primes = [];
    
    for (let i = start; i <= end; i++) {
      if (isPrime(i)) {
        primes.push(i);
      }
    }
    
    return primes;
  }
  
  const start = 1;
  const end = 20;
  
  const primes = findPrimes(start, end);
  
  console.log(`Prime numbers between ${start} and ${end}:`);
  console.log(primes);
  