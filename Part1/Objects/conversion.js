'use strict';
/*
Object to primitive conversion

-   object are true in a boolean context. 
-   There are only numeric and string conversions
-   The numeric conversion happens when we subtract objects 
    or applying mathematical functions
-   As for string conversion, it usually happens when we outputing objects
*/

//ToPrimitive
//For an object-to-string conversion, 
//when we're doing an operation on an object that expexts a string:
let user = { name: "Ryan" };
console.log(user);
let anotherUser = {};
anotherUser[user] = 123;
console.log(anotherUser);

//For an object-to-number conversion:
let id = { id: 123};
let anotherId = { id: 456};

//Number() explicit conversion
let num = Number(id);
console.log(num);

//maths, unary plus
console.log(+id);
let delta = anotherId - id;
console.log(delta);

//comparison:
let greater = anotherId > id;

//default
/*
Occurs in rare cases when the operator is not sure what type to expect
for instance, binary plus + can work both with strings (concatenates them)
and numbers (adds them), so both strings and numbers would do.
if binary plus gets an object as an argument it uses the default hint
*/
let total = id + anotherId;

//Symbol.toPrimitive
let person = {
    name: "Jhon",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        console.log(`hint: ${hint}`);
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    }
};

console.log(person);
console.log(+person);
console.log(person + 500);

/*
if there's no symbol.toPrimitive then JS tries to find them and try in order:
toString -> valueOf for string hint
valueof -> toString otherwise

These method must returns a primitive value. 
if they return an object then they are ignorred

by Default, a plain object has toString and valueOf methods:
- toString method returns a string "[object Object]".
- valueOf returns the object itself
*/
console.log(user);
console.log(user.valueOf() === user);

user = {
    name: "Ryan",
    age: 21,

    toString() {
        return this.name;
    },

    valueOf() {
        return this.age;
    }
}

console.log(user);
console.log(+user);
console.log(user+1);