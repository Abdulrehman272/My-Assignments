// 19. Write a JavaScript program to generate nth Fibonacci term using function.


function fibonacci(n) {
    let a = 0, b = 1;
  
    if (n === 0) return a;
    if (n === 1) return b;
  
    for (let i = 2; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
  
    return b;
  }
  
  // Example usage
  console.log(fibonacci(6)); // prints 8, which is the 6th Fibonacci term
  