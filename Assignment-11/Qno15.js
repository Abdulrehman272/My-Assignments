// 15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.

function entriesKeyvalues(obj) {
    return Object.entries(obj)
}
const person={
    name:"Ali",
    age: 21,
    callification:"BSCS",

}

values =  entriesKeyvalues(person)
console.log(values);