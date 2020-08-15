//There are three logical operators in JS
// OR (||), AND (&&), NOT (!)

//OR finds the first True value
let a, b, c;
c = 1;
console.log(a || b || c);

let firstname, lastName, nickName;
nickName = "Ryan";
console.log(firstname || lastName || nickName || "Anonymous");

//EX:
console.log(console.log(1) || 2 || null);
//first print 1 because console.log does not return any value (undefined)
//thren print 2 because it converts to true

//OR processes its arguments until the first true value is reached
//then the value is returned immediately, without even touching the rest.
true || console.log("not printed");
false || console.log("printed");

//AND finds the first false value
a = null;
b = 0;
console.log(a && b && c);
//AND returns the first false value or the last value if none were found.
//Precedence of AND is higher than OR

//EX:
console.log(null || 2 && 3 || 4);
//3 because && > || thus 2 && 3 excute first = 3, || returns the first true value which is 3

//NOT returns the boolean type operand inversed value
console.log(!true);
//Double NOT !! is sometimes used for converting a value to boolean type:
console.log(!!"a string");

//Nullish coalescing operator ??
let i = null;
let j = 1;
console.log(i ?? j);
//is equivalent to:
// if(a !== null && a !== undefined){
//     console.log(a);
// }else{
//     console.log(b);
// }
console.log(firstname ?? lastName ?? nickName ?? "Anonymous");

//OR vs. ??
//Or returns the first true vale
//?? returns the first defined value
//This matters a lot when we’d like to treat null/undefined differently from 0.
let height = 0;
console.log(height ?? 100); //0 since height is already defined
//The precedence of the ?? is lower than most other operations but before = and ?

//?? is forbidden to use with && and || operators
// let x = 1 && 2 ?? 3 will throws a Syntax error
//solution to the issue:
let x = (1 && 2) ?? 3;
console.log(x);