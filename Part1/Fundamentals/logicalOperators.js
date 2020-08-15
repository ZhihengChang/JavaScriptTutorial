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

//NOT returns the boolean type operand inversed value
console.log(!true);
//Double NOT !! is sometimes used for converting a value to boolean type:
console.log(!!"a string");
