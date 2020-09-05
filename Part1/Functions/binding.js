/*
sometimes functions lost 'this' when methods are passed
somewhere separately from the object
*/
let person = {
    name: "John",
    sayHi() {
      console.log(`${this.name}: Hello!`);
    }
};
setTimeout(person.sayHi, 1000); //Error, undefined name

//solution to the problem:
//wrapper:
setTimeout(()=>person.sayHi(), 1000);
//bind:
//let boundFunc = func.bind(context)
//called func with fixed this:
user = { name: "Jhon"};
function func(){
    console.log(this.name);
}
let funcPerson = func.bind(user);
funcPerson();

//Partial functions:
//let bound = func.bind(context, [arg1], [arg2], ...);
function sum(a, b){
    return a + b;
}
let addOne = sum.bind(null, 1);
//fixing null as context and 1 as the first argument
console.log(addOne(3));
console.log(addOne(4));

let addOneToThree = sum.bind(null, 1, 3);
console.log(addOneToThree());
