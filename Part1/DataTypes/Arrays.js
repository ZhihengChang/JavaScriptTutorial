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

//Other Array methods:
//splice: delete an element from the array
//arr.splice(index[, deleteCount, elem1, ..., elemN])
//start from index then removes deleteCount elements 
//and then insert elem1 ... elemN at their place
//returns the array of removed elements
arr.splice(1,1);
console.log(arr);
//arr = [1,3]
let removed = arr.splice(0, 1, 0.5, 1.5, 2.5);
console.log(arr);
console.log(removed); //is an array

//slice: simlar to splice
//arr.slice([start], [end])
//returns a new array copying to it all items from start to end (exclusive)
//both start and end can be negative
//arr = [0.5, 1.5, 2.5, 3]
console.log(arr.slice(1,3)); //copy
console.log(arr);
//slice can call without arguments which creates a copy of arr

//concat: creates a new array that includes values from other arrays
//and additional items:
//arr.concat(arg1, arg2, ...)
//The result is a new array containing items from arr, then arg1, arg2...
console.log(arr.concat(4, 5)); //new array
console.log(arr.concat([4, 5], 6, 7));

//Objects are copied as a whole:
console.log(arr.concat({0: "something"}));
//Object has a special symbol.isConcatSpreadable property:
let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
}
console.log(arr.concat(arrayLike));

//Iterate: forEach
//forEach allows to run a function for every element of the array
arr.forEach(function(item, index, array){
    console.log(`${item} is at index ${index} in ${array}`);
});

//Searching in array
/*
indexOf(item, from): looks for item starting from index from,
                     and returns the index where it was found, -1 otherwise
lastIndexOf(item, from): same, but looks for from right to left
includes(item, from): looks for item starting from index from rturns true if found
*/
//arr = [0.5, 1.5, 2.5, 3];
console.log(arr.indexOf(2.5));
console.log(arr.indexOf(4));
//NOTE: the method use === comparison. So it finds exactly the argument
//NOTE: includes handles NaN correctly unlike indexOf and lastIndexOf
let nothing = [NaN]
console.log(nothing.indexOf(NaN)); //should be 0
console.log(nothing.includes(NaN));

//find and findIndex
let users = [
    {id: 1, name: "Ryan"},
    {id: 2, name: "Jhon"},
    {id: 3, name: "Mary"},
    {id: 4, name: "Ann"}
]
// let result = users.find(function(item, index, array){
//     //if true is returned, item is returned and iteration is stopped
//     //for false scenario returns undefined
// });
let result = users.find(item => item.name.length < 4);
console.log(result);

//filter
//there may be many items we want to find, we can use .filter(func)
result = users.filter(item => item.name.length == 4);
console.log(result);

//transforming an array
//map(): calls the function for each element of the array and returns the array of results
result = users.map(item => item.name.length);
console.log(result);

//sort(func): sorts the array in place changing its element order using provided function
arr = [1,4,7,3,9,1,6];
arr.sort(function(a, b) { return a - b; });
console.log(arr);  // 1, 2, 15

//reverse: reverse the order of elements in the array
arr = [1,2,3,4];
arr.reverse();
console.log(arr);

//split: splits the string into an array by the diven delimiter
let str = "one, two, three";
arr = str.split(", ");
console.log(arr);
//NOTE: set delimeter to '' to split the str into letters

//join: reverse of split:
str = arr.join("; ");
console.log(str);

/*
reduce/reduceRight
use to calculate a single value based on the array
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);
accumulator     – is the result of the previous function call, 
                  equals initial the first time (if initial is provided).
item            – is the current array item.
index           – is its position.
array           – is the array.
*/
arr = [1,2,3,4,5];
let sum = arr.reduce((acc, current) => acc + current, 0);
console.log(sum);

//check is array: isArray
console.log(Array.isArray(arr));