// 4. Write a js program to find maximum and minimum element in an array.
let array=[5,2,8,6,6,1]
let max=array[0];
let min=array[0];

for (let i = 0; i < array.length; i++) {
    if (array[i]>max) {
        max=array[i]
    }
    else if(array[i]<min){
        min=array[i]
    }
}
console.log("maximum is",max ,"and","minimum is",min);