/*
prototype methods:
- Object.create(proto, [descriptors])
    creates an empty object with given proto as [[Prototype]] 
    and optional property descriptors

- Object.getPrototypeOf(obj)
    returns the [[Prototype]] of obj

- Object.setPrototypeOf(obj, proto)
    sets the [[Prototype]] of obj to proto

NOTE: above methods should be used instead of __proto__
*/
let animal = {
    eats: true
};
let rabbit = Object.create(animal);
console.log(rabbit.eats);
console.log(Object.getPrototypeOf(rabbit) === animal);
//change the prototype of rabbit to {}
Object.setPrototypeOf(rabbit, {});

//optional second argument: property descriptors
rabbit = Object.create(animal, {
    jumps:{
        value: true
    }
});
console.log(rabbit.jumps);

//use Object.create to clone:
let clone = Object.create(
    Object.getPrototypeOf(rabbit),
    Object.getOwnPropertyDescriptor(rabbit)
);