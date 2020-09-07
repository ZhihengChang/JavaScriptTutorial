/*
there are two kinds of object properties
one is data properties
another one is accessor properties: they are essentially functions
that execute on getting and setting a value
*/
let obj = {
    get propName(){
        //getter, executed on getting ovj.propName
    },
    set propName(value){
        //setter, executed on setting obj.propName = value
    }
};

let user = {
    name: "Jhon",
    age: 21,
    get info(){
        return `${this.name}, ${this.age}`;
    },
    set info(value){
        [this.name, this.age] = value.split(", ");
    }
};
console.log(user.info);
user.info = "Ryan, 21"
console.log(user.name);

/*
accessor properties descriptors dont have value and writable
instead, they have:
get            a function without arguments, that works when a property is read
set            a function with one argument, that is called when the property is set
enumerable     same as for data properties
configurable   same as for data properties
*/
user = {
    name: "Jhon",
    age: 21,
};
Object.defineProperty(user, 'info', {
    get(){
        return `${this.name}, ${this.age}`;
    },

    set(value){
        [this.name, this.age] = value.split(", ");
    }
});
console.log(user.info);
//NOTE: property can be either an accessor has get/set
// or a data property has value, not both

//smarter getters/setters:
user = {
    get name(){
        return this._name;
    },
    set name(value){
        if(value.length < 4){
            console.log("Name is too short, need >= 4 characters");
            return;
        }
        this._name = value;
    }
}
user.name = "Pete";
console.log(user.name);
user.name = "";