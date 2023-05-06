// 38. Write a js program to remove all extra blank spaces from given string.
const str = "  Hello,    world!   ";
const trimmedStr = str.replace(/\s+/g, ' ').trim();
console.log(trimmedStr); // Output: "Hello, world!"
