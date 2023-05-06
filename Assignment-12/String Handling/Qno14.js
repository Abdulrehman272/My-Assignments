// 14. Write a js program to find first occurrence of a character in a given string.
const str = "Hello World";
const char = "o";

const index = str.indexOf(char);

if (index !== -1) {
  console.log(`The first occurrence of ${char} is at index ${index}`);
} else {
  console.log(`The character ${char} is not found in the string`);
}
