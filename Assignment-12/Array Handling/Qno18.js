// 18. Write a js program to search an element in an array

let array=[1,2,3,4,5,6]
let elemenettofind=4;

let index=array.indexOf(elemenettofind)

if (index!==-1) {
    console.log("Element found at index ",index);
} else {
    console.log("element not find");
}