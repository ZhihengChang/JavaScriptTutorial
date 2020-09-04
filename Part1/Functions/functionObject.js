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

//NFE: named function expression
let sayHello = function func(who){
    if(who){
        console.log(`Hello, ${who}`);
    }else{
        func("Guest");
    }
};
//NOTE: adding a name doesn't break anything
//      the function is still available as sayHello()
//NFE allows the function to reference itself internally: call itself
//it is not visible outside of the function