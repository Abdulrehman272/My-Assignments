// 30. Write a js program to search all occurrences of a word in given string.
function findAllOccurrences(str, word) {
    const indices = [];
    let index = str.indexOf(word);
    while (index !== -1) {
      indices.push(index);
      index = str.indexOf(word, index + 1);
    }
    return indices;
  }

  const str = "She sells seashells by the seashore";
const word = "se";
const occurrences = findAllOccurrences(str, word);
console.log(occurrences); 
