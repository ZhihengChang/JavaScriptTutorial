//Private and protected properties and methods
/*
Internal and external interface
- internal      methods and properties, 
                accessible from other methods of the class
                but not from the outside
- external      methods and properties accessible also from outside

In JS, there are public and private object fields
*/
class CoffeeMachine1 {
    waterAmount = 0; // the amount of water inside
    constructor(power) {
      this.power = power;
      console.log( `Created a coffee-machine, power: ${power}` );
    }
}
let coffeeMachine = new CoffeeMachine(100);
coffeeMachine.waterAmount = 200;
//both waterAmount and power are public

//protect waterAmount from negative value
class CoffeeMachine2 {
    _waterAmount = 0;
    constructor(power) {
      this.power = power;
    }

    set waterAmount(value){
        if(value < 0) throw new Error("Negative water");
        this._waterAmount = value;
    }

    get waterAmount(){
        return this._waterAmount;
    }
}

//read only power:
class CoffeeMachine3 {
    constructor(power) {
      this._power = power;
    }

    get power(){
        return this._power;
    }
}

//Private:
class CoffeeMachine4 {
    #waterLimit = 200; //private field
    //private method:
    #checkWater(value){
        if(value < 0) throw new Error("Negative water");
        if(value > this.#waterLimit) throw new Error("Too much water");
    }
    //accessor for waterLimit
    get waterLimit(){
        return this.#waterLimit;
    }
}
//NOTE: private field cant access from outside of the class