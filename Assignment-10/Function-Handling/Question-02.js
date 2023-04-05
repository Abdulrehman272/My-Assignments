// 2. Write a js program to find diameter, circumference and area of circle using functions.


// formula of diameter: d = 2r

function diameter(r) {
    return 2 * r;
}
console.log("diameter of circle is :", diameter(90))

// formula of circumference: C = 2πr

function circumference(r) {
    let pi = 3.14159;
    return 2 * pi * r;
}
console.log("circumference of circle is :", circumference(90))

// formula of area: C = πr2

function area(r) {
    let pi = 3.14159;
    return pi * r * r;
}
console.log("area of circle is :", area(90))