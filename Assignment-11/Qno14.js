// 14. Write a JavaScript function to retrieve all the values of an object's properties.
function valuesOfobject(obj) {
    return Object.values(obj)
}
 const person={
    Name:"Haseeb",
    Age: 19,
    gender: "male",
 }
 let values=valuesOfobject(person)
 console.log(values);