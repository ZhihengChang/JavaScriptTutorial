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