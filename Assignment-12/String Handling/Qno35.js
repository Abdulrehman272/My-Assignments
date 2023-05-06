// 35. Write a js program to trim leading white space characters from given string.
function trimLeadingWhiteSpace(str) {
    let i = 0;
    while (str[i] === " ") {
      i++;
    }
    return str.slice(i);
  }
  const str = "     Hello, World!";
const newStr = trimLeadingWhiteSpace(str);
console.log(newStr); 
