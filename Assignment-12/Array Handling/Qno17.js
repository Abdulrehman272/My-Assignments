// 17. Write a js program to put even and odd elements of array in two separate array.
let array= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let even=array[0]
let odd=array[0]
let evenarray=[]
let oddarray=[]

for (let i = 0; i < array.length; i++) {
   if(array[i]%2==0){
  
    evenarray.push(array[i])
   }
   else if(array[i]%2 !==0){
     
     oddarray.push(array[i])
 } 
 
}
console.log("the number is even ",evenarray,"the number is odd",oddarray);

