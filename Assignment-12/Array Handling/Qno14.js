// 14. Write a js program to delete all duplicate elements from an array.
let array=[1, 2, 1, 3, 4, 2, 5, 1];
let delduplicates=[];

for (let i = 0; i < array.length; i++) {
    
    if (delduplicates.indexOf(array[i])==-1) {
        delduplicates.push(array[i])
    }
}
console.log(delduplicates);