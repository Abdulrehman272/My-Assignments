//16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.

function functionObject(obj) {
    const entries={}
    for(const key in obj){
    entries[obj[key]]=key
    }
    return entries
}

let  obj={
    name:"Ahmad",
    city:"Faisalabad",
    gender:"Male",
}
values=functionObject(obj);
console.log(values);