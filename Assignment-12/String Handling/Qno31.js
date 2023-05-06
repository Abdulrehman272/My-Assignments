// 31. Write a js program to count occurrences of a word in a given string.
function countOccurrences(str, word) {
    let count = 0;
    let index = str.indexOf(word);
    while (index !== -1) {
      count++;
      index = str.indexOf(word, index + 1);
    }
    return count;
  }
  const str = "She sells seashells by the seashore";
  const word = "se";
  const occurrences = countOccurrences(str, word);
  console.log(occurrences); 
    