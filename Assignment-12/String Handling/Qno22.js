// 22. Write a js program to remove last occurrence of a character from string.
function removeFirstChar(str, char) {
    const index = str.lastIndexOf(char);
  
    if (index !== -1) {
      return str.slice(0, index) + str.slice(index + 1);
    }
  
    return str;
  }
  console.log(removeFirstChar("hello world", "l")); 
  console.log(removeFirstChar("hello world", "x")); 