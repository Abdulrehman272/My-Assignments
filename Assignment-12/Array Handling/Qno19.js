// 19. Write a js program to sort array elements in ascending or descending order.
let array=[2,1,9,5,6,3,8]

array.sort(function(a,b){
    return a-b
})
console.log(array);
array.sort(function(a,b){
    return b-a
})
console.log(array);