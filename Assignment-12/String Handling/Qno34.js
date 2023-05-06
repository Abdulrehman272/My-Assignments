// 34. Write a js program to remove all occurrence of a word in given string.
function removeAllOccurrences(str, word) {
    return str.split(word).join("");
  }
let str="She sells seashells by the seashore"
let word="se"
let newstr=removeAllOccurrences(str,word);
console.log(newstr);  