// 13. Write a JavaScript function to retrieve all the names of object's own and inherited properties
function namesOfObject(obj) {
    return Object.keys(obj)
}
    
const person={
    Name:"hassan",
    class:10,
    Gender:"male"

}
keys= namesOfObject(person)
console.log(keys);