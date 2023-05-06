// 21. Write a js program to remove first occurrence of a character from string.
function removeFirstChar(str, char) {
    const index = str.indexOf(char);
  
    if (index !== -1) {
      return str.slice(0, index) + str.slice(index + 1);
    }
  
    return str;
  }
  console.log(removeFirstChar("hello world", "l")); 
  console.log(removeFirstChar("hello world", "x")); 
  