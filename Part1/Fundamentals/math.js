//Operand:
let expression = 5 * 2
//in the above expression left operand is 5 and right operand is 2

//An operator is unary if it has a single operand
//Example:
let number = 1;
let negativeNumber = -number; //unary negation

//An operator is binary if it has two operands
//Example:
let x = 1, y = 2;
console.log(y - x); // binary minus

//In Javascript the following math operations are supported:
// +, -, *, /
//remainder %, exponentiation **

//Remainder example:
console.log(5 % 2); //5 / 2 = 2 remainder is 1
//Exponentiation example:
console.log(2 ** 2); //2 ^ 2 = 4

//String concatenation with binary +
console.log("Hello " + "world");
//NOTE: if any ot the operands is a string, then the other one is converted to a string too
console.log(1 + "2");
//Operators work one after another so:
console.log(2 + 2 + "1"); //is "41" not "221"

//However, other arithmetic operators work only with numbers
console.log("6" - "2");
console.log("6" / "2");

//Plus operator "+" can also be used in unary form
//When unary + applies to numbers it doesn't do anything:
let z = -2;
console.log(+x);
console.log(+z);
//When applies to other values, it converts it to number:
console.log(+true);
console.log(+"");

//Sum two string of numbers:
let num1 = "2", num2 = "3";
console.log(+num1 + +num2);//Note that num1 + num2 will return 23 instead of 5

/*
Operator precedence
               ...
17          unary plus          +
17          unary negation      -
16          exponentiation      **
15          multiplication      *
15          division            /
13          addition            +
13          subtraction         -
               ...
3           assignment          =
               ...
*/

//Assignment = returns a value
let a = 1, b = 2;
let c = a + b;
console.log(c);
let d = 3 - (a = b + 1);
//a is re-assigned as the value of b + 1 which is 3
console.log(d);

//Chaining assignments
let i, j, k;
i = j = k = 2 + 2;
console.log(i, j, k);

//Modify-in-place
i = i + 1; //shortened: i += 1;
console.log(i);

//Increment and decrement
//NOTE: only works on variable, can be apply to value directly
let counter = 3;
counter++ //return conter value before increment 
console.log(counter);
counter-- //return conter value before decrement
console.log(counter);

//increament and decrement before the variable 
//will return the conter after the calculation
console.log(++counter);

//Increment decrement among other operators
counter = 3;
console.log(2 * ++counter); // 4
counter = 3;
console.log(2 * counter++); 
// 2 because counter ++ returns the counter value before the increament

/*
Bitwise operators
AND         &
OR          |
XOR         ^
NOT         ~
LEFT SHIFT  <<
RIGHT SHIFT >>
ZERO-FILL RIGHT SHIFT >>>
*/
