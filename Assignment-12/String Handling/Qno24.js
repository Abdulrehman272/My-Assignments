// 24. Write a js program to remove all repeated characters from a given string.
let str="hello world"
let chartoremove="l"
let newstr=""

for (let i =0 ;i < str.length;i++) {
   if(str[i] !== chartoremove){
    newstr+=str[i]
   }
    
}
console.log(newstr);