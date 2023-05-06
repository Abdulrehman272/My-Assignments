// 25. Write a js program to replace first occurrence of a character with another in a string.
let inputStr = 'Hello World';
const charToReplace = 'l';
const charToReplaceWith = 'x';


const index = inputStr.indexOf(charToReplace);
if (index !== -1) {
  const start = inputStr.slice(0, index);
  const end = inputStr.slice(index + 1);
  inputStr = start + charToReplaceWith + end;
}

console.log(inputStr); 
