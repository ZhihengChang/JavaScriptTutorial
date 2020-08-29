//Destructuring assignments alow us to unpack arrays or objects
//into a bunch of variables:
let arr = ["Ryan", "Chang"]
let [firstName, lastName] = arr;
console.log(firstName);
console.log(lastName);
//work with complex function same as:
[firstName, lastName] = "Ryan Chang".split(' ');
//NOTE: the array itself is not modified

//ignore elements using an extra commas
arr = [1,2,3,4,5,6];
let [one,,three,,five] = arr;
console.log(one, three, five);

//can use any assignables at the left side
let numbers = {};
[numbers.one, numbers.two, numbers.three] = arr;
console.log(numbers);