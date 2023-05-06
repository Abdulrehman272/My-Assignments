//11. Write a JavaScript function to print all the methods in an JavaScript object.

// Test Data :

// console.log(all_properties(Array));

// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

function getAllMethods(obj) {
  const props = Object.getOwnPropertyNames(obj);
  return props.filter(function(prop) {
    return typeof obj[prop] === 'function';
  });
}

  

console.log(getAllMethods(Array)); 
// Output: ["from", "of", "isArray", ...and so on]

