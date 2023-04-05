// 3. Write a JavaScript program to find maximum and minimum between two numbers using
// functions.

function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
  }
  
  function findMin(num1, num2) {

    return num1 < num2 ? num1 : num2;
  }
  
  let num1 = 30;
  let num2 = 20;
  
  let max = findMax(num1, num2);
  let min = findMin(num1, num2);
  
  console.log(`Maximum between ${num1} and ${num2} is ${max}`);
  console.log(`Minimum between ${num1} and ${num2} is ${min}`);
  