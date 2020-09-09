//The class syntax:
class MyClass {
    //class methods
    constructor(){}
    method1(){}
    method2(){}
    //...
}
//The constructor() method is called automatically by new

class User{
    constructor(name, pwd){
        this.usn = name;
        this.pwd = pwd;
    }
    welcome(){
        console.log("Wellcome, " + this.usn);
    }
}
let user = new User("John", "123");
user.welcome();
console.log(typeof user);

//NOTE: class methods are non-enumeralbe
for(let prop in user) console.log(prop);

//Class expression: similar to named function expression
let obj = class{
    info(){
        console.log("This is an object");
    }
};

//getters and setters:
class Person {
    constructor(name){
        this.name = name;
    }
    get name(){
        return this._name;
    }
    set name(value){
        if(value.length < 4){
            console.log("Name is too short");
            return;
        }
        this._name = value;
    }
}
let jhon = new Person("Jhon");
console.log(jhon.name);
jhon.name = "Ace";

//computed names [...]
class Ex {
    ['computed' + 'Name'](){
        console.log("this is a function");
    }
}
new Ex().computedName();

//Class field
class Item{
    name = "Ball";
    price = 20;
    
    info(){
        console.log(`Item: ${this.name}, $${this.price}`);
    }
}
new Item().info();

//another solution to 'losing this'
//similar to wrapper-function and bind the method to object
class Button{
    constructor(value){
        this.value = value;
    }
    click = () =>{
        console.log(this.value);
    }
}
let button = new Button("hello");
setTimeout(button.click, 1000);