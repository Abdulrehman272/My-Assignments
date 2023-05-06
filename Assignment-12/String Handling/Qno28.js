// 28. Write a js program to find first occurrence of a word in a given string.

function Findfirstoccurance(str,word){
    let index=str.indexOf(word)

    if(index==-1){
        return null;
    }
    else{
        return index;
    }
}
let str= "The quick brown fox jumps over the lazy dog";
let word="quick";
let Firstoccurance= Findfirstoccurance(str,word);
console.log(Firstoccurance);