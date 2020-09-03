const { countReset } = require("console");

//functions are objects in JS
function sayHi(){
    console.log("hello");
    sayHi.counter ++; //custom properties
}
console.log(sayHi.name);

//length:
function f1(a){};
function f2(a,b,c){};
console.log(f1.length, f2.length);

//adding custom properties to functions:
sayHi.counter = 0;
sayHi();
sayHi();
console.log(sayHi.counter);

function makeCounter(){
    function counter(){
        return counter.count++;
    }
    counter.count = 0;
    return counter;
}
let counter = makeCounter();
console.log(counter());
console.log(counter());