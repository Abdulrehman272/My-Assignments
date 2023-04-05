// Write a JavaScript program to find sum of digits of a given number using function.


function sumOfDigits(num) {
    let sum = 0;
  
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
  
    return sum;
  }
  
  // Example usage
  console.log(sumOfDigits(12345)); // prints 15, which is the sum of digits of 12345
  