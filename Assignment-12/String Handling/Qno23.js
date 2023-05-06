// 23. Write a js program to remove all occurrences of a character from string.
let str="Aslamu-Alaikum"
let chartoremove="l"
let newstr=""

for (let i =0 ;i < str.length;i++) {
   if(str[i] !== chartoremove){
    newstr+=str[i]
   }
    
}
console.log(newstr);