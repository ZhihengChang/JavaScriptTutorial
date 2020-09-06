//Objects store properties
/*
Object properties besides a value have three special attributes
flags:
- writable      if true, the value can be changed, read-only ow
- enumerable    if true, then listed in loops, ow not listed
- configurable  if true, the property can be deleted and these 
                attributes can be modified ow not
*/
//Syntax:
//let descriptor = Object.getOwnPropertyDescriptor(obj, propertyName)
let user = { name: "Jhon" };
let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));
//returned property descriptor object: contains value and all the flags

//to chang the flags:
//Object.defineProperty（obj, propertyName, descriptor)
user = {};
Object.defineProperty(user, "name", {value: "John"});
descriptor = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(descriptor, null, 2));
//name is created with all false flags

user = {};
Object.defineProperty(user, "name", {writable: false});
// user.name = "Pete"; //Error read only

//Non-enumerable
user = {
    name: "John",
    toString() {
      return this.name;
    }
};
for (let key in user) console.log(key);
//set enumerable to false:
Object.defineProperty(user, "toString", {enumerable: false});
for (let key in user) console.log(key);
//toString disappears

//Non-configurable: property can not be deleted
descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log( JSON.stringify(descriptor, null, 2 ) );
//cant change the value of pi or overwrite or delete it
//NOTE: once made a property non-configurable, can not change it back
/*
non-configurable restriction:
- Can’t change configurable flag.
- Can’t change enumerable flag.
- Can’t change writable: false to true (the other way round works).
- Can’t change get/set for an accessor property (but can assign them if absent).
*/

//definie properties all at once:
/*
Object.defineProperties(obj, {
  prop1: descriptor1,
  prop2: descriptor2
  // ...
});
*/
user = {};
Object.defineProperties(user, {
    name: { value: "John", writable: false },
    age: { value: 21, writable: false },
    isAdmin: {value: false, writable: false}
});
console.log(Object.values(user));
