//Extending Error
/*
built in Error:
class Error{
    constructor(message){
        this.message = message;
        this.name = "Error";
        this.stack = <call stack>
    }
}
*/
class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}
function test(){
    throw new ValidationError("Whoops");
}

try{
    test();
}catch(err){
    console.log(err.message);
    console.log(err.name);
}

//future inheritance
class PropertyRequiredError extends ValidationError{
    constructor(property){
        super("No property: " + property);
        this.name = "PropertyRequired Error";
        this.property = property;
    }
}
//Usage:
function readUser(json) {
    let user = JSON.parse(json);
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
    return user;
}
  
try{
    let user = readUser('{ "age": 25 }');
    console.log(user.name, user.age);
}catch(err){
    if (err instanceof ValidationError) {
        console.log("Invalid data: " + err.message);
        console.log(err.name); 
        console.log(err.property);
    } else if (err instanceof SyntaxError) {
        console.log("JSON Syntax Error: " + err.message);
    } else {
        throw err;
    }
}