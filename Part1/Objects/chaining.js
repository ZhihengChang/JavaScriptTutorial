//The optional chaining ?. is an error-proof way to access nested object properties
//even if an intermediate property doesn't exist

let user = { name: "Ryan" };
//the above user does not provide an addresses property
// console.log(user.address.street); //will throws an error

//or sometime we want to get an information about an element on the page
// let html = document.querySelector('.my-element').innerHTML;

//the optional chaining ?. stops the evaluation and returns undefined 
//if the part before it is undefined or null.
console.log(user?.address?.street); //undefined no error
//NOTE: ?. syntax makes option the value vefore it, but not any further
//      should only use ?. only where its ok that something doesn't exist
//      the variable before ?. must be declared.

//short circuiting
user = null;
let x = 0;
user?.sayHi(x++); //nothing happens
console.log(x); //0, not incremented

//.? also works with function and square brackets
let user1 = {
    admin(){
        console.log("True");
    }
}
let user2 = {};
user1.admin?.();
user2.admin?.();

user = { name: "Ryan" };
console.log(user?.["name"]);
console.log(user1?.["name"]);