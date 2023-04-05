// Write a JavaScript program to check whether a number is palindrome or not using function.


function isPalindrome(num) {
    let reversedNum = 0;
    let originalNum = num;
  
    while (num > 0) {
      reversedNum = (reversedNum * 10) + (num % 10);
      num = Math.floor(num / 10);
    }
  
    return originalNum === reversedNum;
  }
  
  // Example usage
  console.log(isPalindrome(12321)); // prints true, since 12321 is a palindrome
  console.log(isPalindrome(12345)); // prints false, since 12345 is not a palindrome
  