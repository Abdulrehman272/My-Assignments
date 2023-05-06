// 29. Write a js program to find last occurrence of a word in a given string.
function findlastOccurence(str,word) {
    index=str.lastIndexOf(word)

    if(index==-1){
        return null;
    }
    else{
        return index;
    }
}
let str="The quick brown fox jumps over the lazy dog"
let word="over"
let lastOccurence=findlastOccurence(str,word)
console.log(lastOccurence);