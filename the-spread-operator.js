/**
 * To run this file in Gitpod, use the 
 * command node the-spread-operator.js in the terminal
 */

// No spread operator
let array1 = [1, 2, 3];
let array2 = array1;
array2.push(4);
console.log("Second array:", array2);
console.log("first array:", array1);

// Copying an array
let array3 = [4, 5, 6];
let array4 = [...array3];

array4.push(7);
console.log("third array:", array3);
console.log("fourth array:", array4);

// Copying an object
let object1 = {a: 1, b: 2, c: 3 };
let object2 = {...object1, d: 4};
let object3 = {...object1, b: 5};
console.log("first object:", object1);
console.log("second object:", object2);
console.log("third object:", object3);

// Copying only part of an array/object
let array5 = [...array1, {object1}, array3, 'x', 'y', 'z'];
console.log(array5);
