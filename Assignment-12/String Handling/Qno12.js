// 12. Write a js program to check whether a string is palindrome or not.

const str = "racecar";
const reversedStr = str.split("").reverse().join("");

if (str === reversedStr) {
  console.log(`${str} is a palindrome`);
} else {
  console.log(`${str} is not a palindrome`);
}
