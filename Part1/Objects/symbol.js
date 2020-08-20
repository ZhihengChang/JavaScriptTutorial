//Symbol type represent a unique identifier
//created using Symbol()
let id = Symbol("id");
//id is a symbol with the description "id"

/*
symbols are guaranteed to be unique. 
Even if we created many symbols with teh same description
they are different values. The description is just a label that doesn't affect anything
*/

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2); //false
//NOTE: Most values in JS support implicit conversion to String
//      Symbols are special. They do not auto-convert
// console.log(id) //TypeError
console.log(id.toString());

//get description
console.log(id.description);

//Hidden properties
/*
Symbols allow us to create “hidden” properties of an object, 
that no other part of code can accidentally access or overwrite.
*/
let user = { name: "Jhon" };
let userId = Symbol("id");
user[userId] = 1;
console.log(user[userId]);
// console.log(user["userId"]); //Error

//Symbols in an object literal
let user2 = {
    name: "Ryan",
    [id]: 123 //not "id": 123
}

//Symbolic properties do not participate in for in loop
user2.age = 21; //name, age, symbol id
for(let key in user2) console.log(key); //name age
console.log(Object.keys(user2));
//the direct access by the symbol works
console.log(user2[id]);

//however object.assign copies both string and symbol properties:
let clone = Object.assign({},user2);
console.log(clone[id]);

//Global symbols
let gobalId = Symbol.for("id");
// if the symbol did not exist, it is created
let idAgain = Symbol.for("id");
console.log(gobalId === idAgain);

//Symbol.keyFor(sym) returns a name by a global symbol
console.log(Symbol.keyFor(gobalId));
//it doesn't work for non-global symbols:
console.log(Symbol.keyFor(userId));
