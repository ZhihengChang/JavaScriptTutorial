//var vs. let vs. const
/*
var has no block scope
either function-wide or global
visible through blocks
*/
if(true){
    var test1 = "visible";
    let test2 = "invisible"
}
console.log(test1);
// console.log(test2); //Error
//same for loops:
for(var i = 0; i < 10; i++){
    //do nothing
}
console.log(i);

//if inside a function, var becomes a function level variable
function sayHi(){
    if(true){
        var str = "hello";
    }
    console.log(str);
}
sayHi();
// console.log(str); //Error

//var tolerates redeclarations
var name = "Jhon";
var name = "Ryan";
console.log(name);

//var can be declared below use
greetings = "Hi";
console.log(greetings);
var greetings;