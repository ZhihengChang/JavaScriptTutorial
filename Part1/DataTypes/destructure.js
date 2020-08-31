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
//any iterable
let [a, b, c] = "abc";
console.log(a, b, c);

//can be use to loop over keys-and-values, smae for map
for(let [key, value] of Object.entries(numbers)){
    console.log(`${key}: ${value}`);
}

//swapping veriables:
let guest = "Jhon", admin = "Pete";
[guest, admin] = [admin, guest];
console.log(guest, admin);

//the rest: ...
[a,b, ...rest] = "abcdef";
console.log(a, b, rest);

//default values
let [firstname = "Guest", lastname = "Anonymous"] = ["Ryan"];
console.log(firstname, lastname);
//NOTE: default values can be complex expressions or even function calls

//Object destructring
//NOTE: the order doesn't matter
let setting = {
    name: "cube",
    width: 100,
    height: 200,
    x: 150,
    y: 0,
};
//let{name, width, height, x, y} = setting;
//console.log(name, width, height, x, y);

//{sourceProperty: targetVariable}
//means {what: goesWhere}
//missing properties we can set default valus using =
let {width: w, height: h, x, y, name} = setting;
console.log(name, w, h, x, y);
//can be use to extract what we need
//object work with ...rest as well

//Smart function parameters:
//destructuring in parameters
let options = {
    title: "My Page",
    items:["item1", "item2"]
}
function showPage({title = "Untitled", width = 200, height = 100, items = []}){
    console.log(title, width, height, items);
}
showPage(options);




