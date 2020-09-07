/*
new objects can be created with a constructor function
like new F()
if F.prototype is an object then the new operator uses it to set 
prototype for the new object
*/
let animal = {
    eats: true
};
function Rabbit(name){
    this.name = name;
    console.log(name);
}
Rabbit.prototype = animal;
let rabbit = new Rabbit("White Rabbit");
console.log(rabbit.eats);
//When a new Rabbit is created assign its Prototype to animal

//Every function has a prototype property even if we don't supply it
function Dog(){}
console.log(Dog.prototype.constructor == Dog);
//points back to the function itself
let rabbit2 = new rabbit.constructor("BlackRabbit");

