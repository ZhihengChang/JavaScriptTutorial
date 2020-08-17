/*
Objects are used to store keyed collections of various data 
and more complex entities.

An object can be created with figure brackets {}
with an optional list of properties.

A property is a key:value pair where key is a string 
and value can be anything
*/

//creating an empty object
let emptyObject = new Object(); // object constructor syntax
let anotherOne = {}; //object literal syntax

//literals and properties
let user = {            //an object
    username: "Ryan",   //by key username store value Ryan
    password: "123"     //by key password store value 123
};

//property values are accessible using .
console.log(user.username);
console.log(user.password);

//The value can be of any type
//adding a property:
user.isAdmin = true;
console.log(user.isAdmin);

//use delete operator to remove a property
delete user.password;
console.log(user.password);

//multiword property names must be quoted:
let Admin = {
    "System Settings" : true
}

//Note: an object declared as const, its content can be modified
const box = {
    inside: "nothing"
}
box.inside = "dog";
console.log(box.inside);

//For multiword properties, the dot access doesn't work
console.log(Admin["System Settings"]);

//computed properties
let fruit = "Apple";
let bag = {
    [fruit]: 5
};
console.log(bag.Apple);

//same as:
let anotherBag = {};
anotherBag[fruit] = 5;
console.log(anotherBag.Apple);

//Property value shortHand
function makeUser(username, password){
    return {
        username: username,
        password: password
    };
}
let anotherUser = makeUser("Jhon", "345");
console.log(anotherUser.username);

//instead of username : username we can:
function makeUser2(username, password){
    return {
        username,
        password
    };
}

/*
NOTE: there is no limitation to the property name
They can be any strings or symbols 
(a special type for identifiers, to be covered later).
Other types are automatically converted to strings.
*/

//check the existence of a property:
console.log("isAdmin" in anotherUser);
let key = "username";
console.log(key in anotherUser);

//However when the value is undefined the in operator still returns true
//because the property exist
anotherUser.isAdmin = undefined;
console.log(anotherUser.isAdmin);
console.log("isAdmin" in anotherUser);

//for in loop
for(key in user){
    console.log(key + " : " + user[key]);
}

//NOTE: integer properties are sorted, other appear in creation order
let codes = {
    "39" : "thirty nine",
    "56" : "fifty six",
    "25" : "twenty five",
    "10" : "ten",
    "72" : "seventy two"
}
for(let code in codes){
    console.log(code);
}
console.log();
console.log();
