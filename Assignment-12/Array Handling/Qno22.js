// 22. Write a js program to right rotate an array.
let arr = [1, 2, 3, 4, 5]; 
let n = 3; 

for (let i = 0; i < n; i++) {
  let temp = arr.pop();
  arr.unshift(temp);
}

console.log(arr);
