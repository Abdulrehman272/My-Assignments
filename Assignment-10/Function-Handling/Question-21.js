// Write a JavaScript program to find LCM of two numbers using function.



function lcm(a, b) {
    // find the GCD of the two numbers using the Euclidean algorithm
    let gcd = function(a, b) {
      if (b === 0) {
        return a;
      } else {
        return gcd(b, a % b);
      }
    };
    
    // calculate the LCM using the formula: LCM(a, b) = (a * b) / GCD(a, b)
    return (a * b) / gcd(a, b);
  }
  
  // Example usage
  console.log(lcm(12, 18)); // prints 36, which is the LCM of 12 and 18
  