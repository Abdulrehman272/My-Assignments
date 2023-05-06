// 18. Write a js program to find highest frequency character in a string.
function highestFrequencyChar(str) {
    let charMap = {};
    let maxChar = '';
    let maxCount = 0;
  
    for (let char of str) {
      if (charMap.hasOwnProperty(char)) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
  
    for (let char in charMap) {
      if (charMap[char] > maxCount) {
        maxChar = char;
        maxCount = charMap[char];
      }
    }
  
    return maxChar;
  }
  

  const myString = "hello world";
  const result = highestFrequencyChar(myString);
  console.log(result); 
  