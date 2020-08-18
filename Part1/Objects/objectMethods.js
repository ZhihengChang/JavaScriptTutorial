//Objects are usually created to represent entities of the real world
let user = {
    name : "Ryan",
    age : 21
};
//a user can act
//Actions are represented in JS by functions in properties
user.sayHi = function(){
    console.log("Hello");
};
//user.sayHi();

//Method shorthand
user = {
    sayHi: function(){
        console.log("Hello");
    }
};
//or
user = {
    sayHi(){
        console.log("Hello");
    }
}

//"this" methods
user = {
    name: "Ryan",
    age: 21,
    sayHi(){
        //this will be this user object
        console.log(this.name);
    }
}
user.sayHi();

//However in JS, this method can be used in any function
function sayHi(){
    console.log(this.name);
}
let p1 = {name: "John"};
let p2 = {name: "Ann"};
p1.f = sayHi; // this == p1
p2.f = sayHi; // this == p2
p1.f();
p2.f();
p2['f'](); //another way to call object method

//Arrow function have no "this" method
let p3 = {
    name: "Ilya",
    sayHi() {
      let arrow = () => console.log(this.name);
      arrow();
    }
};
p3.sayHi(); 