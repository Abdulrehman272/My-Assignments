// 27. Write a js program to replace all occurrences of a character with another in a string.
function replaceAllChars(str, charToReplace, charToReplaceWith) {
    return str.split(charToReplace).join(charToReplaceWith);
  }
  
  
  const inputStr = 'Hello World';
  const charToReplace = 'l';
  const charToReplaceWith = 'x';
  console.log(replaceAllChars(inputStr, charToReplace,charToReplaceWith));
  