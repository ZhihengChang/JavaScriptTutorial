/*
The {} syntax allows to create one object
when we need to create many similar objects, 
we need to use constructor and the new operator
*/

/*
constructor function
1. they are named with capital letter first
2. they should be executed only with "new" operator
*/
function User(name){
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Ryan");
console.log(user.name);
console.log(user.isAdmin);

/*
when a function is executed with new, it does the following steps:
1. A new empty object is created and assigned to this.
2. The function body executes. Usually it modifies this, adds new properties to it.
3. The value of this is returned.
*/
//something like this:
// function newUser(name){
//     this = {};
//     this.name = name;
//     this.isAdmin = false;
//     return this;
// }

//NOTE: If we have many lines of code all about creation of a single complex object, 
//we can wrap them in constructor function
let person = new function(){
    this.name = "Jhon"
    //other code for user creation
    //maybe complex logic and statements
    //local variables etc
}

//constructor mode test
//user new.target to check whether the function is called with new
function test(){
    console.log(new.target);
}
test();
new test();

/*
usually constructors do not have a return statement
if there is a return statement, then the rule is:
1. If return is called with an object, then the object is returned instead of this.
2. If return is called with a primitive, it’s ignored.
*/

function AnotherUser(){
    this.name = "Ann";
    return {name: "overwrite name"};
}
console.log(new AnotherUser().name);

function IgnoredUser(){
    this.name = "Mary";
    return "Tom";
}
console.log(new IgnoredUser().name);

//NOTE: we can omit () after new if there is no arguments
//but not recommanded
let example = new AnotherUser;
//NOTE: constructors can also include object methods


