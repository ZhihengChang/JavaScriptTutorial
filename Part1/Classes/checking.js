//Class checking: instanceof
//instanceof operator allows to check whether an object belongs to a certain class
//it also takes inheritance into account
class Rabbit {}
let rabbit = new Rabbit();
console.log(rabbit instanceof Rabbit);

//it also works with constructor functions:
function Dog() {}
console.log(new Dog() instanceof Dog);

//and built in classes:
let arr = [1, 2, 3];
console.log(arr instanceof Array);

//custom instanceof:
class Animal{
    static [Symbol.hasInstance](obj){
        if(obj.canEat) return true;
    }
}
let obj = {canEat: true};
console.log(obj instanceof Animal);