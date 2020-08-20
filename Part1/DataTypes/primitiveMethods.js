/*
Primitives vs. Objects
A primitive:
    - is a value of a primitive type
    - there are 7 primitive types: String, number, bignit, boolean, 
      symbol, null and undefined

An object
    - is capable of storing multiple values as properties
    - can be created with {};
*/

//primitive as an object
//Object wrapper provides methods for primitive:
let str = "Hello";
console.log(str.toUpperCase());

let n = 1.234567;
console.log(n.toFixed(2));