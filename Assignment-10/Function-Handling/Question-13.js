// Write a JavaScript program to find sum of all natural numbers between 1 to n using function.


function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
  // Example usage
  console.log(sumOfNaturalNumbers(10)); // prints 55, which is the sum of all natural numbers from 1 to 10
  