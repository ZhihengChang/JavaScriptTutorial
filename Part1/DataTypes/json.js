//JSON.stringify: convert objects into JSON
//JSON.parse: convert JSON back into an object
let shoppingCart = {
    username: "Ryan",
    numberOfItems: 4,
    items: ["something", "more things", "other things", "last thing"],
    total: 200,
    address: "a address",
    oneDayShipping: false,
}
let json = JSON.stringify(shoppingCart);
console.log(typeof json);
console.log(json);
//NOTE: json use double quotes, all properties name is double quoted
//Supported types:
/*
Objects
Arrays 
Primitives
strings
numbers
boolean values
null
*/
//NOTE: a number in Json is just a number
//some properties are skipped by json.stringify:
//funcitons, symbols, properties that store undefined
//circular references will throw error:
let john = {
    name: "john",
    age: 31,
};
let mary = {
    name: "mary",
    age: 28,
};
john.wife = mary;
mary.husband = john;
// console.log(JSON.stringify(john)); //Error

//replacer:
console.log(JSON.stringify(shoppingCart,
    ['username', 'numberOfItems', 'total', 'address']));

//same as:
console.log(JSON.stringify(shoppingCart, function replacer(key, value){
    return (key == 'items' || key == 'oneDayShipping')?
    undefined : value; 
}));

//formatting:
console.log(JSON.stringify(shoppingCart, null, 2));

//custom "toJSON"
let room = {
    number: 23,
    //default toJSON returns: {number: 23}
    toJSON() {
      return this.number;
    }
};
let meetup = {
    title: "Conference",
    room
};
console.log( JSON.stringify(room) ); // 23
console.log( JSON.stringify(meetup) );

//JSON.parse: decode json string
let str = `
{"name": "John",
"age": 21,
"isAdmin": false,
"friends": [1,2,3],
"parents": {
"mom": "Mary",
"dad": "Tom"
}}`;
let person = JSON.parse(str);
console.log(person);

//reviver:
str = '{"title":"Conference", "date":"2020-11-30T12:00:00.000Z"}';
// let meeting = JSON.parse(str);
// console.log(meeting); //the date is a string not a date object
let meeting = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
  });
console.log(meeting);