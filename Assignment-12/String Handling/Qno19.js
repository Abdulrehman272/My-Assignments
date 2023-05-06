// 19. Write a js program to find lowest frequency character in a string.
function lowestFrequencyChar(str) {
    let charMap = {};
    let minChar = str[0];
    let minCount = Infinity;
  
    
    for (let char of str) {
      charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
    }
  
   
    for (let char in charMap) {
      if (charMap[char] < minCount) {
        minChar = char;
        minCount = charMap[char];
      }
    }
  
    return minChar;
  }
  
  
  console.log(lowestFrequencyChar("hello world")); 
  console.log(lowestFrequencyChar("mississippi")); 
  