// 33. Write a js program to remove last occurrence of a word in given string.

let str = "She sells seashells by the seashore";
let word = "se";
let index = str.lastIndexOf(word);
let newStr = str;
if (index !== -1) {
  newStr = str.slice(0, index) + str.slice(index + word.length);
}
console.log(newStr); 
