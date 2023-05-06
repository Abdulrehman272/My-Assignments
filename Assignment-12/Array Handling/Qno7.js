// 7. Write a js program to count total number of negative elements in an array.
let arr=[1,-3,5,-9,6,-8,-9,-2,5,7]
let negcount=0;

for (let i = 0; i < arr.length; i++) {
  if(arr[i]<0){
    negcount++
  }
    
}
console.log(negcount);