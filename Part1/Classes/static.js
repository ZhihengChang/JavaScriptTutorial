//Static properties and methods
//assign a method to the class function itself 
//not to its prototype is called static
class User{
    static staticMethod(){
        console.log(this === User);
    }
}
User.staticMethod();
//Usually static methods are used to implement functions 
//that belongs to the class, but not to any particular object of it
class Num{
    constructor(value){
        this.value = value;
    }
    static compare(numA, numB){
        return numA.value - numB.value;
    }
}
let nums = [
    new Num(4),
    new Num(2),
    new Num(7),
    new Num(5),
];
nums.sort(Num.compare);
console.log(nums);

//can be used as factory method:
class Baby{
    constructor(name, date){
        this.name = name;
        this.date = date;
    }
    static bornToday(){
        return new this("Unnamed Baby", new Date());
    }
}
let firstBaby = Baby.bornToday();
console.log(firstBaby);

//static properties
class Book {
    static author = "Jhon Smith";
}
console.log(Book.author);