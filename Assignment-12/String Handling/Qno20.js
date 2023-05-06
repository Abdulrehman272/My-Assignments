// 20. Write a js program to count frequency of each character in a string.
function countCharFrequency(str) {
    let charMap = {};
  
    for (let char of str) {
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
  
    return charMap;
  }
  
  console.log(countCharFrequency("hello world")); 
  console.log(countCharFrequency("mississippi")); 
  