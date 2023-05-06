// 6. Write a js program to count total number of even and odd elements in an array.
let arr=[1,2,3,4,5,6,7,8,9]
let even=arr[0];
let odd=arr[0];

for (let i = 0; i < arr.length; i++) {
    
    if(arr[i]%2==0){
        even++
    }
    else if(arr[i]%2!==0){
    odd++
    }
}
console.log("number is even",even);
console.log("number is odd",odd);