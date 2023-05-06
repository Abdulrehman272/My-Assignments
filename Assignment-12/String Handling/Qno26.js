// 26. Write a js program to replace last occurrence of a character with another in a string.
let inputStr = 'Hello World';
const charToReplace = 'l';
const charToReplaceWith = 'x';

const index = inputStr.lastIndexOf(charToReplace);
if (index !== -1) {
  inputStr = inputStr.slice(0, index) + charToReplaceWith + inputStr.slice(index + 1);
}

console.log(inputStr); // Output: 'Hello Worxd'
