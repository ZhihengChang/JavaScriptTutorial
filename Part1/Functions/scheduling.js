//setTimeout and setInterval
//setTimeout allows us to run a function once after a time
//setInterval allows us to run a function repeatedly

//let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...)
//NOTE: delay is in ms (1000 = 1) by default = 0
function sayHi(){
    console.log('Hello');
}
setTimeout(sayHi, 1000);
//NOTE:pass a function, don't run: setTimeout(sayHi(),...)
//with arguments:
function sayHello(who){
    console.log(`Hello, ${who}`);
}
setTimeout(sayHello, 2000, 'Ryan');

//arrow function:
setTimeout(()=>console.log("Whats up"), 3000);

//Cancel timeout:
let timerId = setTimeout(()=> console.log("nothing happens", 1000));
console.log(timerId);
//NOTE: doesnt become null after canceling
clearTimeout(timerId);
console.log(timerId);

//setInterval:
//let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...);
timerId = setInterval(()=> console.log('tick'), 2000);
//repeat with the interval of 2s
//use clearInterval to make it stop:
setTimeout(()=>{
    clearInterval(timerId);
    console.log('stoped');
}, 6000);
//nested setTimeout same as setInterval:
// timerId = setTimeout(function tick() {
//     console.log('tick');
//     timerId = setTimeout(tick, 2000);
// }, 2000);

