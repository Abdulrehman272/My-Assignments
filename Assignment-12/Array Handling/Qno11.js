// 11. Write a js program to count frequency of each element in an array.
let arr = [1, 2, 1, 3, 4, 2, 5, 1]; 
let freq = {};

for (let i = 0; i < arr.length; i++) {
  let element = arr[i];
  if (freq[element]) {
    freq[element]++;
  } else {
    freq[element] = 1;
  }
}
console.log("Frequency of each element:");
for (let key in freq) {
  console.log(key + " : " + freq[key]);
}
