//Weak map doesn't prevent garbage collection of key objects
//NOTE: weak map keys mast be objects
let weakmap = new WeakMap();
let emptyObj = {};
weakmap.set(emptyObj, "ok");//works
//weakmap.set("string", 123) //Error
weakmap.clear();
console.log(weakmap.size);