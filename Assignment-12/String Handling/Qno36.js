// 36. Write a js program to trim trailing white space characters from given string.
function trimTrailingWhiteSpace(str) {
    let i = str.length - 1;
    while (str[i] === " ") {
      i--;
    }
    return str.slice(0, i + 1);
  }
  const str = "Hello, World!     ";
  const newStr = trimTrailingWhiteSpace(str);
  console.log(newStr); 
    