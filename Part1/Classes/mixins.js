//a mixin is a class containing methods that can be used
//by other classes without a need to inherit from it
//simplest way to implement a mixin in JS is to make an object with useful methods
let sayMixin = {
    sayHi(){
        console.log("Hello, " + this.name);
    },
    sayBye(){
        console.log("Bye, " + this.name);
    }
};
class User{
    constructor(name){
        this.name = name;
    }
}
Object.assign(User.prototype, sayMixin);
new User("Dude").sayHi();

//NOTE: there is no inheritance, but a simple method copying
//so User may inherit from another class and also include the mixin
let sayHiMixin = {
    __proto__: sayMixin,
    sayHiAndBye(){
        super.sayHi();
        super.sayBye();
    }
}
Object.assign(User.prototype, sayHiMixin);
new User("Dude").sayHiAndBye();

//EventMixin
let eventMixin = {
    //Subscribe to event
    //menu.on('select', function(item) { ... }
    on(eventName, handler) {
      if (!this._eventHandlers) this._eventHandlers = {};
      if (!this._eventHandlers[eventName]) {
        this._eventHandlers[eventName] = [];
      }
      this._eventHandlers[eventName].push(handler);
    },
  
    //Cancel the subscription
    //menu.off('select', handler)
    off(eventName, handler) {
      let handlers = this._eventHandlers?.[eventName];
      if (!handlers) return;
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i--, 1);
        }
      }
    },

    //Generate an event with the given name and data
    //this.trigger('select', data1, data2);
    trigger(eventName, ...args) {
      if (!this._eventHandlers?.[eventName]) {
        return; // no handlers for that event name
      }
      // call the handlers
      this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    }
};

class Menu {
  choose(value) {
    this.trigger("select", value);
  }
}
// Add the mixin with event-related methods
Object.assign(Menu.prototype, eventMixin);
let menu = new Menu();
menu.on("select", value => console.log(`Value selected: ${value}`));
menu.choose("123");