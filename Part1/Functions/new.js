//new Function
//another way to create a function:
// let fuuc = new Function([arg1, arg2, ...argN], functionBody);
let sum = new Function('a', 'b', 'return a + b');
console.log(sum(1,2));

let sayHello = new Function('console.log("hello")');
sayHello();
//NOTE: functions are created from a string
//these functions doesn't have access to outer variables, only to the global ones
function getFunc(){
    let value = 1;
    let func = new Function('console.log(value');
    return func;
}
// getFunc(); //Error, value is not defined