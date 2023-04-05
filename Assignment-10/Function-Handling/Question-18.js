// Write a JavaScript program to find factorial of any number using function.



function factorial(num) {
    let result = 1;
  
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
  
    return result;
  }
  
  // Example usage
  console.log(factorial(5)); // prints 120, which is the factorial of 5
  