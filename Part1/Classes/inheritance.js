//Class inheritance
//extends:
class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      console.log(`${this.name} stands still.`);
    }
}
let animal = new Animal("animal");

class Rabbit extends Animal{
    hide(){
        console.log(`${this.name} hides!`);
    }
}
let rabbit = new Rabbit("White Rabbit");
rabbit.run(5);
rabbit.hide();

//overriding a method:
//super.method() to call a parent method
//super() to call a parent constructor 
class Dog extends Animal{
    hide(){
        console.log(`${this.name} hides!`);
    }
    stop(){
        super.stop();
        this.hide();
    }
}
let dog = new Dog("Dog");
dog.run(8);
dog.stop();

//Overriding constructor
class Bird extends Animal{
    constructor(name, wingLength){
        super(name);
        this.wingLength = wingLength;
    }
}
let bird = new Bird("bird", 10);
console.log(bird.name);
console.log(bird.wingLength);
