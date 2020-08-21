/*
There are two types of numbers in JS:
- Regular numbers: double precision floating point numbers
- Bigint numbers to prepresent integers of arbitrary length
*/
let billion = 1000000000
//shorthand
billion = 1e9;
console.log(billion);
//in other words, 'e' multiplies the number by 1 with the given zeroes count
//1e3 = 1 * 1000;
//1.23e6 = 1.23 * 1000000;

let ms = 0.000001;
//shorthand
ms = 1e-6;

//hex, hinary and octal numbers
//hexadecimal followed by 0x (ff = 255)
console.log(0xff);

//binary form 
let a = 0b11111111;
console.log(a);
//octoal
let b = 0o377;
console.log(b);

//The method num.toString(base) returns a string representation
//of num in the numeral system with the given base
let num = 255;
console.log(num.toString(16));
console.log(num.toString(2));
//NOTE: to call method directly on a number like toString use ..toString()

//Rounding 
/*
- Math.floor: Rounds down
- Math.ceil: Rounds up
- Math.round: Rounds to the nearest integer
- Math.trunc: removes anything after the decimal point without rounding
*/

//if the number exceed  64-bit storage, potentially giving an infinity
console.log(1e500);

//Imprecise calculations
console.log( 0.1 + 0.2 == 0.3 );
//NOTE: use toFixed or *100 to fix this problem

//isFinite and isNAN
//isNaN converts its argument to a number and then tests it for being NaN
console.log(isNaN(NaN));
console.log(isNaN("str"));
//Why need isNaN? can't we just NaN === NaN?
console.log(NaN === NaN);

//isFinite converts its argument to a number and returns true
//if its a regular number not NaN/Infinity/-Infinity
console.log(isFinite("1"));

//parseInt and parseFloat
console.log(parseInt("12m34e1"));
console.log(parseInt("12 34"));
console.log(parseFloat("12.3.4"));
//will fail when the first symbol is not number:
console.log(parseInt("a1234"));

//other math functions:
/*
Math.random: returns a random number from 0-1
Math.max/min
Math.pow
...
*/
