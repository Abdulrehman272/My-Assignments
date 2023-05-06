// 13. Write a js program to count total number of duplicate elements in an array.
let arr = [1, 2, 1, 3, 4, 2, 5, 1]; 
let duplicates = [];
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (duplicates.indexOf(arr[i]) === -1) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
        count++;
        break;
      }
    }
  }
}

console.log("Total number of duplicate elements in the array: " , count);
