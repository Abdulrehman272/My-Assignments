// Write a JavaScript program to find sum of elements of array using function.



function arraySum(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  var myArray = [2, 4, 6, 8, 10];
  var result = arraySum(myArray);
  console.log(result); // Output: 30
  