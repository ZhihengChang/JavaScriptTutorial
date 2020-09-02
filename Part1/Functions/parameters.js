//Arbitrary number of arguments:
//rest parameters ...
function sumAll(...args){
    let sum = 0;
    for(let arg of args) sum += arg;
    return sum;
}
console.log(sumAll(1,2,3,4,5));
//NOTE: ...args turns into array, so args[index] works
//      the ...rest parameters must be at the end

//The arguments variable:
function showParam(){
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[1]);
}
showParam();
showParam("hello");
showParam("hello","world");
//NOTE: arrow functions do not have arguments

//spread syntax:
let arr = [1,2,3,4,5];
console.log(Math.max(arr)); //NaN
console.log(Math.max(...arr)); //spread syntax -> max(1,2,3,4,5);

//spread syntax can be used to merge arrays:
let a = [1,2];
let b = [3,4,5];
let merged = [0, ...a, ...b, 6, 7];
console.log(merged);
//NOTE: any interable can use spread syntax
let str = "hello";
console.log([...str]);