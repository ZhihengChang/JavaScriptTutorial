//Function Declaration
function showMessage(){
    console.log("Hello");
}
showMessage();

//local variables
function showMessage2(){
    //message is a local variable
    let message = "Hello 2";
    console.log(message);
}
showMessage2();

//Outer variables, also called global variables
//Global variables are visible from any function
let username = "Ryan";
function showMessage3(){
    //the function also have the access to the outer variable. 
    //username = Jhon; 
    //changed username from Ryan to Jhon
    let message = "Hello, " + username;
    console.log(message);
}
showMessage3();

//The outer variable is only used if there is no local one.
let password = "123";
function newPassword(){
    let password = "456";
    console.log(password);
}
newPassword();
console.log(password);

//Parameters
function showMessage4(from, text){
    console.log(`${from}: ${text}`);
}
showMessage4("Ryan", "hello!");

//the function modified a local copy of the parameters
function showMessage5(from, text){
    from = "*" + from + "*";
    console.log(`${from}: ${text}`);
}
let from = "Ryan";
showMessage5(from, "bye!");
console.log(from);

//functions can have default values
function showMessage6(from, text = "no text given"){
    console.log(`${from}: ${text}`);
    //another way to handle default text:
    // text = text || 'empty';
    // console.log(`${from}: ${text}`);
}
showMessage6(from);

//nullish in function:
function showCount(count){
    console.log(count ?? "unknow");
}
showCount(0);
showCount(null);

//Returning a value
//return can also used to exit a function immediately
//NOTE: a function does not return a value it is same as if it returns undefined
function sum(a, b){
    return a + b;
}
console.log(sum(1,2));

//EX:
function pow(x, n){
    return x ** n;
}
console.log(pow(2,2));

//Function expressions
let sayHi = function(){
    console.log("Hello");
};
console.log(sayHi); //this shows the function code
//we can call the function using:
sayHi();
//console.log(sayHi()); 
//this prints out hello and the function return value which is undefined

console.log("###")
//in Js, a function is a value so we can deal with it as a value
let func = sayHi;
func();
sayHi();

//callback functions
function ask(yesOrNo, yes, no){
    (yesOrNo == "yes")? yes() : no();
}
function showOk(){
    console.log("Okay.");
}
function showCancel(){
    console.log("Canceled.");
}
ask("yes", showOk, showCancel);
//showOk becomes the callback of yes

//function expression vs function declearation
//the function expression is usable when the computer reaches it
//however with function declearation, the function can be called before its declearation.

//Arrow functions
//let func = (arg1, arg2, ... argN) => expression
let product = (a, b) => a * b;
console.log(product(2,2));

let double = n => 2 * n;
console.log(double(3));

let sayHello = () => console.log("Hello");
sayHello();

//Arrow functions can be used in the same way as function expressions
let age = 18;
let welcome = (age < 18)?
    ()=> console.log('Hello') :
    ()=> console.log('Greetings');
welcome();

//Multiline arrow functions
let divide = (a, b) => {
    if(!b) return "Error";
    return a/b;
}
console.log(divide(1,0));
