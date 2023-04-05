// Write a JavaScript program to find sum of all even or odd numbers in given range using function.


function sumOfNumbersInRange(start, end, type) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
      if (type === "even" && i % 2 === 0) {
        sum += i;
      } else if (type === "odd" && i % 2 !== 0) {
        sum += i;
      }
    }
    return sum;
  }
  
  // Example usage
  console.log(sumOfNumbersInRange(1, 10, "even")); // prints 30, which is the sum of all even numbers from 1 to 10
  console.log(sumOfNumbersInRange(1, 10, "odd")); // prints 25, which is the sum of all odd numbers from 1 to 10
  