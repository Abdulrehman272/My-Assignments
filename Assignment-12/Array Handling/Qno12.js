// 12. Write a js program to print all unique elements in the array.
let array= [1, 2, 1, 3, 4, 2, 5, 1];
let unique=[]

for (let i = 0; i < array.length; i++) {
    if (unique.indexOf(array[i])==-1) {
        unique.push(array[i]);
    }
}
console.log(unique);