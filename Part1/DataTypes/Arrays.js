//Array use to store ordered collections
let arr = new Array();
let anotherArr = [];

//initial elements can be supplied in the brackets:
let fruits = ['Apple', 'Banana', 'Orange'];

//accessing an element:
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//replacing an element:
fruits[0] = 'Pear';
console.log(fruits[0]);

//adding an element:
fruits[3] = 'Lemon';
console.log(fruits.length);

//show the whole array:
console.log(fruits);

//an array can store elements of any type:
let mixture = ['Apple', {name: 'Ryan'}, 21, true];
console.log(mixture[1].name);

//Array methods:
//push: appends an element to the end
//shift: get an element from the beginning, advancing the queue
//pop: takes an element from the end
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.push("Apple"));
console.log(fruits);

//unshift: add the element to the beginning of the array
fruits.unshift("Panapple");
console.log(fruits);

//Note: push and unshift can add multiple elements at once
fruits.push('Strawberry', 'Blueberry')
console.log(fruits);

//NOTE: array is an object, so its copied by reference:
let copy = fruits;
console.log(copy === fruits);
copy.push("Grape");
console.log(fruits);

//NOTE: unshift and shift run show, push and pop run fast
//      the more elements in the array, the more time to move them
//      more in memory operations.

//loops:
for(let fruit of fruits){
    console.log(fruit);
}

//truncate elements:
fruits.length = 4;
console.log(fruits);
//so the simplest way to clear the array is .length = 0
fruits.length = 0;
console.log(fruits);

//new Array()
let bag = new Array("Apple", "Pear", "etc");
console.log(bag);
//single argument for length
bag = new Array(2);
console.log(bag.length);
console.log(bag);

//Multidimensional array
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix[1][1]);

//toString
arr = [1,2,3]
console.log(arr.toString());
console.log();
console.log();
console.log();