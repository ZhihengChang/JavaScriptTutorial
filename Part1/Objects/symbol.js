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
let user = { name: "Ryan" };
let userId = Symbol("id");
user[userId] = 1;
console.log(user[userId]);
// console.log(user["userId"]); //Error
