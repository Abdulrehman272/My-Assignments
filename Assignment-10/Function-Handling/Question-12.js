// Write a JavaScript program to print all even or odd numbers in given range using function.


function printNumbersInRange(start, end, type) {
    for (let i = start; i <= end; i++) {
      if (type === "even" && i % 2 === 0) {
        console.log(i);
      } else if (type === "odd" && i % 2 !== 0) {
        console.log(i);
      }
    }
  }
  
  // Example usage
  printNumbersInRange(1, 10, "even"); // prints all even numbers between 1 and 10
  printNumbersInRange(1, 10, "odd"); // prints all odd numbers between 1 and 10
  