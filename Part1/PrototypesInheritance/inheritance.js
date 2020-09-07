/*
In JS, objects have a special hidden property [[Prototype]]
its either null or references another object
that object is called a prototype
*/
let animal = {
    eats: true,
    walk(){
        console.log("Animal walk");
    }
};
let rabbit = {
    jumps: true
};
rabbit.__proto__= animal;
//if we look for a property in rabbit and its missing,
//JS automatically takes it from animal
console.log(rabbit.eats);
rabbit.walk();

//The prototype chain can be long:
let longEar = {
    earLength: 10,
    __proto__: rabbit
}
longEar.walk();
console.log(longEar.jumps);
//NOTE: the references can't go in circles
//      the __proto__can be either object or null, ow ignored
//      write/delete operations work directly with object
rabbit.walk = function(){
    console.log("bounce-bounce");
};
rabbit.walk();

//However, accessor properties are an exception,
//writing use setter is working correctly
//NOTE: in this case, 'this' is always be the object before dot
let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
};
  
let admin = {
    __proto__: user,
    isAdmin: true
};
  
console.log(admin.fullName);
admin.fullName = "Alice Cooper";
console.log(admin.fullName);
console.log(user.fullName);

//for...in loop iterates over inherited properties too
console.log(Object.keys(rabbit));
for(let prop in rabbit) console.log(prop);

//filter out inherited properties:
for(let prop in rabbit){
    let isOwn = rabbit.hasOwnProperty(prop);
    if(isOwn){
        console.log(`self: ${prop}`);
    }else{
        console.log(`inherited: ${prop}`);
    }
}