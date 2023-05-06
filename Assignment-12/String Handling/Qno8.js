// 8. Write a js program to find total number of alphabets, digits or special character in a string.
function countChars(str) {
    let alphaCount = 0;
    let digitCount = 0;
    let specialCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (/[a-zA-Z]/.test(char)) {
        alphaCount++;
      } else if (/\d/.test(char)) {
        digitCount++;
      } else {
        specialCount++;
      }
    }
    console.log(`Alphabets: ${alphaCount}`);
    console.log(`Digits: ${digitCount}`);
    console.log(`Special characters: ${specialCount}`);
  }
  const str = "Hello! 123";
  countChars(str); 
  