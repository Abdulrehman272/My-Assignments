// 21. Write a js program to left rotate an array.
let array=[1,2,3,4,5]
let n=3

for (let i = 0; i < n; i++) {
   let temp=array.shift();
   array.push(temp);
    
}
console.log(array);