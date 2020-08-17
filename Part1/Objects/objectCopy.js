'use strict';
//Object copying 
//Objects are stored and copied by reference 
//Primitive values are assigned/copied as a whole value
let user = { 
    username: "Ryan",
    canEdit: true
};
let admin = user;
console.log(user.username);
user.username = "Jhon";
console.log(user.username);

//the == and strict equality === for objects work exactly the same
let a = {};
let b = a;
console.log(a==b);
console.log(a===b);

let c = {};
console.log(a==c); //return false because they are two independent objects

//"clone" an object
let userCopy = {};
for(let key in user){
    userCopy[key] = user[key];
}
userCopy.username = 'Mary';
console.log(userCopy.username);

//Merge multiple object
let permissions1 = { canView: true };
let permissions2 = { canEdit: false };
//assign(dest, [src1], [src2], ... [srcN])
Object.assign(user, permissions1, permissions2);
//NOTE: if property name already exists, it gets overwritten
console.log(user.canEdit);

//Object.assign can be used to replace for in loop for cloning object
let anotherCopy = Object.assign({}, user);
console.log()