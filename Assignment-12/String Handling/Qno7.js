// 7. Write a js program to toggle case of each character of a string.

let myString = "HeLLo, wORlD!";
let toggledString = "";

for (let i = 0; i < myString.length; i++) {
  if (myString[i] === myString[i].toLowerCase()) {
    toggledString += myString[i].toUpperCase();
  } else {
    toggledString += myString[i].toLowerCase();
  }
}

console.log(toggledString); 
