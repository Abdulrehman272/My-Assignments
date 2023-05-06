// 16. Write a js program to search all occurrences of a character in given string. 
const str = "Hello World";
const char = "l";

const indexes = [];
for (let i = 0; i < str.length; i++) {
  if (str.charAt(i) === char) {
    indexes.push(i);
  }
}
if (indexes.length > 0) {
  console.log(`The character ${char} is found at indexes ${indexes}`);
} else {
  console.log(`The character ${char} is not found in the string`);
}
