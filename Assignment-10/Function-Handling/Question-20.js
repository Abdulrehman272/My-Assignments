// Write a JavaScript program to find GCD (HCF) of two numbers using function.



function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  
  // Example usage
  console.log(gcd(24, 36)); // prints 12, which is the GCD of 24 and 36
  