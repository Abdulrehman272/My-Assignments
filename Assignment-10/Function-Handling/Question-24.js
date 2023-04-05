
// 24. Write a JavaScript program to find maximum and minimum elements in array using function.



function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      } else if (arr[i] > max) {
        max = arr[i];
      }
    }
    return [min, max];
  }
  
  // Example usage:
  let array = [10, 5, 25, 30, 15];
  let [min, max] = findMinMax(array);
  console.log(`Minimum element is: ${min}`);
  console.log(`Maximum element is: ${max}`);
  