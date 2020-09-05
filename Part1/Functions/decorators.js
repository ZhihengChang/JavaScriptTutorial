//transparent caching
function slow(n){
    //assume this is a heavy cpu-intensive job
    //takes a long time to calculate the result
    return n ** 2;
}
//decorator
function cachingDecorator(func){
    let cache = new Map();
    return function(x){
        console.log(cache.has(x));
        if(cache.has(x)){
            return cache.get(x);
        }
        let result = func(x);
        cache.set(x, result);
        return result;
    };
}

slow = cachingDecorator(slow);
console.log(slow(2)); //slow(2) is cached;
console.log(slow(2)); //get from cache

//function.call explict sets this
function sayHi(){
    console.log(this.name);
}
let jhon = {name: "John"};
// sayHi()//Error
sayHi.call(jhon);

function say(phrase){
    console.log(this.name + `: ${phrase}`);
}
say.call(jhon, "Hello");

