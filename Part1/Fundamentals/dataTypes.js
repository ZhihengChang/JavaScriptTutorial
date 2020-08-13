//Javascript is dynamically typed" which means there exist data types but variables are not bond to them
let message = "hello";
message = 123;

let n = 456;
n = 4.56;

//In Javascript there is 3 special numeric values: Infinity, -Infinity, and NaN
console.log(1/0);
console.log(Infinity);

//NaN represent computation error
console.log("String"/2);
//note in Javascript there is no character char type
console.log('A'/10);

//the bigest number in js:
let biggest = 9007199254740991; //which is 2^53-1, smallest is -(2^53-1)
//BigInt is created by appending n at the end of the number
let bigInt = 1234567890123456789012345678901234567890n
console.log(bigInt);

//In Javascript there is 3 types of qoutes of string
let str1 = "hello 1";
let str2 = 'hello 2';
let str3 = `hello 3`;
console.log(str1, str2, str3);

//Backticks are “extended functionality” quotes. 
//It allows to embed variables and expressions into a string by wrapping them in ${…}
let name = "Ryan";
console.log(`Hello ${name}`);

//Boolean in Javascript:
let isTrue = true;
let isFalse = false;
let isGreater = 4 > 1;
console.log(isGreater);

//In JavaScript, null is not a “reference to a non-existing object” or a “null pointer” like in some other languages.
//It’s a special value which represents “nothing”, “empty” or “value unknown”.
let unknown = null;
console.log(unknown);

//There is also an 'undefined' in Javascript. It means 'value is not assigned'
let age;
console.log(age);
//undefined can be assigned to a variable
age = 21;
age = undefined;
console.log(age);

//typeof or typeof() 
//former is as operator and later is as function. They are used to check data types
console.log(typeof 21);
console.log(typeof(bigInt));
console.log(typeof Math);