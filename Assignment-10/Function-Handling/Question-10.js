// Write a JavaScript program to find power of any number using function.

function power(base, exponent) {
    let result = 1;
  
    for (let i = 0; i < exponent; i++) {
      result *= base;
    }
  
    return result;
  }
  
  const base = 2;
  const exponent = 3;
  
  const result = power(base, exponent);
  
  console.log(`${base} to the power of ${exponent} is: ${result}`);
  